import React, { useState, useEffect } from 'react';
import "./main.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 1, text: 'Home', href: '#home' },
    { id: 2, text: 'About', href: '#about' },
    { id: 3, text: 'Resume', href: '#resume' },
    { id: 4, text: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.6, // Adjust to control sensitivity
      }
    );

    sections.forEach((section) => {
      const el = document.querySelector(section.href);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.querySelector(section.href);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.7)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-12">
          <div className="flex justify-center flex-1 space-x-8">
            {sections.map(item => (
              <a
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'text-[#3b9c9c]'
                    : 'text-gray-100 hover:text-[#3b9c9c]'
                }`}
              >
                {item.text}
              </a>
            ))}
          </div>
          <div className="ml-8">
            <img
              src="/carl_vector.png"
              alt="Carl 2D Selfie"
              className="w-12 h-10 object-contain"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
