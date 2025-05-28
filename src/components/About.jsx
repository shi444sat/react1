import shiveshpic from '../assets/shivesh.jpg';
import project1 from '../assets/project1.png';
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">Here's what I do</h2>
        <div className="about-content hidden">
          {/* Image Container */}
          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src={shiveshpic}
                alt="Shivesh Satyam"
                className="profile-image"
              />
              <div className="image-border"></div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="about-text">
            <h3>About Me</h3>
            <p>
            I’m a first-year B.Tech student in Computer Science Engineering.
Alongside my coursework, I am pursuing a Data Science course with IIT Madras.
I’m passionate about computer science, artificial intelligence, machine learning, and modern electronics.


            </p>
            <p>
              When it comes to skills, I'm still an amateur in Cybersecurity,
              Python, JavaScript, Java, and Electronics, but I'm steadily improving
              through practice and projects. I'm more confident in Python, which
              I've used to build basic automation. I enjoy experimenting,
              learning by doing, and collaborating with others to grow my
              knowledge and experience.
            </p>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="skills-container hidden">
          <div className="skills-grid">
            <div className="skill-item">
              <h4>Cyber Security & Elctronics</h4>
              <ul>
                <li>NMAP</li>
                <li>Burp Suite</li>
                <li>SQL Injection</li>
                <li>Cross-Site Scripting (XSS)</li>
                <li>ESP32</li>
                <li>Rasberry-pi pico</li>
              </ul>
            </div>
            
            <div className="skill-item">
  <h4>Web Development</h4>
  <ul>
    <li>Beginning with Dynamic website using vanilla JS</li>
   
  </ul>

  {/* Screenshot and link below */}
  <div className="project-preview">
    <a
      href="https://priyavats.in"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={project1}
        alt="Screenshot of my web project"
        style={{ width: '100%', maxWidth: '400px', borderRadius: '8px' }}
      />
    </a>
   
  </div>
</div>

            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;