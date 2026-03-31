import { motion } from 'motion/react';
import { ArrowRight, Cpu, Zap, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-surface-3 pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* 简化的背景 - 使用微妙的形状而非渐变 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 标签 */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Cpu className="w-4 h-4" />
            消费电子 AI 解决方案
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface tracking-tight mb-6 leading-tight">
            大模型重构 <br className="hidden md:block" />
            <span className="text-primary">
              消费电子创新范式
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-on-surface-variant mb-8 leading-relaxed">
            依托千帆大模型平台，提供"云智一体，智能优先"的AI云基础设施。
            <br className="hidden sm:block" />
            为智能硬件提供稳定可靠、智慧体验、生态加持的一站式解决方案。
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="#主推产品"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-medium transition-all flex items-center justify-center group"
            >
              立即体验方案
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#生态合作"
              className="bg-surface-1 hover:bg-white text-on-surface border border-surface-3 px-8 py-4 rounded-lg text-lg font-medium transition-all shadow-sm"
            >
              获取行业白皮书
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Cpu, title: '原生全模态', desc: '文心5.0大模型，理解与生成一体化' },
            { icon: Zap, title: '1.3s 低延时', desc: '端到端音频延时低至1.3s，交互更流畅' },
            { icon: Globe, title: '全球化部署', desc: '支持多语种及方言，保障海内外低延时' }
          ].map((item, i) => (
            <div key={i} className="bg-surface-1 border border-surface-3 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-on-surface mb-2">{item.title}</h3>
              <p className="text-on-surface-variant text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
