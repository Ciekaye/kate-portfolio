const SilkBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <div style={{ position: 'absolute', inset: 0, background: '#ffffff' }} />

    {/* Soft purple blobs */}
    <div style={{
      position: 'absolute', top: '-10%', right: '-5%', width: '70%', height: '80%',
      background: 'radial-gradient(ellipse at 60% 40%, rgba(167,139,250,0.75) 0%, rgba(196,181,253,0.5) 35%, transparent 70%)',
      filter: 'blur(48px)', borderRadius: '40% 60% 55% 45% / 50% 40% 60% 50%', transform: 'rotate(-15deg)',
    }} />
    <div style={{
      position: 'absolute', top: '10%', left: '15%', width: '65%', height: '75%',
      background: 'radial-gradient(ellipse at 40% 55%, rgba(216,180,254,0.55) 0%, rgba(233,213,255,0.3) 40%, transparent 70%)',
      filter: 'blur(56px)', borderRadius: '55% 45% 40% 60% / 45% 55% 45% 55%', transform: 'rotate(10deg)',
    }} />
    <div style={{
      position: 'absolute', bottom: '-5%', left: '-5%', width: '55%', height: '65%',
      background: 'radial-gradient(ellipse at 35% 65%, rgba(139,92,246,0.6) 0%, rgba(167,139,250,0.35) 40%, transparent 68%)',
      filter: 'blur(52px)', borderRadius: '45% 55% 60% 40% / 55% 45% 55% 45%', transform: 'rotate(-8deg)',
    }} />
    <div style={{
      position: 'absolute', top: '0%', left: '5%', width: '45%', height: '45%',
      background: 'radial-gradient(ellipse at 30% 30%, rgba(245,240,255,0.9) 0%, rgba(233,213,255,0.5) 40%, transparent 65%)',
      filter: 'blur(40px)', borderRadius: '60% 40% 50% 50% / 40% 60% 40% 60%', transform: 'rotate(20deg)',
    }} />
  </div>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
    >
      <SilkBackground />

      <div className="container-max relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 animate-on-scroll text-center sm:text-left">

        {/* Top label */}
        <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-3 sm:px-4 py-2 rounded-full mx-auto sm:mx-0"
          style={{
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(168,85,247,0.2)',
          }}>
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-primary/70">
            Social Media Manager
          </span>
        </div>

        {/* Name — focal point */}
        <h1 className="overflow-visible" style={{
          fontSize: 'clamp(2.5rem, 8vw, 7rem)',
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: 'clamp(0.75rem, 0.875rem, 1rem)',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #7c3aed 50%, #a855f7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Hi, I'm Kate Cristyl
        </h1>

        {/* Powerful headline statement */}
        <p style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 2rem)',
          fontWeight: 700,
          color: '#1a1a2e',
          marginBottom: 'clamp(1rem, 1.25rem, 1.5rem)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
        }}>
          Helping brands turn content into connection.
        </p>

        {/* Supporting paragraph */}
        <p className="text-muted leading-relaxed mb-8 sm:mb-12 max-w-full sm:max-w-[48ch] mx-auto sm:mx-0"
          style={{ fontSize: 'clamp(0.875rem, 1.25vw, 1.1rem)' }}>
          I create strategic content, compelling visuals, and thoughtful social media experiences 
          that help brands stand out and grow online.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center sm:items-start sm:justify-start">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 sm:gap-3 justify-center px-6 py-3 sm:px-7 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gray-900 hover:bg-purple-600 transition-all duration-200"
          >
            View My Work
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center text-sm sm:text-base">
              ↗
            </span>
          </a>
          
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 sm:px-7 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
