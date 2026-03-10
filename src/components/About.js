import React from 'react';

const About = () => {
  const traits = [
    { icon: '💬', label: 'Strong Communicator' },
    { icon: '🎯', label: 'Detail-Oriented' },
    { icon: '📱', label: 'Trend-Aware' },
    { icon: '🤝', label: 'Client-Focused' },
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Soft background blob */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Me</h2>
          <div className="accent-line" />
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
          {/* Visual block */}
          <div className="animate-on-scroll">
            <div
              className="relative w-full h-96 rounded-3xl overflow-hidden flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 50%, #c084fc 100%)',
              }}
            >
              {/* Big emoji placeholder */}
              <div className="text-center">
                <div className="text-8xl mb-4 animate-float inline-block">🌸</div>
                <p className="text-purple-600 font-medium text-sm">Professional Photo</p>
              </div>

              {/* Decorative tile grid corner */}
              <div
                className="absolute bottom-0 right-0 w-32 h-32"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '5px',
                  padding: '10px',
                }}
              >
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      borderRadius: '6px',
                      background: 'rgba(255,255,255,0.4)',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(255,255,255,0.6)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="animate-on-scroll">
            <h3 className="text-3xl font-bold text-primary mb-6">
              Hi, I'm <span className="text-gradient">Kate</span> ✦
            </h3>

            <p className="text-muted mb-5 leading-relaxed">
              I have 12 months of experience working as a Customer Service Representative at{' '}
              <span className="font-semibold text-accent">Alorica Philippines</span>. During that time,
              I developed strong communication, patience, and problem solving skills while helping
              customers and handling different concerns in a fast paced environment.
            </p>

            <p className="text-muted mb-5 leading-relaxed">
              I'm also very active on social media and enjoy observing what kind of content people
              connect with on platforms like{' '}
              <span className="font-semibold text-accent">Facebook, TikTok, and Instagram</span>. I'm
              interested in how brands communicate online and how engaging content can capture attention.
            </p>

            <p className="text-muted mb-8 leading-relaxed">
              I believe strong results come from clear communication and good collaboration. I'm
              committed to delivering quality work and making sure it aligns with each client's goals.
            </p>

            {/* Trait chips */}
            <div className="flex flex-wrap gap-3">
              {traits.map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium glass-card"
                  style={{ color: '#7c3aed' }}
                >
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                </div>
              ))}
            </div>

            {/* Work Experience */}
            <div className="mt-10">
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(168,85,247,0.06)',
                  border: '1.5px solid rgba(168,85,247,0.15)',
                }}
              >
                {/* Role header */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(124,58,237,0.08))' }}
                  >
                    💼
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-base leading-snug">
                      Customer Service Representative
                    </h4>
                    <p className="text-sm font-semibold text-accent mt-0.5">
                      Alorica Philippines&nbsp;·&nbsp;12 Months
                    </p>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2 mb-6">
                  {[
                    'Assisted customers by answering inquiries and resolving concerns in a clear and professional way',
                    'Developed strong communication and active listening skills',
                    'Learned to stay patient and calm while handling different customer situations',
                    'Improved problem-solving and quick decision-making skills',
                    'Maintained professionalism while representing the company',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
                      <span className="text-accent mt-0.5 flex-shrink-0">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills transfer */}
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
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
                        <span className="text-accent mt-0.5 flex-shrink-0">→</span>
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
