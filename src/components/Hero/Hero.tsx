import styles from "./hero.module.css";
import profileImg from '../../assets/rahni.jpg';

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
        <h2>Web Developer</h2>
        <a href="../../assets/Rahni-4.pdf" target="_blank">
          CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
