import { ExternalLink } from 'lucide-react';

// Footer 链接配置 - 链接到百度智能云官网
const footerLinks = {
  产品服务: [
    { label: '千帆大模型平台', url: 'https://cloud.baidu.com/product/wenxinworkshop' },
    { label: '多模态互动 SDK', url: 'https://cloud.baidu.com/product/speech' },
    { label: '智能体开发', url: 'https://cloud.baidu.com/product/agents' },
    { label: '云端渲染流化', url: 'https://cloud.baidu.com/product/render' },
  ],
  解决方案: [
    { label: '智能家电', url: 'https://cloud.baidu.com/solution/iot/smart-home' },
    { label: '智能穿戴', url: 'https://cloud.baidu.com/solution/iot/wearable' },
    { label: '儿童陪伴玩具', url: 'https://cloud.baidu.com/solution/education' },
    { label: '全屋智能', url: 'https://cloud.baidu.com/solution/iot/smart-house' },
  ],
  开发者资源: [
    { label: '开发文档', url: 'https://cloud.baidu.com/doc/index.html' },
    { label: 'API 参考', url: 'https://cloud.baidu.com/doc/WENXINWORKSHOP/index.html' },
    { label: 'SDK 下载', url: 'https://cloud.baidu.com/sdk' },
    { label: '开发者社区', url: 'https://cloud.baidu.com/qianfandev' },
  ],
};

const contactInfo = [
  { label: '售前咨询', value: '400-920-8999', url: 'tel:400-920-8999' },
  { label: '商务合作', value: '联系我们', url: 'https://cloud.baidu.com/contact.html' },
  { label: '技术支持', value: '提交工单', url: 'https://ticket.bce.baidu.com/' },
];

const legalLinks = [
  { label: '隐私政策', url: 'https://cloud.baidu.com/doc/Agreements/s/Kjwvz19h9' },
  { label: '服务条款', url: 'https://cloud.baidu.com/doc/Agreements/s/Ojwvy2ufx' },
];

export default function Footer() {
  return (
    <footer className="bg-on-surface text-white/60 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2 text-sm">
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3 opacity-50" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-white font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2 text-sm">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <span className="text-white/40">{item.label}：</span>
                  <a 
                    href={item.url}
                    target={item.url.startsWith('tel:') ? undefined : '_blank'}
                    rel={item.url.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                    className="hover:text-white transition-colors"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 Baidu 百度智能云 制造业务部</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {legalLinks.map((link) => (
              <a 
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
