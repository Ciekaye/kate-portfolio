import { useState, useRef, useEffect } from 'react';
import { FiVolume2, FiVolumeX, FiX, FiPlay, FiPause } from 'react-icons/fi';
import Script from 'next/script';

const mediaItems = [
  {
    id: 1,
    type: 'video',
    category: 'videos',
    title: 'Social Media Reel',
    label: 'Video Direction',
    platform: 'TikTok / Instagram',
    description: 'Short-form vertical content conceptualised for maximum scroll engagement.',
    embed: 'https://player.vimeo.com/video/1171872771?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&controls=0',
    size: 'large',
  },
  {
    id: 7,
    type: 'video',
    category: 'videos',
    title: 'Social Media Reel',
    label: 'Video Direction',
    platform: 'TikTok / Instagram',
    description: 'Lifestyle-driven short-form content crafted for brand storytelling.',
    embed: 'https://player.vimeo.com/video/1171872830?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&controls=0',
    size: 'small',
  },
  {
    id: 8,
    type: 'video',
    category: 'videos',
    title: 'Social Media Reel',
    label: 'Video Direction',
    platform: 'TikTok / Instagram',
    description: 'Visual storytelling optimised for Instagram Reels and TikTok reach.',
    embed: 'https://player.vimeo.com/video/1171872726?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&controls=0',
    size: 'small',
  },
  {
    id: 2,
    type: 'graphic',
    category: 'graphics',
    title: 'Engagement Graphic',
    label: 'Graphic Design',
    platform: 'Instagram',
    description: 'Typography-led graphic designed to encourage saves and shares.',
    image: '/portfolio/1.png',
    size: 'small',
    bgGradient: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
  },
  {
    id: 14,
    type: 'text',
    category: 'graphics',
    title: 'Creative Excellence',
    label: 'Approach',
    platform: '',
    description: 'Delivering high-quality designs that capture attention and drive meaningful engagement.',
    bg: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
    textColor: '#ffffff',
    size: 'small',
  },
  {
    id: 3,
    type: 'graphic',
    category: 'graphics',
    title: 'Promotional Post',
    label: 'Graphic Design',
    platform: 'Instagram / Facebook',
    description: 'Promotional post designed for brand awareness and reach.',
    image: '/portfolio/2.png',
    size: 'medium',
    bgGradient: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
  },
  {
    id: 4,
    type: 'post',
    category: 'social',
    title: 'Community Content',
    label: 'Content Strategy',
    platform: 'Social Media',
    description: 'Branded social content optimised for community interaction.',
    image: '/portfolio/3.png',
    size: 'medium',
    bgGradient: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
  },
  {
    id: 5,
    type: 'post',
    category: 'social',
    title: 'Story / Reel Cover',
    label: 'Content Design',
    platform: 'Instagram',
    description: 'Bold visual hook designed to stop the scroll and drive engagement.',
    image: '/portfolio/4.png',
    size: 'medium',
    bgGradient: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
  },
  {
    id: 6,
    type: 'graphic',
    category: 'graphics',
    title: 'Branded Graphic Design',
    label: 'Graphic Design',
    platform: 'Instagram / Facebook',
    description: 'Professional graphic design showcasing brand identity and visual storytelling.',
    image: '/GRAPHIC1.png',
    size: 'medium',
    bgGradient: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
  },
  {
    id: 12,
    type: 'post',
    category: 'social',
    title: 'Social Media Campaign',
    label: 'Content Strategy',
    platform: 'Social Media',
    description: 'Engaging social media content designed for brand awareness and audience interaction.',
    image: '/SOCIAL1.png',
    size: 'small',
    bgGradient: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
  },
  {
    id: 16,
    type: 'text',
    category: 'social',
    title: 'Consistent Brand Voice',
    label: 'Strategy',
    platform: '',
    description: 'Ensuring every post reflects your brand personality and resonates with your audience.',
    bg: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
    textColor: '#ffffff',
    size: 'small',
  },
  {
    id: 17,
    type: 'text',
    category: 'social',
    title: 'Audience-First Approach',
    label: 'Philosophy',
    platform: '',
    description: 'Understanding what your audience needs and creating content that truly connects.',
    bg: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b69 100%)',
    textColor: '#ffffff',
    size: 'small',
  },
  {
    id: 18,
    type: 'text',
    category: 'social',
    title: 'Results-Driven Content',
    label: 'Goal',
    platform: '',
    description: 'Every piece of content is crafted with purpose to engage, inform, and grow your brand.',
    bg: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
    textColor: '#ffffff',
    size: 'small',
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'videos', label: 'Videos' },
  { id: 'graphics', label: 'Graphics' },
  { id: 'social', label: 'Social' },
];

const BentoCard = ({ item, className = '', onClick, isPopupOpen }) => {
  const isVideo = item.type === 'video';
  const iframeRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (isVideo && iframeRef.current && window.Vimeo) {
      const player = new window.Vimeo.Player(iframeRef.current);
      if (isPopupOpen) {
        player.pause();
      } else {
        player.play();
      }
    }
  }, [isPopupOpen, isVideo]);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!iframeRef.current || typeof window === 'undefined' || !window.Vimeo) return;
    try {
      const player = new window.Vimeo.Player(iframeRef.current);
      if (muted) {
        player.setMuted(false);
        player.setVolume(1);
      } else {
        player.setMuted(true);
        player.setVolume(0);
      }
      setMuted(!muted);
    } catch (e) {
      // Vimeo API not ready yet
    }
  };

  return (
    <div 
      className={`group relative rounded-2xl overflow-hidden ${item.type !== 'text' ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      style={{ background: '#f9fafb', border: '1px solid rgba(168,85,247,0.1)' }}>

      {isVideo ? (
        <div className="relative w-full h-full min-h-[360px]" style={{ background: '#0a0a0a' }}>
          <iframe
            ref={iframeRef}
            src={item.embed}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title={item.title}
            className="absolute inset-0 w-full h-full"
          />
          <button
            onClick={toggleMute}
            aria-label={muted ? 'Unmute' : 'Mute'}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            style={{
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            {muted ? <FiVolumeX size={16} /> : <FiVolume2 size={16} />}
          </button>
        </div>
      ) : (
        item.type === 'text' ? (
        <div className="relative w-full h-full min-h-[300px] flex flex-col items-center justify-center p-8 text-center"
          style={{ background: item.bg || 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)' }}>
          <p className="text-lg md:text-xl font-bold leading-snug mb-3" style={{ color: item.textColor || '#fff' }}>{item.title}</p>
          <p className="text-sm leading-relaxed opacity-80" style={{ color: item.textColor || '#fff' }}>{item.description}</p>
        </div>
      ) : (
        <div className="relative w-full h-full min-h-[300px] flex items-center justify-center overflow-hidden"
          style={{ background: item.bgGradient || 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 50%, #ddd6fe 100%)' }}>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03] p-4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />
        </div>
      )
      )}

      {item.type !== 'text' && (
      <div className="absolute bottom-0 left-0 right-0 p-5"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)' }}>
        <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">{item.label}</p>
        <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
        <p className="text-[11px] text-white/50">{item.platform}</p>
      </div>
      )}
    </div>
  );
};

const PopupModal = ({ item, isOpen, onClose }) => {
  if (!isOpen || !item) return null;

  const isVideo = item.type === 'video';
  const iframeRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (isVideo && iframeRef.current && window.Vimeo) {
      const player = new window.Vimeo.Player(iframeRef.current);
      player.setMuted(muted);
      if (playing) {
        player.play();
      } else {
        player.pause();
      }
    }
  }, [muted, playing, isVideo]);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!iframeRef.current || !window.Vimeo) return;
    const player = new window.Vimeo.Player(iframeRef.current);
    if (muted) {
      player.setMuted(false);
      player.setVolume(1);
    } else {
      player.setMuted(true);
      player.setVolume(0);
    }
    setMuted(!muted);
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!iframeRef.current || !window.Vimeo) return;
    const player = new window.Vimeo.Player(iframeRef.current);
    if (playing) {
      player.pause();
    } else {
      player.play();
    }
    setPlaying(!playing);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.95)' }}
      onClick={onClose}
    >
      <div 
        className={`relative w-full ${isVideo ? 'max-w-5xl' : 'max-w-4xl'} max-h-[90vh] rounded-2xl overflow-hidden`}
        style={{ background: isVideo ? '#000' : '#fff' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-30 w-12 h-12 rounded-full backdrop-blur flex items-center justify-center hover:bg-white/20 transition-colors ${isVideo ? 'bg-white/10 text-white' : 'bg-black/10 text-gray-800'}`}
        >
          <FiX size={24} />
        </button>

        {isVideo ? (
          <>
            {/* Video - Full screen */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                ref={iframeRef}
                src={item.embed.replace('controls=0', 'controls=1&autoplay=1')}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title={item.title}
                className="absolute inset-0 w-full h-full"
              />
              
              {/* Custom video controls overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="flex gap-3">
                  <button
                    onClick={togglePlay}
                    className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                  >
                    {playing ? <FiPause size={24} /> : <FiPlay size={24} />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                  >
                    {muted ? <FiVolumeX size={24} /> : <FiVolume2 size={24} />}
                  </button>
                </div>
                
                {/* Video info */}
                <div className="text-right text-white">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-xs opacity-80">{item.platform}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="relative w-full flex items-center justify-center p-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filtered = activeTab === 'all'
    ? mediaItems
    : mediaItems.filter(item => item.category === activeTab);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('#portfolio .animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    return () => {
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, [activeTab]);

  const openPopup = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <section id="portfolio" className="section-padding bg-white relative overflow-hidden">
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />

      <div className="container-max relative z-10">

        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Selected Works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Portfolio</h2>
          <div className="accent-line" />
        </div>

        <div className="flex justify-center mb-10 animate-on-scroll">
          <div className="inline-flex rounded-lg overflow-hidden" style={{ border: '1px solid rgba(168,85,247,0.2)' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                style={{
                  background: activeTab === cat.id ? 'linear-gradient(135deg, #a855f7, #7c3aed)' : 'transparent',
                  color: activeTab === cat.id ? '#ffffff' : '#6b7280',
                  borderRight: '1px solid rgba(168,85,247,0.15)',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[minmax(280px,auto)]">
          {filtered.map((item, i) => {
            let spanClass = '';
            if (item.size === 'large') {
              spanClass = 'col-span-2 row-span-2';
            } else if (item.size === 'medium') {
              spanClass = 'col-span-2 md:col-span-2';
            } else {
              spanClass = 'col-span-1';
            }

            return (
              <BentoCard
                key={item.id}
                item={item}
                className={`${spanClass} animate-on-scroll`}
                onClick={() => item.type !== 'text' && openPopup(item)}
                isPopupOpen={!!selectedItem}
              />
            );
          })}
        </div>

        <div className="text-center mt-10 animate-on-scroll">
          <p className="text-muted text-sm mb-4">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''} selected
          </p>
          <a href="#contact" className="btn-primary">
            Work With Me
          </a>
        </div>

      </div>

      {/* Popup Modal */}
      <PopupModal 
        item={selectedItem} 
        isOpen={!!selectedItem} 
        onClose={closePopup} 
      />
    </section>
  );
};

export default Portfolio;
