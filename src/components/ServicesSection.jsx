
import React, { useEffect, useState, useRef } from 'react';

const services = [
  {
    id: 1,
    title: 'Website Development',
    description: 'Custom website solutions that are responsive, performant, and visually stunning.',
    icon: '💻',
    features: ['React/Next.js', 'E-commerce', 'CMS Integration', 'Performance Optimization'],
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    icon: '📱',
    features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered design that balances aesthetics with functionality and usability.',
    icon: '🎨',
    features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems'],
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns that drive traffic, engagement, and conversions.',
    icon: '📈',
    features: ['SEO', 'PPC', 'Social Media', 'Content Marketing'],
  },
  {
    id: 5,
    title: 'Brand Identity',
    description: 'Comprehensive brand development that communicates your unique story and values.',
    icon: '✨',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
  },
  {
    id: 6,
    title: 'Content Creation',
    description: 'Engaging content that resonates with your audience and drives meaningful actions.',
    icon: '📝',
    features: ['Copywriting', 'Video Production', 'Photography', 'Animation'],
  },
  {
    id: 7,
    title: 'Social Media Management',
    description: 'Strategic social media presence that builds community and drives engagement.',
    icon: '📱',
    features: ['Platform Strategy', 'Content Calendar', 'Community Management', 'Analytics'],
  },
  {
    id: 8,
    title: 'E-commerce Solutions',
    description: 'End-to-end e-commerce development with seamless shopping and payment experiences.',
    icon: '🛒',
    features: ['Shopify', 'WooCommerce', 'Payment Integration', 'Inventory Management'],
  },
  {
    id: 9,
    title: '3D & Motion Graphics',
    description: 'Immersive 3D experiences and motion graphics that captivate and engage.',
    icon: '🎬',
    features: ['Three.js', 'WebGL', 'Animation', 'Interactive Experiences'],
  }
];

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`reveal bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-500 ${isHovered ? 'shadow-xl' : 'shadow-md'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`text-5xl mb-6 transform transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}>
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.description}</p>
      
      <ul className={`space-y-2 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className={`mt-6 overflow-hidden transition-all duration-500 ${isHovered ? 'h-10 opacity-100' : 'h-0 opacity-0'}`}>
        <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition-colors">
          Learn more
        </button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const marqueeRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `translateX(${-scrollPosition * 0.1}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background marquee text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          ref={marqueeRef}
          className="whitespace-nowrap text-[200px] font-bold text-black opacity-[0.02] flex"
          style={{ width: 'fit-content' }}
        >
          <span>SERVICES SERVICES SERVICES SERVICES SERVICES SERVICES</span>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 reveal">
          <h2 className="text-xs md:text-sm uppercase tracking-[0.3em] mb-3 text-gray-500">What We Do</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-outline">Services</span></h1>
          <p className="max-w-2xl text-lg text-gray-700">
            We offer a comprehensive range of digital services to help businesses transform and thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
