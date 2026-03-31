import { Pool } from 'pg';
import { Resend } from 'resend';

const requiredFields = ['name', 'phone', 'email', 'companyName', 'requirement'];

const connectionString = process.env.DATABASE_URL;
const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL || 'yaoyao17@baidu.com';
const resendFromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

let pool;

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function getPool() {
  if (!connectionString) {
    throw new Error('DATABASE_URL is not configured');
  }

  if (!pool) {
    pool = new Pool({
      connectionString,
      ssl: connectionString.includes('sslmode=require') ? { rejectUnauthorized: false } : undefined,
    });
  }

  return pool;
}

async function ensureTable(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS lead_submissions (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT NOT NULL,
      company_name TEXT NOT NULL,
      interested_product TEXT,
      requirement TEXT NOT NULL,
      source TEXT NOT NULL DEFAULT 'website',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
}

function validatePayload(payload) {
  const normalized = {
    name: String(payload?.name || '').trim(),
    phone: String(payload?.phone || '').trim(),
    email: String(payload?.email || '').trim(),
    companyName: String(payload?.companyName || '').trim(),
    interestedProduct: String(payload?.interestedProduct || '').trim(),
    requirement: String(payload?.requirement || '').trim(),
  };

  for (const field of requiredFields) {
    if (!normalized[field]) {
      throw new Error('请完整填写联系信息与需求描述');
    }
  }

  return normalized;
}

async function sendNotification(payload) {
  if (!process.env.RESEND_API_KEY) {
    return { sent: false, reason: 'RESEND_API_KEY is not configured' };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const safePayload = {
    ...payload,
    name: escapeHtml(payload.name),
    phone: escapeHtml(payload.phone),
    email: escapeHtml(payload.email),
    companyName: escapeHtml(payload.companyName),
    interestedProduct: escapeHtml(payload.interestedProduct || '未填写'),
    requirement: escapeHtml(payload.requirement).replace(/\n/g, '<br />'),
  };

  await resend.emails.send({
    from: resendFromEmail,
    to: [notifyEmail],
    subject: `百度智能云官网新线索 | ${payload.companyName} | ${payload.name}`,
    html: `
      <h2>收到新的官网需求提交</h2>
      <p><strong>姓名：</strong>${safePayload.name}</p>
      <p><strong>电话：</strong>${safePayload.phone}</p>
      <p><strong>邮箱：</strong>${safePayload.email}</p>
      <p><strong>公司：</strong>${safePayload.companyName}</p>
      <p><strong>关注产品：</strong>${safePayload.interestedProduct}</p>
      <p><strong>需求描述：</strong></p>
      <p>${safePayload.requirement}</p>
    `,
  });

  return { sent: true };
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const payload = validatePayload(req.body);
    const client = await getPool().connect();

    try {
      await ensureTable(client);
      await client.query(
        `
          INSERT INTO lead_submissions (
            name,
            phone,
            email,
            company_name,
            interested_product,
            requirement
          )
          VALUES ($1, $2, $3, $4, $5, $6)
        `,
        [
          payload.name,
          payload.phone,
          payload.email,
          payload.companyName,
          payload.interestedProduct || null,
          payload.requirement,
        ]
      );
    } finally {
      client.release();
    }

    let emailResult = { sent: false };
    try {
      emailResult = await sendNotification(payload);
    } catch {
      emailResult = { sent: false };
    }

    res.status(200).json({
      message: emailResult.sent ? '提交成功' : '提交成功，邮件通知暂未启用',
      emailSent: emailResult.sent,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : '服务器处理失败';
    const status = message === 'DATABASE_URL is not configured' ? 500 : 400;
    res.status(status).json({ message });
  }
}
