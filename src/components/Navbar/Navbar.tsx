import styles from "./navbar.module.css";
import { FaXTwitter, FaLinkedin, FaTelegram, FaGithub, FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>

      <div className={styles.social}>
        <a
          href="https://github.com/RahniDev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://x.com/rahnidev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <FaXTwitter size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/rahni-developer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://instagram.com/rahni.dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://t.me/RahniDev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <FaTelegram size={20} />
        </a>
      </div>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
