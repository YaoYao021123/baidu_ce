import { motion } from 'motion/react';

export default function Partners() {
  return (
    <section className="py-20 bg-surface-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-4">
            他们已经选择百度智能云
          </h2>
          <p className="text-on-surface-variant">
            各行业头部企业率先接入，共建大模型时代的消费电子产业生态
          </p>
        </div>

        {/* Logo 墙 - 使用 SVG 图片 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-1 rounded-2xl p-6 md:p-8 border border-surface-3 overflow-x-auto"
        >
          <img
            src="/images/brand/partners/logo墙.svg"
            alt="合作伙伴"
            className="w-full h-auto max-h-[400px] object-contain mx-auto"
          />
        </motion.div>

        {/* 合作数据 */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-on-surface-variant">合作企业</div>
          </div>
          <div className="w-px h-12 bg-surface-3 hidden sm:block" />
          <div>
            <div className="text-3xl font-bold text-primary">10+</div>
            <div className="text-sm text-on-surface-variant">行业覆盖</div>
          </div>
          <div className="w-px h-12 bg-surface-3 hidden sm:block" />
          <div>
            <div className="text-3xl font-bold text-primary">1000万+</div>
            <div className="text-sm text-on-surface-variant">设备接入</div>
          </div>
        </div>
      </div>
    </section>
  );
}
