
"use client";
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const heroRef = useRef(null);
  const movingCirclesRef = useRef([]);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      movingCirclesRef.current.forEach((circle, index) => {
        if (circle) {
          const speed = (index + 1) * 15;
          circle.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Abstract moving circles */}
      <div ref={el => movingCirclesRef.current[0] = el} className="absolute h-40 w-40 rounded-full border border-black opacity-10 -top-10 left-1/4"></div>
      <div ref={el => movingCirclesRef.current[1] = el} className="absolute h-64 w-64 rounded-full border-2 border-black opacity-5 top-1/3 -right-10"></div>
      <div ref={el => movingCirclesRef.current[2] = el} className="absolute h-32 w-32 rounded-full bg-black opacity-5 bottom-1/4 left-10"></div>
      <div ref={el => movingCirclesRef.current[3] = el} className="absolute h-96 w-96 rounded-full border-4 border-black opacity-5 -bottom-20 right-1/4"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xs md:text-sm uppercase tracking-[0.3em] mb-3 opacity-70">Digital Agency</h2>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            WE CREATE<br />
            <span className="text-outline">DIGITAL EXPERIENCES</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl mb-8 text-gray-700 animate-fade-in stagger-2">
            We are a team of passionate designers and developers creating exceptional digital experiences that inspire and engage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-3">
            <button className="bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors">
              Our Work
            </button>
            <button className="border border-black px-8 py-4 rounded-md hover:bg-black hover:text-white transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#team" className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll</span>
          <div className="h-12 w-0.5 bg-black"></div>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
