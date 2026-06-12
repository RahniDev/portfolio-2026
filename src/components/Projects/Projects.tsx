import styles from "./projects.module.css";
import artistPortfolio from "../../assets/artist-portfolio.png";
import artistEcommerce from "../../assets/artist-ecommerce.png";

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectsContainer}>
        <div className={styles.projectCard}>
          <h3>Artist E-commerce (in progress)</h3>
          <img src={artistEcommerce} width={420} alt="Artist e-commerce site" />
          <ul>
            <li>Full stack e-commerce website for the works of an artist.</li>
            <li>React 19, TypeScript, Node, Express, MongoDB</li>
            <li>Multi-language translation</li>
            <li>Braintree payment integration</li>
            <li>Admin dashboard & user dashboard</li>

            <li>Product images stored on Cloudfare</li>
          </ul>
          <a href="https://github.com/RahniDev/artist-ecommerce">GitHub Repo</a>
          <a href="https://artist-ecommerce.vercel.app">Live Website</a>
        </div>
        <div className={styles.projectCard}>
          <h3>Artist Portfolio</h3>
          <img src={artistPortfolio} width={420} alt="Screenshot of artist portfolio website" className={styles.projectImage} />
          <ul>
            <li>Frontend responsive website showcasing the works of an artist.</li>
            <li>React 19 & TypeScript</li>
            <li>French translation</li>
            <li>Contact form using EmailJS</li>
            <li>Zoom feature on paintings</li>
            <li>Hosted on Vercel</li>
            <li>Cloudfare analytics</li>
          </ul>
          <a href="https://github.com/RahniDev/artist-portfolio">GitHub Repo</a>
          <a href="https://www.sakaridemeis.com">Live Website</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
