import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    // Create the observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'visible' class when the element comes into view
          entry.target.classList.add('visible');
          // Stop observing once it's visible
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Select all elements with the 'fade-in' class
    const elements = document.querySelectorAll('.fade-in');
    
    // Start observing them
    elements.forEach(el => observer.observe(el));

    // Cleanup function
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []); // Empty dependency array ensures this runs once on mount
};

export default useScrollAnimation;