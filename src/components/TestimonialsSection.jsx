
import React, { useRef, useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    company: 'TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&fit=crop',
    quote: 'Working with Pixel has transformed our online presence completely. Their team truly understood our vision and delivered beyond our expectations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Chen',
    company: 'GrowthBox',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop',
    quote: 'The attention to detail and commitment to excellence is what sets Pixel apart. Our e-commerce platform has seen a 200% increase in conversions since the redesign.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sophia Rodriguez',
    company: 'ArtFusion Gallery',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&fit=crop',
    quote: 'As a creative business, we needed a website that reflected our artistic vision. Pixel delivered a stunning design that perfectly captures our essence.',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Wilson',
    company: 'HealthPlus',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop',
    quote: 'The mobile app developed by Pixel has revolutionized how our patients interact with our services. Intuitive, fast, and incredibly user-friendly.',
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial, index, isActive }) => {
  const cardRef = useRef(null);
  
  return (
    <div 
      ref={cardRef}
      className={`bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 ${
        isActive 
          ? 'opacity-100 transform scale-100' 
          : 'opacity-50 transform scale-95'
      }`}
    >
      <div className="flex items-center mb-6">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-lg">{testimonial.name}</h4>
          <p className="text-gray-500">{testimonial.company}</p>
        </div>
      </div>
      
      <div className="mb-4">
        {Array(5).fill().map((_, i) => (
          <span key={i} className="text-black">
            {i < testimonial.rating ? '★' : '☆'}
          </span>
        ))}
      </div>
      
      <blockquote className="text-gray-700 italic">"{testimonial.quote}"</blockquote>
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 reveal">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-xs md:text-sm uppercase tracking-[0.3em] mb-3 text-gray-500">Testimonials</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">What our clients <span className="text-outline">say</span></h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Don't take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard 
                      testimonial={testimonial} 
                      index={index}
                      isActive={index === activeIndex}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-black w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
