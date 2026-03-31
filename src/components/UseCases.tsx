import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play, X } from 'lucide-react';

const cases = [
  {
    title: '博西家电',
    subtitle: '智能家电新解法',
    tags: ['家电大模型', '智控语音', '智能菜谱'],
    desc: '结合千帆大模型多模态互动，实现语音交互、AI售前售后、功能解析、故障诊断及个性化推荐。',
    media: {
      type: 'video',
      src: '/images/content/cases/博西电器.mov',
      poster: '/images/content/cases/博西电器_poster.jpg'
    }
  },
  {
    title: '此际体脂秤',
    subtitle: '从测量到健康管家',
    tags: ['自然语言对话', '报告生成', 'AI问数'],
    desc: '搭载文心5.0全模态大模型，提供16项指标解读、历史记忆、饮食与健身建议，语音交互时延<1.3秒。',
    media: {
      type: 'image',
      src: '/images/content/cases/此际体脂秤.svg'
    }
  },
  {
    title: '火火兔',
    subtitle: '智能早教玩具',
    tags: ['拟人化', '长期记忆', '双向对话'],
    desc: '基于AI Agent打造有记忆、可进化的"生命体"，彻底脱离"非智能消耗品"属性，实现高度个性化专属定制。',
    media: {
      type: 'image',
      src: '/images/content/cases/火火兔.svg'
    },
    logo: '/images/brand/partners/火火兔logo.svg'
  },
  {
    title: '实丰文化',
    subtitle: '智能陪伴玩具',
    tags: ['情感陪伴', '儿童教育', '语音互动'],
    desc: '打造新一代智能陪伴玩具，结合大模型能力实现自然对话、故事讲述、知识问答等丰富互动体验。',
    media: {
      type: 'image',
      src: '/images/content/cases/小度熊.svg'
    },
    logo: '/images/brand/partners/实丰文化logo.svg'
  }
];

export default function UseCases() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <section className="py-24 bg-on-surface text-white" id="客户案例">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">成功案例分享</h2>
            <p className="text-lg text-white/60 max-w-2xl">
              各行业头部企业已率先接入，共建大模型时代的消费电子产业生态
            </p>
          </div>
          <button className="mt-6 md:mt-0 text-primary-light hover:text-white font-medium flex items-center transition-colors">
            查看更多案例 <ArrowUpRight className="ml-1 w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors"
            >
              {/* 媒体区域 */}
              <div className="relative aspect-[4/3] bg-white/5 overflow-hidden">
                {item.media.type === 'video' ? (
                  <div 
                    className="w-full h-full flex items-center justify-center cursor-pointer group/play"
                    onClick={() => setPlayingVideo(item.media.src)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="relative z-10 w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover/play:bg-primary group-hover/play:scale-110 transition-all">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <span className="absolute bottom-4 left-4 text-sm text-white/80">点击播放视频</span>
                  </div>
                ) : (
                  <img 
                    src={item.media.src} 
                    alt={item.title}
                    className="w-full h-full object-contain p-4"
                  />
                )}
                {item.logo && (
                  <img 
                    src={item.logo} 
                    alt={`${item.title} logo`}
                    className="absolute top-4 right-4 h-8 w-auto"
                  />
                )}
              </div>

              {/* 内容区域 */}
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-primary-light font-medium text-sm mb-3">{item.subtitle}</p>
                <p className="text-white/70 mb-4 line-clamp-2 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, j) => (
                    <span key={j} className="px-2 py-0.5 bg-white/10 text-white/80 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 视频弹窗 */}
      {playingVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setPlayingVideo(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/60 hover:text-white p-2"
            onClick={() => setPlayingVideo(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <video 
            src={playingVideo}
            className="max-w-full max-h-[80vh] rounded-lg"
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
