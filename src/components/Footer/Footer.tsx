import { FaXTwitter, FaLinkedin, FaTelegram, FaGithub, FaInstagram } from "react-icons/fa6";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Rahni De-Meis.</p>
      <div className="footer-social">
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
          href="https://instagram.com/rahni.dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={20} />
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
          href="https://t.me/RahniDev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <FaTelegram size={20} />
        </a>
      </div>
    </footer>
  )
}

export default Footer