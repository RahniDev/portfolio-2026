import styles from "./hero.module.css";
import profileImg from '../../assets/rahni.jpg';
import CV from '../../assets/Rahni.docx'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <img
          src={profileImg}
          alt="Photo of Rahni"
          className={styles.profileCircle}
        />
      </div>
      <div className={styles.heroText}>
        <h1>Hi, I'm Rahni</h1>
        <h2>Full-Stack JavaScript Developer specializing in React.js, Node.js, and modern web applications.</h2>
        <a href={CV} download="" target="_blank">
          CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
