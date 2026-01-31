import styles from "./contact.module.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [success, setSuccess] = useState<boolean>(false)

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form) return;

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form,
        PUBLIC_KEY
      );
      setSuccess(true)
      form.reset();
    } catch (err) {
      console.error("Your message failed to send.", err);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact</h2>
      <form
        ref={formRef}
        className={styles.contactForm}
        onSubmit={sendEmail}
      >
        <div className={styles.inputContainer}>
          <label htmlFor="name">Name</label>
          <input name="name" type="text" required />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" required />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
          />      </div>
        <div className={styles.btnContainer}>
          <button type="submit">Send</button>
        </div>
        {success && (<p className={styles.success}>Thanks for your message!</p>)}
      </form>
    </section>
  );
};

export default Contact;
