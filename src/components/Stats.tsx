import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, Cpu, Zap, Globe } from 'lucide-react';

// 计数动画 Hook
function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);
  
  return count;
}

export default function Stats() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });
  const isInView3 = useInView(ref3, { once: true, margin: "-100px" });
  const isInView4 = useInView(ref4, { once: true, margin: "-100px" });
  
  const count1 = useCountUp(500, 2000, isInView1);
  const count2 = useCountUp(5, 2000, isInView2);
  const count3 = useCountUp(1, 1500, isInView3);
  const count4 = useCountUp(30, 2000, isInView4);

  return (
    <section className="py-20 bg-surface-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">
            百度智能云 · 千帆大模型平台
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            依托百度领先的 AI 技术，为消费电子行业提供全栈智能化能力
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center p-6"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-on-surface mb-2">{count1}+</div>
            <div className="text-lg font-semibold text-on-surface mb-1">企业客户</div>
            <div className="text-sm text-on-surface-variant">覆盖家电、穿戴、玩具等品类</div>
          </motion.div>

          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center p-6"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Cpu className="w-7 h-7 text-primary" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-on-surface mb-2">{count2}.0</div>
            <div className="text-lg font-semibold text-on-surface mb-1">文心大模型</div>
            <div className="text-sm text-on-surface-variant">原生全模态，理解与生成一体化</div>
          </motion.div>

          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-6"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-on-surface mb-2">{count3}.3s</div>
            <div className="text-lg font-semibold text-on-surface mb-1">端到端延时</div>
            <div className="text-sm text-on-surface-variant">语音交互延时低至1.3秒</div>
          </motion.div>

          <motion.div
            ref={ref4}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center p-6"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-7 h-7 text-primary" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-on-surface mb-2">{count4}+</div>
            <div className="text-lg font-semibold text-on-surface mb-1">语种支持</div>
            <div className="text-sm text-on-surface-variant">支持多语种及方言，全球部署</div>
          </motion.div>
        </div>

        {/* 进度条展示 */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-surface-2 rounded-xl p-6 border border-surface-3">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-on-surface">智能化能力覆盖度</span>
              <span className="text-sm font-bold text-primary">94%</span>
            </div>
            <div className="w-full h-2 bg-surface-3 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '94%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-primary rounded-full"
              />
            </div>
            <p className="text-xs text-on-surface-dim mt-2">
              涵盖语音、视觉、数字人、任务协同、设备控制五大交互能力
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
