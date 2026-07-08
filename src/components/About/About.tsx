import styles from "./about.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.aboutContent}>
        <p>
          Full Stack Web Developer with 1.5 years of professional experience across three companies in three different countries.
          I build performant and secure web applications while writing clean and maintainable code.
          I enjoy keeping up to date with the latest developments in web technologies and software development best practices.
        </p>
      </div>
    </section>
  );
};

export default About;
