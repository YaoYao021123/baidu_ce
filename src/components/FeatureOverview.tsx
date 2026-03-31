import { motion } from 'motion/react';
import { Maximize2, ZoomIn } from 'lucide-react';
import { useState } from 'react';

export default function FeatureOverview() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-24 bg-surface-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">
            功能全景图
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            从芯片适配到云端服务，覆盖智能硬件开发全链路的能力矩阵
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-surface-2 rounded-2xl p-4 md:p-8 border border-surface-3"
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute top-4 right-4 z-10 p-2 bg-surface-1 rounded-lg shadow-sm border border-surface-3 hover:bg-primary hover:text-white transition-colors"
            title={isExpanded ? "收起" : "放大"}
          >
            {isExpanded ? <ZoomIn className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
          
          <div className={`overflow-x-auto ${isExpanded ? 'max-h-none' : 'max-h-[600px]'}`}>
            <img
              src="/images/content/功能全景图.svg"
              alt="功能全景图"
              className={`w-full h-auto object-contain mx-auto transition-all ${
                isExpanded ? 'max-w-none' : 'max-w-full'
              }`}
              style={{ minWidth: isExpanded ? '1200px' : 'auto' }}
            />
          </div>
        </motion.div>

        {/* 能力分类说明 */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: '系统适配', desc: '支持 RTOS、Android、iOS、Web 等多平台', color: 'bg-primary/10 text-primary' },
            { title: '芯片适配', desc: '乐鑫、杰理、博通、泰芯等主流方案', color: 'bg-secondary/10 text-secondary' },
            { title: '云端服务', desc: '语音识别、语义理解、内容生成', color: 'bg-accent/10 text-accent' },
            { title: '行业应用', desc: '智能家电、穿戴、玩具、机器人', color: 'bg-success/10 text-success' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-1 p-4 rounded-xl border border-surface-3"
            >
              <div className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${item.color}`}>
                {item.title}
              </div>
              <p className="text-sm text-on-surface-variant">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
