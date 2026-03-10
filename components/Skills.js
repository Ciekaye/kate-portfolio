import { FiTarget, FiStar, FiTrendingUp, FiUsers, FiRefreshCw, FiZap } from 'react-icons/fi';

const skills = [
  { name: 'Instagram', level: 95, icon: '/expertise/platforms/INSTAGRAM.png' },
  { name: 'TikTok', level: 90, icon: '/expertise/platforms/TIKKTOK.png' },
  { name: 'Facebook', level: 85, icon: '/expertise/platforms/FACEBOOK.png' },
  { name: 'LinkedIn', level: 80, icon: '/expertise/platforms/LINKEDIN.png' },
  { name: 'Twitter/X', level: 75, icon: '/expertise/platforms/X.png' },
  { name: 'Pinterest', level: 70, icon: '/expertise/platforms/PINTEREST.png' },
  { name: 'YouTube', level: 80, icon: '/expertise/platforms/YOUTUBE.png' },
];

const tools = [
  { name: 'Canva', icon: '/expertise/tools/CANVA.png' },
  { name: 'Adobe Express', icon: '/expertise/tools/ADOBE_EXPRESS.png' },
  { name: 'Photoshop', icon: '/expertise/tools/PHOTOSHOP.png' },
  { name: 'Illustrator', icon: '/expertise/tools/ILLUSTRATOR.png' },
  { name: 'Lightroom', icon: '/expertise/tools/LIGHTROOM.png' },
  { name: 'Figma', icon: '/expertise/tools/FIGMA.png' },
  { name: 'CapCut', icon: '/expertise/tools/CAPCUT.png' },
  { name: 'Hootsuite', icon: '/expertise/tools/HOOTSUITE.png' },
  { name: 'Business Suite', icon: '/expertise/tools/BUSINESS_SUITE.png' },
  { name: 'TikTok Studio', icon: '/expertise/tools/TIKTOK_STUDIO.png' },
  { name: 'Google Analytics', icon: '/expertise/tools/GOOGLE_ANALYTICS.png' },
  { name: 'Notion', icon: '/expertise/tools/NOTION.png' },
];

const strengths = [
  { icon: <FiTarget size={18} />, title: 'Strategic Planning', description: 'Data-driven strategies aligned with business goals' },
  { icon: <FiStar size={18} />, title: 'Creative Direction', description: 'Strong visual aesthetic and compelling storytelling' },
  { icon: <FiTrendingUp size={18} />, title: 'Growth Focus', description: 'Proven track record of growing engaged communities' },
  { icon: <FiUsers size={18} />, title: 'Client Collaboration', description: 'Excellent communication and project management' },
  { icon: <FiRefreshCw size={18} />, title: 'Trend Adaptation', description: 'Quick to adapt to algorithm changes and platform updates' },
  { icon: <FiZap size={18} />, title: 'Content Efficiency', description: 'High-volume quality content without sacrificing authenticity' },
];

const Skills = () => (
  <section id="skills" className="section-padding relative overflow-hidden"
    style={{ background: 'linear-gradient(160deg, #faf8ff 0%, #f3e8ff 60%, #ede9fe 100%)' }}>
    <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }}
      aria-hidden="true" />

    <div className="container-max relative z-10">
      <div className="text-center mb-16 animate-on-scroll">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Expertise</p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Skills &amp; Tools</h2>
        <p className="text-muted text-lg max-w-xl mx-auto">The platforms, tools, and strengths I bring to every project</p>
        <div className="accent-line" />
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="animate-on-scroll">
          <h3 className="text-xl font-bold text-primary mb-6">Platform Expertise</h3>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name} className="glass-card p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <img src={skill.icon} alt={skill.name} className="w-7 h-7 object-contain" />
                    <span className="font-semibold text-primary text-sm">{skill.name}</span>
                  </div>
                  <span className="text-xs font-bold text-accent">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll">
          <h3 className="text-xl font-bold text-primary mb-6">Tools &amp; Software</h3>
          <div className="glass-card p-6">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {tools.map((tool) => (
                <img key={tool.name} src={tool.icon} alt={tool.name} className="w-[70px] h-[70px] object-contain transition-all duration-200 hover:scale-110" />
              ))}
            </div>
          </div>
        </div>

        <div className="animate-on-scroll">
          <h3 className="text-xl font-bold text-primary mb-6">Core Strengths</h3>
          <div className="space-y-3">
            {strengths.map((s) => (
              <div key={s.title} className="glass-card p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-accent"
                  style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.12) 0%, rgba(124,58,237,0.08) 100%)' }}>
                  {s.icon}
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm mb-0.5">{s.title}</h4>
                  <p className="text-muted text-xs leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
