import { useEffect, useState } from 'react';
import '../styles/Preloader.css';
import { useTheme } from '../context/ThemeContext.js';

const GmComponent = ({ darkMode }) => {
  return (
    <div className="gm-container" style={{ color: darkMode ? '#fff' : '#121212' }}>
      <span className="gm-symbol">&lt;</span>
      <span className="gm-letter">Shivesh</span> 
      <span className="gm-letter">Satyam</span>
      <span className="gm-symbol">/&gt;</span>
    </div>
  );
};

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`preloader ${fadeOut ? 'fade-out' : ''}`}
      style={{ background: darkMode ? '#121212' : '#f5f5f5' }}
    >
      <div className="preloader-content">
        <GmComponent darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Preloader;