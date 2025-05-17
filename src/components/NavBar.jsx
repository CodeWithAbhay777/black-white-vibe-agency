
"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white py-2 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-black">
            PIXEL.
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['Home', 'Team', 'Services', 'Pricing', 'Contact'].map((item, index) => (
            <Link 
              key={index} 
              href={`#${item.toLowerCase()}`} 
              className="text-black hover:text-gray-600 transition-colors"
            >
              {item}
            </Link>
          ))}
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-black">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md animate-fade-in">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {['Home', 'Team', 'Services', 'Pricing', 'Contact'].map((item, index) => (
              <Link 
                key={index} 
                href={`#${item.toLowerCase()}`}
                className="text-black hover:text-gray-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
