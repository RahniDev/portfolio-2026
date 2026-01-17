import styles from "./projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
        <div className={styles.projectCard}>
          <h3>Artist Portfolio</h3>
          <ul>
            <li>Frontend responsive website showcasing the works of an artist.</li>
            <li>React & TypeScript</li>
            <li>Hosted on Vercel</li>
          </ul>
          <a href="https://github.com/RahniDev/artist-portfolio">GitHub Repo</a>
          <a href="https://www.sakaridemeis.com">Live Website</a>
        </div>
    </section>
  );
};

export default Projects;
