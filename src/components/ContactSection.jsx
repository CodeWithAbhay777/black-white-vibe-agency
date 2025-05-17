
import React, { useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fake form submission
    alert('Thank you for your message! Our team will contact you shortly.');
    formRef.current.reset();
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white reveal">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-xs md:text-sm uppercase tracking-[0.3em] mb-3 text-gray-500">Contact Us</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in <span className="text-outline">touch</span></h1>
          <p className="max-w-2xl text-lg text-gray-700">
            Ready to start your next project? Have questions about our services? Let's talk!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@pixelagency.com" className="text-gray-600 hover:text-black transition-colors">hello@pixelagency.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+12345678901" className="text-gray-600 hover:text-black transition-colors">+1 (234) 567-8901</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-3" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">123 Design Street, Creative City, 10001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 mr-3" />
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-white h-12 w-12 rounded-full flex items-center justify-center border border-gray-200 hover:border-black transition-colors"
                  >
                    <span className="text-sm">{social.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
