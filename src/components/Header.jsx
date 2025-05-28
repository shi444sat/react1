import React, { useState, useEffect } from "react"; // Added missing imports
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Header = ({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  closeMobileMenu,
  scrollToSection,
}) => {
  const { darkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id, e) => {
    e.preventDefault();
    closeMobileMenu();
    scrollToSection(id);

    // Update URL without page reload - fixed history usage
    if (window.history.pushState) {
      window.history.pushState(null, null, `#${id}`);
    } else {
      window.location.hash = id;
    }
  };

  return (
    <header className={`${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav>
          <a
            href="#home"
            className="logo"
            onClick={(e) => handleNavClick("home", e)}
          >
            &lt;SS/&gt;
          </a>

          <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeSection === link.id ? "active" : ""}
                  onClick={(e) => handleNavClick(link.id, e)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
