import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
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
      <div className="container-max flex justify-between items-center">
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
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-72 shadow-2xl transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="p-8">
            <button className="mb-10 text-primary" onClick={toggleMenu} aria-label="Close menu">
              <FaTimes size={22} />
            </button>
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-primary hover:text-accent transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  {link.text}
                </a>
              ))}
              <a href="#contact" className="btn-primary text-center mt-4" onClick={toggleMenu}>
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
