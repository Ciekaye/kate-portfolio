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
            <div
              className="rounded-2xl overflow-hidden flex items-center justify-center h-full min-h-[320px]"
              style={{ background: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 50%, #c084fc 100%)' }}
            >
              <div className="text-center px-4">
                <div className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.5)', border: '2px solid rgba(255,255,255,0.7)' }}>
                  <span className="text-purple-700 text-xs font-bold uppercase tracking-widest">Photo</span>
                </div>
                <p className="text-purple-700/60 font-medium text-[10px] uppercase tracking-widest">Your image here</p>
              </div>
            </div>
          </div>

          {/* Intro — wide card */}
          <div className="col-span-2 md:col-span-3 animate-on-scroll">
            <div className="glass-card p-6 h-full">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Hi, I&apos;m <span className="text-gradient">Kate Cristyl Osorio</span>
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-3">
                I have 12 months of experience working as a Customer Service Representative at{' '}
                <span className="font-semibold text-accent">Alorica Philippines</span>. During that time, I developed strong
                communication, patience, and problem solving skills while helping customers and handling different concerns in a fast paced environment.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                I&apos;m also very active on social media and enjoy observing what kind of content people connect with on platforms like{' '}
                <span className="font-semibold text-accent">Facebook, TikTok, and Instagram</span>. I&apos;m interested in how brands communicate online and how engaging content can capture attention.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                I believe strong results come from clear communication and good collaboration. I&apos;m committed to delivering quality work and making sure it aligns with each client&apos;s goals.
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
                  <p className="text-sm font-semibold text-accent mt-0.5">Alorica Philippines&nbsp;&middot;&nbsp;12 Months</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  {[
                    'Assisted customers by answering inquiries and resolving concerns professionally',
                    'Developed strong communication and active listening skills',
                    'Stayed patient and calm while handling different customer situations',
                    'Improved problem-solving and quick decision-making skills',
                    'Maintained professionalism while representing the company',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="rounded-xl p-5"
                  style={{
                    background: 'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(124,58,237,0.06))',
                    border: '1px solid rgba(168,85,247,0.15)',
                  }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                    Skills I Can Apply to Social Media Management
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Communicating clearly with an online audience',
                      'Responding to comments, messages, and inquiries professionally',
                      'Understanding customer needs and concerns',
                      'Maintaining a positive and helpful brand presence online',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                        <span className="text-accent mt-0.5 flex-shrink-0">&rarr;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
