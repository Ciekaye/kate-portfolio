import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#services', text: 'Services' },
    { href: '#portfolio', text: 'Portfolio' },
    { href: '#skills', text: 'Skills' },
    { href: '#contact', text: 'Contact' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'py-4 shadow-lg shadow-purple-200/30'
            : 'py-6'
        }`}
        style={{
          background: scrolled
            ? 'rgba(255,255,255,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(168,85,247,0.12)' : 'none',
        }}
      >
        <div className="container-max flex justify-between items-center px-6 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="text-2xl font-bold text-gradient">Kate</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary/70 hover:text-accent transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a href="#contact" className="hidden md:inline-block btn-primary text-sm py-2 px-6">
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <FaBars size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen (outside nav to avoid stacking context issues) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0" style={{ zIndex: 9999 }}>
          {/* Gradient Background */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(160deg, #ffffff 0%, #f5f0ff 40%, #ede4ff 70%, #e9d5ff 100%)',
            }}
          />

          {/* Decorative Blobs */}
          <div
            className="absolute top-[-80px] right-[-60px] w-72 h-72 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          <div
            className="absolute bottom-[-60px] left-[-40px] w-56 h-56 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
              filter: 'blur(35px)',
            }}
          />

          {/* Menu Content */}
          <div className="relative z-10 flex flex-col h-full px-8 py-8">

            {/* Header: Logo + Close */}
            <div className="flex justify-between items-center mb-16">
              <div className="text-2xl font-bold text-gradient">Kate</div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 active:scale-90"
                style={{ background: 'rgba(168,85,247,0.1)' }}
                aria-label="Close menu"
              >
                <FaTimes size={18} className="text-purple-600" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <button
                  key={link.href}
                  type="button"
                  className="flex items-center justify-between px-5 py-4 rounded-2xl text-lg font-semibold text-gray-800 transition-all duration-300 active:scale-[0.98] text-left"
                  style={{
                    background: 'rgba(255,255,255,0.6)',
                    border: '1px solid rgba(168,85,247,0.08)',
                    animationDelay: `${index * 60}ms`,
                  }}
                  onClick={() => handleNavClick(link.href)}
                >
                  <span>{link.text}</span>
                  <FiArrowRight size={16} className="text-purple-400" />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-auto pb-6">
              <button
                type="button"
                onClick={() => handleNavClick('#contact')}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-white font-semibold text-base transition-all duration-300 active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                  boxShadow: '0 8px 24px rgba(168,85,247,0.3)',
                }}
              >
                Hire Me
                <FiArrowRight size={18} />
              </button>

              <p className="text-center text-xs text-gray-400 mt-4">hello@katecristyl.social</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
