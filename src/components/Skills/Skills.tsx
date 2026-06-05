import styles from "./skills.module.css";

const Skills = () => {
    return (
        <section id="skills" className={styles.skills}>
            <h2>Technical Skills</h2>
            <ul>
                <li>
                    React.js, Next.js and Redux
                </li>
                <br></br>
                <li>TypeScript</li>
                <br></br>
                <li>
                    Material UI, Tailwind CSS, Bootstrap, SASS and CSS Modules for styling.
                </li>
                <br></br>
                <li>HTML and CSS</li>
                <br></br>
                <li>
                    Node.js and Express.js for building APIs.
                </li>
                <br></br>
                <li>Agile/Scrum, Jira, Monday, Git</li>
                <br></br>
                <li>MongoDB, MySQL and Sanity</li>
                <br></br>
                <li>UI/UX Design, Responsive Design</li>
                <br></br>
                <li>AI tools - Codex, GitHub Copilot, ChatGPT and Claude</li>
            </ul>
        </section>
    );
};

export default Skills;
