import { useEffect, useState } from "react";
import "./Projects.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GithubIcon } from "../Icons";
import { prosjekter } from "../data/projects";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 700px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    const handleChange = (event: MediaQueryListEvent) =>
      setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
};

const Projects = () => {
  const isMobile = useIsMobile();

  const columns = isMobile
    ? [prosjekter]
    : [
        prosjekter.filter((_, index) => index % 2 === 0),
        prosjekter.filter((_, index) => index % 2 === 1),
      ];

  return (
    <div className="projects">
      <Navbar />
      <header className="projects-header">
        <h1 className="projects-title">PROSJEKTER</h1>
        <p className="projects-intro">
          Noen av kodeprosjektene jeg har jobbet med, fra egne sideprosjekter
          til skole- og jobbrelaterte oppgaver.
        </p>
      </header>

      <section className="projects-content">
        <div className="projects-grid">
          {columns.map((column, columnIndex) => (
            <div className="projects-column" key={columnIndex}>
              {column.map((project) => (
                <article className="project-card" key={project.title}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repo for ${project.title}`}
                      className="project-card-github"
                    >
                      <GithubIcon width={22} height={22} />
                    </a>
                  )}
                  <h2 className="project-card-title">{project.title}</h2>
                  <p className="project-card-subtitle">{project.subtitle}</p>
                  <p className="project-card-description">{project.intro}</p>
                  <p className="project-card-learned">
                    <strong>Hva jeg lærte:</strong> {project.learned}
                  </p>
                  <div className="project-card-tech">
                    {project.tech.map((tech) => (
                      <span className="project-tech-tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card-link project-card-link--demo"
                    >
                      Live demo ↗
                    </a>
                  )}
                </article>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
