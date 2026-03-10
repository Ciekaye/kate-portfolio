import { useState } from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const contactInfo = [
  { icon: <FaEnvelope />, label: 'Email', value: 'hello@katecristyl.social', href: 'mailto:hello@katecristyl.social' },
  { icon: <FaInstagram />, label: 'Instagram', value: '@katecristylsocial', href: 'https://instagram.com/katecristylsocial' },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: 'Kate Cristyl', href: 'https://linkedin.com/in/katecristyl' },
  { icon: <FaTwitter />, label: 'Twitter', value: '@katecristylsocial', href: 'https://twitter.com/katecristylsocial' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', projectDetails: '' });
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage('Thank you. Your message has been sent successfully.');
        setFormData({ name: '', email: '', company: '', projectDetails: '' });
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
  <section id="contact" className="section-padding relative overflow-hidden"
    style={{ background: 'linear-gradient(160deg, #ffffff 0%, #f3e8ff 50%, #e9d5ff 100%)' }}>
    <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }}
      aria-hidden="true" />
    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(35px)' }}
      aria-hidden="true" />

    <div className="container-max relative z-10">
      <div className="text-center mb-12 md:mb-16 animate-on-scroll">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-5">Let&apos;s Work Together</h2>
        <p className="text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Have a project in mind or need help with your social media? Share a few details and I&apos;ll get back to you soon.
        </p>
        <div className="accent-line" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">

        {/* Form Card */}
        <div className="rounded-2xl p-6 sm:p-8 md:p-10 animate-on-scroll"
          style={{
            background: 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.8)',
            boxShadow: '0 8px 32px rgba(168,85,247,0.08)',
          }}>
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">Send a Message</h3>
          <p className="text-sm text-muted mb-8">I&apos;d love to hear about your brand and goals.</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">Your Name <span className="text-accent">*</span></label>
              <input
                type="text" id="name" name="name" required
                value={formData.name} onChange={handleChange}
                className="w-full px-5 py-3.5 rounded-xl text-sm text-primary outline-none transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.8)',
                  border: '1.5px solid rgba(168,85,247,0.15)',
                }}
                onFocus={e => { e.target.style.borderColor = '#a855f7'; e.target.style.boxShadow = '0 0 0 4px rgba(168,85,247,0.1)'; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(168,85,247,0.15)'; e.target.style.boxShadow = 'none'; }}
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">Email Address <span className="text-accent">*</span></label>
              <input
                type="email" id="email" name="email" required
                value={formData.email} onChange={handleChange}
                className="w-full px-5 py-3.5 rounded-xl text-sm text-primary outline-none transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.8)',
                  border: '1.5px solid rgba(168,85,247,0.15)',
                }}
                onFocus={e => { e.target.style.borderColor = '#a855f7'; e.target.style.boxShadow = '0 0 0 4px rgba(168,85,247,0.1)'; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(168,85,247,0.15)'; e.target.style.boxShadow = 'none'; }}
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-primary mb-2">Company / Brand</label>
              <input
                type="text" id="company" name="company"
                value={formData.company} onChange={handleChange}
                className="w-full px-5 py-3.5 rounded-xl text-sm text-primary outline-none transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.8)',
                  border: '1.5px solid rgba(168,85,247,0.15)',
                }}
                onFocus={e => { e.target.style.borderColor = '#a855f7'; e.target.style.boxShadow = '0 0 0 4px rgba(168,85,247,0.1)'; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(168,85,247,0.15)'; e.target.style.boxShadow = 'none'; }}
                placeholder="Your Brand Name"
              />
            </div>

            <div>
              <label htmlFor="projectDetails" className="block text-sm font-semibold text-primary mb-2">Project Details <span className="text-accent">*</span></label>
              <textarea
                id="projectDetails" name="projectDetails" required rows={5}
                value={formData.projectDetails} onChange={handleChange}
                className="w-full px-5 py-3.5 rounded-xl text-sm text-primary outline-none transition-all duration-300 resize-none"
                style={{
                  background: 'rgba(255,255,255,0.8)',
                  border: '1.5px solid rgba(168,85,247,0.15)',
                }}
                onFocus={e => { e.target.style.borderColor = '#a855f7'; e.target.style.boxShadow = '0 0 0 4px rgba(168,85,247,0.1)'; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(168,85,247,0.15)'; e.target.style.boxShadow = 'none'; }}
                placeholder="Tell me about your project, your goals, and what kind of support you are looking for."
              />
            </div>

            {message && (
              <p className={`text-sm font-medium rounded-lg px-4 py-3 ${status === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 rounded-xl text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-400/25 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
              style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)' }}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 animate-on-scroll">
          <div className="rounded-2xl p-6 sm:p-8"
            style={{
              background: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.8)',
              boxShadow: '0 8px 32px rgba(168,85,247,0.08)',
            }}>
            <h3 className="text-xl font-bold text-primary mb-6">Reach Me On</h3>
            <div className="space-y-3">
              {contactInfo.map((info) => (
                <a key={info.label} href={info.href}
                  className="flex items-center gap-4 p-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 group"
                  style={{ border: '1px solid rgba(168,85,247,0.1)' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-accent text-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(124,58,237,0.08))' }}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs text-muted">{info.label}</div>
                    <div className="text-sm font-semibold text-primary">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-6 sm:p-8" style={{ background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)' }}>
            <h3 className="text-lg font-bold text-white mb-4">What to Expect</h3>
            <ul className="space-y-3 text-sm text-white/85">
              {['Response within 24–48 hours', 'Free 30-minute consultation call', 'Custom proposal tailored to your needs', 'Transparent pricing and timelines'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-1.5 flex-shrink-0" /><span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
  );
};

export default Contact;
