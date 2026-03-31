import { type FormEvent, useState } from 'react';
import { LoaderCircle, Send } from 'lucide-react';

import { featuredProducts } from '../data/featuredProducts';

export default function LeadGen() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    companyName: '',
    interestedProduct: featuredProducts[0]?.name ?? '',
    requirement: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('提交后，我们的行业专家将在1个工作日内与您联系');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState('idle');
    setMessage('正在提交需求，请稍候...');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || '提交失败，请稍后重试');
      }

      setFormData({
        name: '',
        phone: '',
        email: '',
        companyName: '',
        interestedProduct: featuredProducts[0]?.name ?? '',
        requirement: '',
      });
      setSubmitState('success');
      setMessage('需求已提交成功，我们会尽快与您联系，并同步发送提醒邮件。');
    } catch (error) {
      setSubmitState('error');
      setMessage(error instanceof Error ? error.message : '提交失败，请检查网络后重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden" id="生态合作">
      {/* 简化的背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          加入百度生态，一起定义未来
        </h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          从深圳出发走向全球，提供软硬一体化模组方案，携手产业加速消费电子行业跃迁。
        </p>

        <form className="bg-surface-1 rounded-2xl p-8 shadow-2xl text-left max-w-2xl mx-auto" onSubmit={handleSubmit}>
          <h3 className="text-2xl font-bold text-on-surface mb-6 text-center">获取专属解决方案</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1">姓名</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-surface-3 bg-surface-1 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="您的姓名" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1">联系电话</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-surface-3 bg-surface-1 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="您的手机号码" 
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1">公司名称</label>
                <input 
                  type="text"
                  value={formData.companyName}
                  onChange={(event) => setFormData((current) => ({ ...current, companyName: event.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-surface-3 bg-surface-1 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="您的企业名称"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1">邮箱</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-surface-3 bg-surface-1 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="您的邮箱"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-1">关注产品</label>
              <select
                value={formData.interestedProduct}
                onChange={(event) => setFormData((current) => ({ ...current, interestedProduct: event.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-surface-3 bg-surface-1 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              >
                {featuredProducts.map((product) => (
                  <option key={product.name} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-1">需求描述</label>
              <textarea 
                rows={3} 
                value={formData.requirement}
                onChange={(event) => setFormData((current) => ({ ...current, requirement: event.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-surface-3 bg-surface-1 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" 
                placeholder="请简述您的硬件产品及智能化需求..."
                required
              />
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-on-surface hover:bg-primary-dark disabled:bg-on-surface-dim disabled:cursor-not-allowed text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-colors mt-4"
            >
              {isSubmitting ? (
                <>
                  提交中 <LoaderCircle className="ml-2 w-5 h-5 animate-spin" />
                </>
              ) : (
                <>
                  提交需求 <Send className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
            <p
              className={`text-center text-sm mt-4 ${
                submitState === 'error'
                  ? 'text-error'
                  : submitState === 'success'
                    ? 'text-success'
                    : 'text-on-surface-dim'
              }`}
            >
              {message}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
