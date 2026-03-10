import React from 'react';

/* Flowing silky purple wave blobs — matching the reference hero */
const SilkBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {/* White base */}
    <div style={{ position: 'absolute', inset: 0, background: '#ffffff' }} />

    {/* Large primary purple wave — top right */}
    <div style={{
      position: 'absolute',
      top: '-10%',
      right: '-5%',
      width: '70%',
      height: '80%',
      background: 'radial-gradient(ellipse at 60% 40%, rgba(167,139,250,0.85) 0%, rgba(196,181,253,0.6) 35%, transparent 70%)',
      filter: 'blur(48px)',
      borderRadius: '40% 60% 55% 45% / 50% 40% 60% 50%',
      transform: 'rotate(-15deg)',
    }} />

    {/* Secondary softer lavender wave — centre */}
    <div style={{
      position: 'absolute',
      top: '10%',
      left: '15%',
      width: '65%',
      height: '75%',
      background: 'radial-gradient(ellipse at 40% 55%, rgba(216,180,254,0.65) 0%, rgba(233,213,255,0.4) 40%, transparent 70%)',
      filter: 'blur(56px)',
      borderRadius: '55% 45% 40% 60% / 45% 55% 45% 55%',
      transform: 'rotate(10deg)',
    }} />

    {/* Deep violet accent — bottom left */}
    <div style={{
      position: 'absolute',
      bottom: '-5%',
      left: '-5%',
      width: '55%',
      height: '65%',
      background: 'radial-gradient(ellipse at 35% 65%, rgba(139,92,246,0.7) 0%, rgba(167,139,250,0.45) 40%, transparent 68%)',
      filter: 'blur(52px)',
      borderRadius: '45% 55% 60% 40% / 55% 45% 55% 45%',
      transform: 'rotate(-8deg)',
    }} />

    {/* Highlight streak — upper left */}
    <div style={{
      position: 'absolute',
      top: '0%',
      left: '5%',
      width: '45%',
      height: '45%',
      background: 'radial-gradient(ellipse at 30% 30%, rgba(245,240,255,0.9) 0%, rgba(233,213,255,0.5) 40%, transparent 65%)',
      filter: 'blur(40px)',
      borderRadius: '60% 40% 50% 50% / 40% 60% 40% 60%',
      transform: 'rotate(20deg)',
    }} />

    {/* Thin bright ribbon across middle */}
    <div style={{
      position: 'absolute',
      top: '30%',
      left: '-10%',
      width: '120%',
      height: '30%',
      background: 'linear-gradient(105deg, transparent 10%, rgba(221,214,254,0.35) 35%, rgba(196,181,253,0.3) 55%, transparent 80%)',
      filter: 'blur(30px)',
      transform: 'rotate(-6deg)',
    }} />
  </div>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Flowing silk background */}
      <SilkBackground />

      <div className="container-max relative z-10 text-center max-w-6xl mx-auto px-6 animate-on-scroll">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium"
          style={{
            background: 'rgba(255,255,255,0.45)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.6)',
            color: '#7c3aed',
          }}>
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow inline-block" />
          Social Media Manager
        </div>

        <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-6 max-w-none">
          <span className="text-primary inline md:block mb-2">Helping brands </span>
          <span
            className="inline md:block mb-2"
            style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #1a1a2e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            show up online
          </span>
          <span className="text-primary inline md:block">
            with purpose
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-muted">
          Strategic social media management, compelling content creation,
          and authentic brand storytelling that connects with your audience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#portfolio" className="btn-primary shadow-lg shadow-purple-400/30">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Let's Connect
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
          {[
            { value: '12mo', label: 'Experience' },
            { value: 'FB·TikTok·IG', label: 'Platforms' },
            { value: '100%', label: 'Commitment' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card text-center py-4 px-3"
            >
              <div className="text-xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-xs font-medium text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
