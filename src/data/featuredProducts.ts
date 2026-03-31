export type FeaturedProduct = {
  name: string;
  description: string;
  href: string;
  badge: string;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    name: '百度智能云多模态互动',
    description: '面向实时音视频与多模态智能交互场景，支持低延时语音、视觉与内容协同。',
    href: 'https://cloud.baidu.com/product/RTC/multimodal.html',
    badge: '实时多模态',
  },
  {
    name: '千帆大模型平台',
    description: '覆盖模型训练、精调、推理与应用开发，支撑企业级大模型生产与运营。',
    href: 'https://cloud.baidu.com/product-s/qianfan_home',
    badge: '模型底座',
  },
  {
    name: '千帆智能体平台',
    description: '帮助企业快速搭建可编排、可接入、可运营的智能体应用和服务流程。',
    href: 'https://cloud.baidu.com/product-s/qianfan_home',
    badge: 'Agent 平台',
  },
  {
    name: 'duclaw',
    description: '聚焦具身智能与机器人能力扩展，面向复杂任务执行和空间感知提供底层支撑。',
    href: 'https://cloud.baidu.com/product/duclaw.html?from=home_banner',
    badge: '机器人能力',
  },
  {
    name: 'dumate',
    description: '面向数字人、内容生成与交互表达，提升品牌、客服和营销场景的体验效率。',
    href: 'https://cloud.baidu.com/product/dumate.html?from=home_banner',
    badge: '内容与数字人',
  },
];
