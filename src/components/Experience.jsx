import { experiences } from '../data/experience';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">
          <FaBriefcase /> Experience
        </h2>

        {/* Check if experiences array is empty */}
        {experiences.length === 0 ? (
          <p>Currently no work experience available. I am still a student and gaining knowledge.</p>
        ) : (
          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="experience-card hidden" style={{ transitionDelay: `${index * 200}ms` }}>
                <h3>{exp.title}</h3>
                <span className="company">{exp.company}</span>
                <span className="duration">{exp.duration}</span>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
