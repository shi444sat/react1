import { useEffect, useRef } from 'react';
import heroImage from '../assets/hero-image.svg';

const Hero = ({ scrollToSection }) => {  // Receive scrollToSection as prop
  const heroImageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroImageRef.current) {
        const scrollPosition = window.pageYOffset;
        heroImageRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content hidden">
          <div className="hero-text">
            <p>Hi, I am</p>
            <h1>Shivesh Satyam</h1>
            <pre>&lt;An amateur Dev & Cybersec enthusiast./&gt;</pre>
            <p>
            A passionate developer and student specializing in WebDev & Data Science, with a growing interest in Cybersecurity & Electronics. While I’m still honing my skills, I enjoy building projects and learning new technologies.
            </p>
            <div className="hero-buttons">
              <a 
                href="#contact" 
                className="btn"
                onClick={(e) => handleButtonClick(e, 'contact')}  // Use smooth scroll
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="btn btn-outline"
                onClick={(e) => handleButtonClick(e, 'projects')}  // Use smooth scroll
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="hero-image" ref={heroImageRef}>
            <img src={heroImage} alt="Illustration of Shivesh Satyam" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;