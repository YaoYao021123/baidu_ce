import { motion } from 'motion/react';
import { Terminal, Monitor, Smartphone, Sparkles, ArrowRight } from 'lucide-react';

const evolutionSteps = [
  {
    icon: Terminal,
    era: '早期',
    title: 'CUI',
    subtitle: '字符交互',
    description: '文本输入、文本展示',
    device: '大型机、小型机',
  },
  {
    icon: Monitor,
    era: '1980s-2000s',
    title: 'GUI',
    subtitle: '图像交互',
    description: '图像界面、用手操作',
    device: 'PC、笔记本',
  },
  {
    icon: Smartphone,
    era: '2000s-2020s',
    title: '触控',
    subtitle: '触控交互',
    description: '触摸屏、手势操作',
    device: '智能手机、平板',
  },
  {
    icon: Sparkles,
    era: '2020s-',
    title: 'LUI',
    subtitle: '自然语言交互',
    description: '多模态、智能化',
    device: '智能硬件、AI 设备',
    highlight: true,
  },
];

export default function InteractionEvolution() {
  return (
    <section className="py-20 bg-on-surface text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            人机交互的变革
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            从字符命令到自然语言，AI 正在重新定义人与设备的交互方式
          </p>
        </div>

        {/* 横向时间线 - 简洁版 */}
        <div className="flex items-center justify-center gap-2 md:gap-4">
          {evolutionSteps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === evolutionSteps.length - 1;
            return (
              <div key={step.title} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-4 md:p-6 rounded-xl text-center transition-all min-w-[140px] md:min-w-[180px] ${
                    step.highlight
                      ? 'bg-primary shadow-lg shadow-primary/20'
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${
                    step.highlight ? 'bg-white/20' : 'bg-white/10'
                  }`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  
                  <div className="text-[10px] md:text-xs text-white/50 mb-1">{step.era}</div>
                  <h3 className="text-lg md:text-xl font-bold">{step.title}</h3>
                  <p className="text-xs md:text-sm font-medium text-white/80">{step.subtitle}</p>
                  <p className="text-[10px] md:text-xs text-white/50 mt-1 hidden md:block">{step.description}</p>
                  
                  {step.highlight && (
                    <span className="absolute -top-2 -right-2 text-[10px] bg-white text-primary px-2 py-0.5 rounded-full font-bold">
                      当前
                    </span>
                  )}
                </motion.div>
                
                {/* 箭头连接 */}
                {!isLast && (
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white/30 mx-1 md:mx-2 flex-shrink-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
