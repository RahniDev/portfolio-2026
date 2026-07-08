import styles from "./projects.module.css";
import artistPortfolio from "../../assets/artist-portfolio.png";
import artistEcommerce from "../../assets/artist-ecommerce.png";

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectsContainer}>
        <div className={styles.projectCard}>
          <h3>Artist E-commerce</h3>
          <img src={artistEcommerce} width={420} alt="Artist e-commerce site" />
          <ul>
            <li>Full stack e-commerce website for an artist to sell their paintings.</li>
            <li>Multi-language translation</li>
            <li>Braintree payment integration</li>
            <li>Admin dashboard & user dashboard</li>
            <li>Product images stored on Cloudfare</li>
            <div className={styles.techStack}>
              <span className={styles.badge}>React 19</span>
              <span className={styles.badge}>TypeScript</span>
              <span className={styles.badge}>Node.js</span>
              <span className={styles.badge}>Express</span>
              <span className={styles.badge}>MongoDB</span>
            </div>
          </ul>
          <a target="_blank" href="https://github.com/RahniDev/artist-ecommerce">GitHub Repo</a>
          <a target="_blank" href="https://artist-ecommerce.vercel.app">Live Website</a>
        </div>
        <div className={styles.projectCard}>
          <h3>Artist Portfolio</h3>
          <img src={artistPortfolio} width={420} alt="Screenshot of artist portfolio website" className={styles.projectImage} />
          <ul>
            <li>Frontend responsive website showcasing the works of an artist.</li>
            <li>French translation</li>
            <li>Contact form using EmailJS</li>
            <li>Zoom feature on paintings</li>
            <li>Hosted on Vercel</li>
            <li>Cloudfare analytics</li>
            <div className={styles.techStack}>
              <span className={styles.badge}>React 19</span>
              <span className={styles.badge}>TypeScript</span>
            </div>
          </ul>
          <a target="_blank" href="https://github.com/RahniDev/artist-portfolio">GitHub Repo</a>
          <a target="_blank" href="https://www.sakaridemeis.com">Live Website</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
