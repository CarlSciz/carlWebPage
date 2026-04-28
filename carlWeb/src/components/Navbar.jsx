import { useState, useEffect } from 'react';
import "./Navbar.css";

/* eslint-disable react/prop-types */

const sections = [
  { id: 1, text: "Home", href: "#home" },
  { id: 2, text: "About", href: "#about" },
  { id: 3, text: "Resume", href: "#resume" },
  { id: 4, text: "Contact", href: "#contact" }
];

const Navbar = ({ isDarkMode, onToggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');

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
        threshold: 0.6, 
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
    <nav className="site-nav fixed top-0 w-full z-40">
      <div className="section-frame px-4 sm:px-6">
        <div className="flex h-18 items-center justify-between gap-4">
          <a href="#home" className="nav-badge hidden rounded-full px-4 py-2 text-sm font-semibold md:inline-flex">
            Carl Scozzari
          </a>
          <div className="flex flex-1 justify-center gap-2 sm:gap-3">
            {sections.map(item => (
             <a
             key={item.id}
             href={item.href}
             className={`nav-link ${
               activeSection === item.href.substring(1)
                 ? 'active'
                 : ''
             }`}
           >
             {item.text}
           </a>
            ))}
          </div>
          <button
            type="button"
            className="nav-theme-toggle nav-badge rounded-full p-2"
            onClick={onToggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDarkMode}
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <img
              src="/carl_vector.png"
              alt="Carl 2D Selfie"
              className="h-10 w-10 object-contain"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
