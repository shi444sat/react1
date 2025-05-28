import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt, FaVoteYea, FaLock } from 'react-icons/fa';

const Projects = () => {
  const handleProjectLink = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card hidden"
              style={{
                transitionDelay: `${index * 100}ms`,
                background: `linear-gradient(${project.gradient})`, // Apply gradient
              }}
            >
              <div className="project-media">
                {/* Image container */}
                {project.image && (
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '300px',
                        maxWidth: '100%',
                        height: 'auto',
                        display: 'block',
                        margin: '0 auto 1rem auto',
                        borderRadius: '10px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                      }}
                    />
                  </div>
                )}

                {/* Video container */}
                {project.video && (
                  <div className="project-video">
                    <video
                      src={project.video}
                      controls
                      playsInline
                      preload="metadata"
                      style={{
                        width: '300px',
                        maxWidth: '100%',
                        height: 'auto',
                        display: 'block',
                        margin: '0 auto 1rem auto',
                        borderRadius: '10px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                      }}
                    />
                  </div>
                )}

                <div className="project-icon">
                  {project.icon === 'election' && <FaVoteYea />}
                  {project.icon === 'EncDec' && <FaLock />}
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  {project.demoUrl && (
                    <button
                      className="btn"
                      onClick={() => handleProjectLink(project.demoUrl)}
                      aria-label={`View ${project.title} demo`}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </button>
                  )}
                  {project.codeUrl && (
                    <button
                      className="btn btn-outline"
                      onClick={() => handleProjectLink(project.codeUrl)}
                      aria-label={`View ${project.title} code`}
                    >
                      <FaGithub /> Code
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
