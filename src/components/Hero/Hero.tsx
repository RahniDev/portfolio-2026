import styles from "./hero.module.css";
import CubeScene from '../Shapes/Shapes.tsx'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <CubeScene />
      <div className={styles.heroText}>
        <h1>Rahni De-Meis</h1>
        <h2>Web Developer</h2>
        <p>I build fast, modern, and scalable full stack web applications.</p>
        <a href="#projects">View My Projects</a>
      </div>
    </section>
  );
};

export default Hero;
