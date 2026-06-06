import styles from "./about.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.aboutContent}>
        <p>
          Full Stack Web Developer with 1.5 years of professional experience and a strong passion for creating full-stack websites with a trouble-free UX, sharp design and complex functionality as well as writing clean and efficient code.
          I love to keep up-to-date with the latest updates on technologies and continuously learn about best practices and new technologies.
        </p>
      </div>
    </section>
  );
};

export default About;
