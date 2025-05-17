import React, { useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import TeamSection from "../components/TeamSection";
import ServicesSection from "../components/ServicesSection";
import PricingSection from "../components/PricingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Enhanced scroll reveal with permanent visibility
    const revealElements = () => {
      const elements = document.querySelectorAll('.reveal');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Add active class when element comes into view
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
          // Once active, never remove the class
          element.dataset.revealed = 'true';
        }
        
        // Prevent any disappearing behavior on hover transitions
        element.addEventListener('mouseenter', () => {
          element.classList.add('hover-visible');
        });
        
        // Keep elements visible even after mouse leaves
        element.addEventListener('mouseleave', () => {
          // If it was previously revealed, keep it visible
          if (element.dataset.revealed === 'true') {
            element.classList.add('active');
          }
        });
      });
    };
    
    window.addEventListener('scroll', revealElements);
    window.addEventListener('load', revealElements);
    revealElements(); // Run once on mount
    
    // Initial reveal for elements above the fold
    setTimeout(revealElements, 100);
    
    return () => {
      window.removeEventListener('scroll', revealElements);
      window.removeEventListener('load', revealElements);
    };
  }, []);

  return (
    <div className="bg-white">
      <NavBar />
      <HeroSection />
      <TeamSection />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
