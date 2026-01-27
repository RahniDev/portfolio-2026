import styles from "./about.module.css";
import profileImg from '../../assets/rahni.jpg';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.aboutContent}>
       <img
        src={profileImg}
        alt="Photo of Rahni"
        className={styles.profileCircle}
      />
        <p>
        I'm a Web Developer with a serious passion for creating full-stack websites which provide a trouble-free UX, sharp design and complex functionality as well as writing clean and efficient code.
        I love to keep up-to-date with the latest updates on technologies and continuously learn about best practices and new technologies.
      </p>
      </div>
    </section>
  );
};

export default About;
