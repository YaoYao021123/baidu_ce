import { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, Cpu, Cloud, Smartphone, Radio, ChevronRight } from 'lucide-react';

// 技术架构图配置
const architectureDiagrams = [
  {
    id: 'tech-route',
    title: '多模态实时交互技术路线',
    description: '基于 WebSocket 的端云协同架构，支持文本、语音、图片、视频流多种交互方式',
    image: '/images/content/多模态实时交互技术路线.svg',
    icon: Layers,
  },
  {
    id: 'framework',
    title: '多模态互动框架',
    description: '集成语音增强、ASR、多模态模型的完整互动框架',
    image: '/images/content/多模态互动框架.svg',
    icon: Cpu,
  },
  {
    id: 'cloud-edge',
    title: '端云协同架构',
    description: '设备端与云端的协同控制架构，支持 Function Calling 和 MCP 协议',
    image: '/images/content/端云协同.svg',
    icon: Cloud,
  },
  {
    id: 'audio',
    title: '音频增强方案',
    description: '端侧 AI 降噪、声音增益、回声消除，配合云端 ASR 语音转文字',
    image: '/images/content/音频增强方案.svg',
    icon: Radio,
  },
];

export default function TechArchitecture() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDiagram = architectureDiagrams[activeIndex];

  return (
    <section className="py-24 bg-surface-2" id="技术路线">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">
            技术架构与路线
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            端云协同的多模态交互架构，为智能硬件提供稳定、低延时的 AI 能力
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {architectureDiagrams.map((diagram, index) => {
            const Icon = diagram.icon;
            const isActive = index === activeIndex;
            return (
              <button
                key={diagram.id}
                onClick={() => setActiveIndex(index)}
                className={`p-4 rounded-xl text-left transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-surface-1 text-on-surface hover:bg-surface-3 border border-surface-3'
                }`}
              >
                <Icon className={`w-6 h-6 mb-3 ${isActive ? 'text-white' : 'text-primary'}`} />
                <h3 className="font-semibold text-sm">{diagram.title}</h3>
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeDiagram.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-surface-1 rounded-2xl p-6 md:p-8 shadow-sm border border-surface-3"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-on-surface mb-2">
                {activeDiagram.title}
              </h3>
              <p className="text-on-surface-variant">
                {activeDiagram.description}
              </p>
            </div>
            <button className="mt-4 md:mt-0 inline-flex items-center text-primary font-medium hover:underline">
              查看详情 <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          <div className="bg-surface-2 rounded-xl p-4 overflow-x-auto">
            <img
              src={activeDiagram.image}
              alt={activeDiagram.title}
              className="w-full h-auto max-h-[500px] object-contain mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
