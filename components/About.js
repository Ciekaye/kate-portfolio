import { FiMessageCircle, FiTarget, FiTrendingUp, FiUsers, FiBriefcase, FiMapPin, FiClock } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)', filter: 'blur(30px)' }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Me</h2>
          <div className="accent-line" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto auto-rows-auto">

          {/* Photo — tall card, spans 2 rows on left */}
          <div className="col-span-2 md:col-span-1 md:row-span-2 animate-on-scroll">
            <div className="rounded-2xl overflow-hidden h-full min-h-[320px] flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 50%, #c084fc 100%)' }}>
              <img 
                src="/KATE_ABOUT.png" 
                alt="Kate Cristyl" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Intro — wide card */}
          <div className="col-span-2 md:col-span-3 animate-on-scroll">
            <div className="glass-card p-6 h-full">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Hi, I&apos;m <span className="text-gradient">Kate Cristyl Osorio</span>
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-3">
                I&apos;m a Social Media Manager focused on helping brands grow their online presence through strategic content, audience engagement, and consistent brand communication.
              </p>
              <p className="text-muted text-sm leading-relaxed mb-3">
                Alongside my experience as a Customer Service Representative at{' '}
                <span className="font-semibold text-accent">Alorica Philippines</span>, I have been actively involved in social media management by assisting my partner with projects for companies and brands from the United States, Australia, the UAE, and Europe.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                This experience has given me practical exposure to content planning, social media strategy, and audience engagement across different markets. I&apos;m passionate about understanding what connects with audiences on platforms like{' '}
                <span className="font-semibold text-accent">Facebook, Instagram, and TikTok</span>, and using that insight to help brands build a stronger digital presence.
              </p>
            </div>
          </div>

          {/* Trait cards — 3 small cards in a row */}
          <div className="col-span-1 animate-on-scroll">
            <div className="glass-card p-5 h-full flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-accent"
                style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(124,58,237,0.08))' }}>
                <FiMessageCircle size={18} />
              </div>
              <span className="text-xs font-bold text-primary">Strong Communicator</span>
            </div>
          </div>

          <div className="col-span-1 animate-on-scroll">
            <div className="glass-card p-5 h-full flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-accent"
                style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(124,58,237,0.08))' }}>
                <FiTarget size={18} />
              </div>
              <span className="text-xs font-bold text-primary">Detail-Oriented</span>
            </div>
          </div>

          <div className="col-span-1 animate-on-scroll">
            <div className="glass-card p-5 h-full flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-accent"
                style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(124,58,237,0.08))' }}>
                <FiTrendingUp size={18} />
              </div>
              <span className="text-xs font-bold text-primary">Trend-Aware</span>
            </div>
          </div>

          {/* Location + Availability — small info cards */}
          <div className="col-span-1 md:col-span-2 animate-on-scroll">
            <div className="glass-card p-5 h-full flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-accent"
                style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(124,58,237,0.08))' }}>
                <FiMapPin size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted mb-0.5">Based in</p>
                <p className="text-sm font-bold text-primary">Philippines</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 animate-on-scroll">
            <div className="glass-card p-5 h-full flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-accent"
                style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(124,58,237,0.08))' }}>
                <FiClock size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted mb-0.5">Availability</p>
                <p className="text-sm font-bold text-primary">Open for Projects</p>
              </div>
            </div>
          </div>

          {/* Work Experience — full width */}
          <div className="col-span-2 md:col-span-4 animate-on-scroll">
            <div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(168,85,247,0.06)', border: '1.5px solid rgba(168,85,247,0.15)' }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(124,58,237,0.08))' }}>
                  <FiBriefcase size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted mb-1">Work Experience</p>
                  <h4 className="font-bold text-primary text-base leading-snug">Customer Service Representative</h4>
                  <p className="text-sm font-semibold text-accent mt-0.5">Alorica Philippines · 12 Months</p>
                </div>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-6">
                Provided customer support by handling inquiries, resolving concerns, and assisting clients in a fast-paced environment. This role strengthened my communication, problem-solving, and client interaction skills while maintaining professionalism across different situations.
              </p>

              <div
                className="rounded-xl p-5"
                style={{
                  background: 'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(124,58,237,0.06))',
                  border: '1px solid rgba(168,85,247,0.15)',
                }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                  Skills I Apply to Social Media Management
                </p>
                <ul className="space-y-3">
                  {[
                    'Communicating clearly and effectively with online audiences',
                    'Responding professionally to comments, messages, and customer inquiries',
                    'Understanding customer needs and audience behavior',
                    'Maintaining a positive and helpful brand presence online',
                    'Supporting brands in building trust through responsive communication',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                      <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
