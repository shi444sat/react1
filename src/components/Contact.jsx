import { useState } from 'react';
import { FaEnvelope, FaDownload } from 'react-icons/fa';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Shivesh,\n\n` +
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}\n\nRegards,\nPortfolio Website`
    );
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=shiveshsatyam.cse@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailURL, '_blank');
    
  
    window.open(gmailURL, '_blank');
  
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };
  

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = require('../assets/gyanesh.pdf'); 
    link.download = 'gyanesh.pdf'; 
    document.body.appendChild(link);
    link.click(); 
    document.body.removeChild(link);
  };  

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-container hidden">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Get In Touch</h3>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-item-content">
                  <h4>Email</h4>
                  <p>shiveshsatyam.cse@gmail.com</p>
                </div>
              </div>
              
              {/* <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-item-content">
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div> */}
              
              {/* <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-item-content">
                  <h4>Location</h4>
                  <p>Ganga Institute of Technology and Management, Uttar Pradesh, India</p>
                </div>
              </div> */}
            </div>
            
            <div className="contact-card">
              <h3>Download Resume</h3>
              <p>Get a copy of my resume to learn more about my skills and experience.</p>
              <button className="btn" onClick={handleDownload}>
                <FaDownload /> Download CV
              </button>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span> Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
