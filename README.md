# 百度智能云硬件解决方案门户

消费电子行业门户站点，包含部门介绍、能力展示、技术方案、客户案例与官网链接导航。

## 本地运行

前置要求：Node.js 18+

1. 安装依赖：`npm install`
2. 启动开发：`npm run dev`
3. 构建产物：`npm run build`
4. 类型检查：`npm run lint`

## 目录结构

- `src/components/`：页面模块组件
- `public/images/`：静态资源（品牌、案例、技术图）
- `src/data/featuredProducts.ts`：主推产品配置
- `api/leads.js`：Vercel Serverless API，负责线索落库和邮件通知

## 线索提交后端

当前站点已接入一个最小可用的线索提交后端，适配 Vercel：

1. 前端表单提交到 `/api/leads`
2. API 自动写入 PostgreSQL 的 `lead_submissions` 表
3. API 使用 Resend 给 `yaoyao17@baidu.com` 发送新线索提醒

需要在 Vercel 项目中配置以下环境变量，可参考 [`.env.example`](/Users/yaoyao/code/baidu/html_ppt/src/.env.example)：

- `DATABASE_URL` 或 `POSTGRES_URL`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `CONTACT_NOTIFY_EMAIL`，默认会回退到 `yaoyao17@baidu.com`

建议在你提供的 Vercel 项目 `baidu_ce2` 中同步配置这些变量后再发布生产版本。
