import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react';

export default function PainPoints() {
  return (
    <section className="py-24 bg-surface-2" id="解决方案">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">产业落地的真正瓶颈</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            从 Demo 到量产，跨越体验工程化与商业可持续的鸿沟
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-surface-1 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-error flex items-center mb-6">
                <AlertCircle className="w-6 h-6 mr-2" />
                当前阶段的真正挑战
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-error mr-3" />
                  <div>
                    <strong className="block text-on-surface mb-1">单点功能体验不足</strong>
                    <span className="text-on-surface-variant text-sm">单点功能难存留，缺乏"任务级体验"的整合。</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-error mr-3" />
                  <div>
                    <strong className="block text-on-surface mb-1">产品同质化严重</strong>
                    <span className="text-on-surface-variant text-sm">参数堆叠无效，陷入不可持续的价格战泥潭。</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-error mr-3" />
                  <div>
                    <strong className="block text-on-surface mb-1">AI功能不稳定，伤害信任</strong>
                    <span className="text-on-surface-variant text-sm">表现为"听不懂、反应慢、偶发失效"。比"没有智能"体验更糟糕。</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-primary p-8 rounded-2xl shadow-lg text-white">
              <h3 className="text-xl font-bold flex items-center mb-6">
                <TrendingUp className="w-6 h-6 mr-2 text-white/80" />
                破局路径：稳定可靠 + 智慧体验
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-white/80 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white mb-1">设计理念升级</strong>
                    <span className="text-white/80 text-sm">从"多一个功能"转向"少操作、能闭环、可解释"，聚焦极简与确定性体验。</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-white/80 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white mb-1">落地能力升级</strong>
                    <span className="text-white/80 text-sm">从"炫技 Demo"转向"工程稳定性+量产能力"，建立可规模化复制的质量标准。</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-white/80 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white mb-1">价值主张重构</strong>
                    <span className="text-white/80 text-sm">重构信任，提供真实、高频的用户价值，提升单品价值与服务收入占比。</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
