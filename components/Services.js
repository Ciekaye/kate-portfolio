import { FiSmartphone, FiClipboard, FiPenTool, FiEdit3, FiLayout, FiMessageSquare, FiBarChart2, FiZap } from 'react-icons/fi';

const services = [
  { icon: <FiSmartphone size={22} />, title: 'Social Media Management', description: 'Complete management of your social presence with consistent posting, engagement, and brand voice maintenance.' },
  { icon: <FiClipboard size={22} />, title: 'Content Strategy', description: 'Strategic planning of content pillars, posting schedules, and campaign themes aligned with your goals.' },
  { icon: <FiPenTool size={22} />, title: 'Content Creation', description: 'High-quality visuals, engaging videos, and compelling graphics that capture attention and drive engagement.' },
  { icon: <FiEdit3 size={22} />, title: 'Caption Writing', description: 'Captivating copy that tells your story, encourages interaction, and converts followers into loyal customers.' },
  { icon: <FiLayout size={22} />, title: 'Visual Planning', description: 'Aesthetic content calendars and grid planning that create a cohesive, professional brand appearance.' },
  { icon: <FiMessageSquare size={22} />, title: 'Engagement Support', description: 'Active community management — responding to comments, DMs, and fostering meaningful connections.' },
  { icon: <FiBarChart2 size={22} />, title: 'Performance Insights', description: 'Detailed analytics and reporting to track growth and continuously optimize your content strategy.' },
  { icon: <FiZap size={22} />, title: 'Campaign Support', description: 'End-to-end campaign planning for product launches, promotions, and brand awareness initiatives.' },
];

const Services = () => (
  <section id="services" className="section-padding relative overflow-hidden"
    style={{ background: 'linear-gradient(160deg, #faf8ff 0%, #f3e8ff 60%, #ede9fe 100%)' }}>
    <div className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }}
      aria-hidden="true" />

    <div className="container-max relative z-10">
      <div className="text-center mb-16 animate-on-scroll">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">What I Offer</p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Services</h2>
        <p className="text-muted text-lg max-w-xl mx-auto">Comprehensive social media solutions to help your brand thrive online</p>
        <div className="accent-line" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, index) => (
          <div key={index} className="glass-card p-6 text-center animate-on-scroll group hover:-translate-y-2 transition-all duration-300"
            style={{ transitionDelay: `${index * 0.05}s` }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-accent group-hover:scale-110 transition-transform duration-300"
              style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.12) 0%, rgba(124,58,237,0.08) 100%)' }}>
              {service.icon}
            </div>
            <h3 className="text-base font-bold text-primary mb-2">{service.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 animate-on-scroll">
        <a href="#contact" className="btn-primary">Discuss Your Project</a>
      </div>
    </div>
  </section>
);

export default Services;
