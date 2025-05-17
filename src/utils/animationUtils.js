
// Helper function to determine if an element is in viewport
export const isInViewport = (element, offset = 0) => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= 0
  );
};

// Function to add animation classes based on scroll position
export const animateOnScroll = (elements, animationClass = 'active', offset = 100) => {
  if (!elements || elements.length === 0) return;
  
  elements.forEach(element => {
    if (isInViewport(element, offset)) {
      element.classList.add(animationClass);
    }
  });
};

// Mouse follow effect for elements
export const setupMouseFollow = (element, intensity = 1) => {
  if (!element) return;
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const rect = element.getBoundingClientRect();
    const x = clientX - (rect.left + rect.width / 2);
    const y = clientY - (rect.top + rect.height / 2);
    
    element.style.transform = `translate(${x * intensity / 10}px, ${y * intensity / 10}px)`;
  };
  
  element.addEventListener('mousemove', handleMouseMove);
  
  // Return cleanup function
  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
  };
};

// Set up parallax effect on scroll
export const setupParallax = (element, speed = 0.5) => {
  if (!element) return;
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const elementTop = element.offsetTop;
    const elementHeight = element.offsetHeight;
    const viewportHeight = window.innerHeight;
    
    if (scrollY > elementTop - viewportHeight && scrollY < elementTop + elementHeight) {
      const yPos = (scrollY - elementTop) * speed;
      element.style.backgroundPositionY = `${yPos}px`;
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};
