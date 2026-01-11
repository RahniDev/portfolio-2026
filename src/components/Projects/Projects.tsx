import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Artist Portfolio</h3>
          <ul>
            <li>Frontend responsive website showcasing the works of an artist.</li>
            <li>React & TypeScript</li>
            <li>Hosted on Vercel</li>
          </ul>
          <a href="https://github.com/RahniDev/artist-portfolio">GitHub Repo</a>
          <a href="https://www.sakaridemeis.com">Live Website</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
