
import React, { useEffect, useRef } from 'react';

const developers = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'Frontend Lead',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&h=400&fit=crop',
    skills: ['React', 'Vue', 'GSAP'],
    bio: 'Alex specializes in creating smooth animated interfaces with a focus on accessibility and performance.',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&fit=crop',
    skills: ['Figma', 'Adobe XD', 'Animation'],
    bio: 'Sarah transforms complex ideas into intuitive, beautiful user experiences that delight and engage.',
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    role: 'Backend Developer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=400&fit=crop',
    skills: ['Node.js', 'Python', 'AWS'],
    bio: 'Michael builds robust, scalable backend systems that power our most demanding client applications.',
  },
  {
    id: 4,
    name: 'Jamie Taylor',
    role: '3D Artist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&fit=crop',
    skills: ['Three.js', 'Blender', 'WebGL'],
    bio: 'Jamie creates immersive 3D experiences and animations that bring websites to life with depth and dimension.',
  },
];

const DeveloperCard = ({ developer, index }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.reveal');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on mount
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };

  return (
    <div 
      ref={cardRef}
      className={`reveal bg-white border border-gray-200 rounded-2xl p-6 hover-lift shadow-lg transition-all duration-300 stagger-${index + 1}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
        <img 
          src={developer.image} 
          alt={developer.name} 
          className="w-full h-64 object-cover object-center transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-2xl font-bold mb-1">{developer.name}</h3>
      <p className="text-gray-600 mb-3">{developer.role}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {developer.skills.map((skill, idx) => (
          <span key={idx} className="px-3 py-1 bg-gray-100 text-sm rounded-full">{skill}</span>
        ))}
      </div>
      <p className="text-gray-700">{developer.bio}</p>
    </div>
  );
};

const TeamSection = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollY = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const offset = (scrollY - sectionTop) * 0.1;
      
      if (scrollY > sectionTop - window.innerHeight && scrollY < sectionTop + sectionRef.current.offsetHeight) {
        sectionRef.current.style.backgroundPositionY = `${offset}px`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="team" 
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array(20).fill().map((_, i) => (
            <div 
              key={i}
              className="absolute bg-black w-1 h-1 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="mb-16 reveal">
          <h2 className="text-xs md:text-sm uppercase tracking-[0.3em] mb-3 text-gray-500">Our Talent</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet our <span className="text-outline">developers</span></h1>
          <p className="max-w-2xl text-lg text-gray-700">Our team of digital experts combines creativity and technical prowess to deliver exceptional results for our clients.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {developers.map((developer, index) => (
            <DeveloperCard key={developer.id} developer={developer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
