import { useState } from 'react';
import { motion } from 'motion/react';
import { Mic, Eye, UserSquare2, ListTodo, Settings2, Blocks } from 'lucide-react';

const tabs = [
  { id: 'voice', label: '语音交互', icon: Mic },
  { id: 'vision', label: '视觉交互', icon: Eye },
  { id: 'digital', label: '数字人交互', icon: UserSquare2 },
  { id: 'task', label: '任务交互', icon: ListTodo },
  { id: 'device', label: '设备控制', icon: Settings2 },
];

const content = {
  voice: {
    title: '自然语言交互 LUI',
    desc: '提供7大音频增强（AI降噪、人声分离、声纹识别、VAD增强、智能打断等），端到端音频延时低至1.3s，实现贴近真人的自然交互体验。',
    features: ['互动指令', '知识问答', '智能打断', '声音克隆']
  },
  vision: {
    title: '多模态视觉理解',
    desc: '支持主动上传图片、视频实时流、问题触发视觉，按需文件上传更省电。结合文心5.0原生全模态大模型，实现精准的视觉问答与分析。',
    features: ['文档理解', '图片理解', '视频理解', '图像生成']
  },
  digital: {
    title: '情感化数字生命体',
    desc: '赋予设备"人格与粘性"，支持专属人设定制、长期记忆、情绪感知，让设备不仅是工具，更是懂你的成长伙伴。',
    features: ['实时双工', '形象定制', 'RAG问答', '情绪识别']
  },
  task: {
    title: '复杂任务云端协同',
    desc: '计算量大、复杂、耗时长的任务交由云端处理，作为终端的"伴侣"。支持内容渲染流化，让终端更轻便。',
    features: ['复杂任务', '屏幕任务', '渲染任务', '定时任务']
  },
  device: {
    title: '端云协同设备控制',
    desc: '采用 Function Calling、MCP 协议控制设备，接入系统预制及第三方服务。端侧离线唤醒，云上兜底复杂语意。',
    features: ['大模型指令', 'FC & MCP对接', '状态查询', '场景联动']
  }
};

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState('voice');

  return (
    <section className="py-24 bg-surface-1" id="产品能力">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">多模态大模型实时交互</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            架起智能硬件与 AI 大模型交互的桥梁，提供端到端的解决方案
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center p-4 rounded-xl transition-all text-left ${
                  activeTab === tab.id 
                    ? 'bg-primary/10 border-primary/30 border text-primary shadow-sm' 
                    : 'hover:bg-surface-2 text-on-surface-variant border border-transparent'
                }`}
              >
                <tab.icon className={`w-6 h-6 mr-4 ${activeTab === tab.id ? 'text-primary' : 'text-on-surface-dim'}`} />
                <span className="font-semibold text-lg">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-surface-2 rounded-2xl p-8 md:p-12 h-full border border-surface-3"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                {(() => {
                  const Icon = tabs.find(t => t.id === activeTab)?.icon;
                  return Icon ? <Icon className="w-6 h-6 text-primary" /> : null;
                })()}
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-4">
                {content[activeTab as keyof typeof content].title}
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                {content[activeTab as keyof typeof content].desc}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {content[activeTab as keyof typeof content].features.map((feature, i) => (
                  <div key={i} className="flex items-center bg-surface-1 p-4 rounded-xl shadow-sm border border-surface-3">
                    <Blocks className="w-5 h-5 text-accent mr-3" />
                    <span className="font-medium text-on-surface">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
