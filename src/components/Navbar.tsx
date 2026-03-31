import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '产品能力', href: '#产品能力' },
    { label: '技术路线', href: '#技术路线' },
    { label: '解决方案', href: '#解决方案' },
    { label: '客户案例', href: '#客户案例' },
    { label: '生态合作', href: '#生态合作' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-surface-3/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/images/brand/logo/logo.png" 
              alt="百度智能云" 
              className="h-8 w-auto"
            />
            <span className="text-on-surface-dim text-sm hidden sm:inline">|</span>
            <span className="font-semibold text-base text-on-surface hidden sm:inline">
              智能硬件解决方案
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
              登录
            </button>
            <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
              联系销售
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-on-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-surface-1 border-t border-surface-3 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-on-surface hover:bg-surface-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-4 border-t border-surface-3 mt-2">
              <button className="w-full bg-primary text-white py-3 rounded-lg font-medium">
                联系销售
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
