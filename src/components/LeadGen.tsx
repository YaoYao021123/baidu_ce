import { Send } from 'lucide-react';

export default function LeadGen() {
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

        <form className="bg-surface-1 rounded-2xl p-8 shadow-2xl text-left max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-on-surface mb-6 text-center">获取专属解决方案</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1">姓名</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-surface-3 bg-surface-1 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="您的姓名" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-1">联系电话</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border border-surface-3 bg-surface-1 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                  placeholder="您的手机号码" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-1">公司名称</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg border border-surface-3 bg-surface-1 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                placeholder="您的企业名称" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-1">需求描述</label>
              <textarea 
                rows={3} 
                className="w-full px-4 py-3 rounded-lg border border-surface-3 bg-surface-1 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" 
                placeholder="请简述您的硬件产品及智能化需求..."
              />
            </div>
            <button 
              type="button" 
              className="w-full bg-on-surface hover:bg-primary-dark text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-colors mt-4"
            >
              提交需求 <Send className="ml-2 w-5 h-5" />
            </button>
            <p className="text-center text-on-surface-dim text-sm mt-4">
              提交后，我们的行业专家将在1个工作日内与您联系
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
