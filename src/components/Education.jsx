import React from "react";
import { education, certifications } from "../data/education";

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="timeline hidden">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="timeline-item"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <span className="timeline-date">{edu.date}</span>
              <div className="timeline-content">
                <h3>{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="certifications-title">Certifications</h3>

        <div className="experience-grid">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="experience-card hidden"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3>{cert.title}</h3>
              <span className="company">{cert.issuer}</span>
              <span className="duration">{cert.date}</span>
              <ul>
                {cert.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Image rendering */}
              {cert.image && (
  <div
  className="experience-grid"
  style={{
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1.5rem",
  }}
>

  
    <img
      src={cert.image}
      alt={`${cert.title} certificate`}
      style={{
        width: "300px",       // or 100% if inside a container
    maxWidth: "100%",     // makes it responsive
    height: "auto",
    display: "block",
    margin: "1rem auto",  // center it
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
      }}
    />
  </div>
)}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
