import { FaGithub, FaInstagram, FaLinkedin, FaHeart, FaTwitter} from 'react-icons/fa';
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/shi444sat" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/shiveshsatyam_" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/in/shivesh-satyam-8661a133b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
       <a href="https://x.com/shiveshsatyam_" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a> 
        </div>
        <p>Made with <FaHeart style={{ color: '#FF0000' }} /> by Shivesh Satyam</p>
      </div>
    </footer>
  );
};

export default Footer;