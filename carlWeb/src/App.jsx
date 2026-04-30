import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home/Home";
import About from "./components/sections/About/About";
import Resume from "./components/sections/Resume/Resume";
import Contact from "./components/sections/Contact/Contact";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  return (
    <div className="app-shell">
      <div className="relative z-10 transition-opacity duration-1000 opacity-100">
        <Navbar isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode((value) => !value)} />
        <Home />
        <About />
        <Resume />
        <Contact />
        <footer className="site-footer">
          <div className="section-frame site-footer-inner">
            <p className="site-footer-copy">© 2026 Carl Scozzari. All rights reserved.</p>
            <div className="site-footer-meta">
              <p className="site-footer-credit">Designed &amp; Built with ❤️ by Carl Scozzari</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
