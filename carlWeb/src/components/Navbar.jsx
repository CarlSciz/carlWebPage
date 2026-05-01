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
    <nav className="site-nav fixed top-0 w-full z-40" aria-label="Primary navigation">
      <div className="section-frame px-4 sm:px-6">
        <div className="flex h-18 items-center justify-between gap-4">
          <div className="flex flex-1 justify-center gap-2 sm:gap-3">
            {sections.map(item => (
             <a
             key={item.id}
             href={item.href}
             aria-current={activeSection === item.href.substring(1) ? "page" : undefined}
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
            className="nav-theme-toggle"
            onClick={onToggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDarkMode}
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className="nav-theme-track" aria-hidden="true">
              <span className="nav-theme-icon light">&#9728;</span>
              <span className="nav-theme-icon dark">&#9790;</span>
              <span className="nav-theme-thumb">
                <img
                  src="/carl_vector.png"
                  alt=""
                  className="h-10 w-10 object-contain"
                />
              </span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
