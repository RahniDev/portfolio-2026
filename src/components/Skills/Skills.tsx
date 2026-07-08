import styles from "./skills.module.css";

const Skills = () => {
    return (
        <section id="skills" className={styles.skills}>
            <h2>Technical Skills</h2>
            <ul>
                <li><strong>Frontend: </strong>React, Next.js, Redux, HTML5, Accessibility, UX, Responsive UI Design</li>
                <li><strong>Programming Languages: </strong>TypeScript, JavaScript</li>
                <li><strong>Backend: </strong>Node.js, Express.js, REST APIs, MongoDB, MySQL</li>
                <li><strong>Security: </strong>JWT Authentication, Role-Based Authorization, API Rate Limiting, Helmet</li>
                <li><strong>Testing: </strong>Unit Testing (Jest, React Testing Library)</li>
                <li><strong>Tools: </strong>Jira, Git, GitHub, Docker, Monday</li>
                <li><strong>Cloud & Deployment: </strong>Cloudflare, Vercel, Render, Netlify, Heroku</li>
                <li><strong>Styling: </strong>CSS3, Material UI, Tailwind CSS, Sass, Bootstrap, CSS Modules</li>
                <li><strong>AI Tools: </strong>GitHub Copilot, Codex, ChatGPT and Claude</li>
                <li><strong>CMS: </strong>WordPress, Shopify</li>
                <li><strong>Third-Party Services & Libraries: </strong>Braintree, Mailchimp, Nodemailer, DeepL API, i18next, Sharp</li>
            </ul>
        </section>
    );
};

export default Skills;
