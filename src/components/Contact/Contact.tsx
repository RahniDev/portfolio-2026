import styles from "./contact.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

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

      form.reset();
    } catch (err) {
      console.error("Email failed", err);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact</h2>
      <form
        ref={formRef}
        className="contact-form"
        onSubmit={sendEmail}
      >
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="input-container">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
          />      </div>
        <button type="submit" className="contact-submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
