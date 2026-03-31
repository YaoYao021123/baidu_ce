import { ArrowUpRight, AudioLines, Bot, Boxes, Cpu, Sparkles } from 'lucide-react';

import { featuredProducts } from '../data/featuredProducts';

const productIcons = [AudioLines, Cpu, Bot, Boxes, Sparkles];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-surface-1" id="主推产品">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            百度智能云核心产品矩阵
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-on-surface tracking-tight">
            主推产品
          </h2>
          <p className="mt-4 text-lg leading-8 text-on-surface-variant">
            围绕多模态交互、大模型底座、智能体、机器人与数字内容能力，构建可直接接入业务的产品组合。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
          {featuredProducts.map((product, index) => {
            const Icon = productIcons[index] ?? Cpu;

            return (
              <a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl border border-surface-3 bg-surface-2/60 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
                    {product.badge}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primary shadow-sm transition-transform group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-on-surface leading-7">{product.name}</h3>
                <p className="mt-3 text-sm leading-7 text-on-surface-variant">{product.description}</p>
                <div className="mt-8 flex items-center text-sm font-semibold text-primary">
                  查看产品详情
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
