import styles from "./projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectCard}>
        <h3>Artist Portfolio</h3>
        <ul>
          <li>React 19 & TypeScript</li>
          <li>Frontend responsive website showcasing the works of an artist.</li>
          <li>French translation</li>
          <li>Contact form using EmailJS</li>
          <li>Zoom feature on paintings</li>
           <li>Hosted on Vercel</li>
           <li>Cloudfare analytics</li>
        </ul>
        <a href="https://github.com/RahniDev/artist-portfolio">GitHub Repo</a>
        <a href="https://www.sakaridemeis.com">Live Website</a>
      </div>
    </section>
  );
};

export default Projects;
