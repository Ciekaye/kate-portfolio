import { FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaInstagram />, href: 'https://instagram.com/katecristylsocial', label: 'Instagram' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/katecristyl', label: 'LinkedIn' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/639474416972', label: 'WhatsApp' },
  { icon: <FaEnvelope />, href: 'mailto:smm.katecristyl@gmail.com', label: 'Email' },
];

const quickLinks = [
  { href: '#home', text: 'Home' },
  { href: '#about', text: 'About' },
  { href: '#services', text: 'Services' },
  { href: '#portfolio', text: 'Portfolio' },
  { href: '#skills', text: 'Skills' },
  { href: '#contact', text: 'Contact' },
];

const services = ['Social Media Management', 'Content Strategy', 'Content Creation', 'Community Management', 'Analytics & Reporting', 'Brand Consulting'];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ background: 'linear-gradient(160deg, #1a1a2e 0%, #2d1b69 60%, #4c1d95 100%)' }}>
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img src="/Footer_logo.png" alt="Kate Cristyl" className="h-12 w-auto mb-4" />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Helping brands show up with purpose online through strategic social media management and authentic content creation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="text-white/55 hover:text-accent transition-colors duration-300 text-sm">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-white/55 text-sm">{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Get In Touch</h4>
            <div className="space-y-3 text-white/55 text-sm mb-6">
              <p>smm.katecristyl@gmail.com</p>
              <p>+63 947 441 6972</p>
              <p>Response: 24–48 hours</p>
              <p>Available for full-time projects, consulting &amp; content creation</p>
            </div>
            <a href="#contact" className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)' }}>
              Start a Project
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-white/40 text-sm">© 2026 Kate Cristyl Osorio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-sm">Designed for brands</span>
            <button onClick={scrollToTop} aria-label="Back to top"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110"
              style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)' }}>
              <FaArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
