import React, { useState, useEffect } from 'react';
import { Menu, X, User, ShoppingBag, Heart } from 'lucide-react';
import { NavLink as NavLinkType } from '../../shared/types';

interface NavbarProps {
  onHomeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLinkType[] = [
    { name: 'Trang chủ', href: '#home', isHome: true },
    { name: 'Sản phẩm', href: '#products' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  const handleHomeClick = () => {
    onHomeClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-500 font-sans">
      <nav className={`bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-500 ${isScrolled ? 'py-3 shadow-md' : 'py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div
            className="flex items-center gap-4 cursor-pointer group"
            onClick={handleHomeClick}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 shadow-sm group-hover:scale-105 transition-transform">
              <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-xl font-bold font-display block leading-none tracking-tight">MIỀN</span>
              <span className="text-primary text-[10px] font-black tracking-[0.2em] uppercase">Cánh Kính</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.isHome) {
                    e.preventDefault();
                    handleHomeClick();
                  }
                }}
                className="text-secondary font-bold hover:text-primary transition-all text-xs uppercase tracking-[0.15em] relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button className="lg:hidden text-secondary p-2 rounded-lg hover:bg-gray-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t p-8 animate-fade-in divide-y divide-gray-100">
          <div className="flex flex-col gap-6 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.isHome) {
                    e.preventDefault();
                    handleHomeClick();
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className="text-lg font-bold text-secondary uppercase tracking-widest hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex justify-around text-gray-400 pt-6">
            <User size={20} className="hover:text-primary cursor-pointer" />
            <ShoppingBag size={20} className="hover:text-primary cursor-pointer" />
            <Heart size={20} className="hover:text-primary cursor-pointer" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
