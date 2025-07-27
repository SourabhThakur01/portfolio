import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      {/* === HERO SECTION === */}
      <section className="hero fade-section fade-delay-1">
        <div className="hero-left">
          <img src="src/assets/sourabh.png" alt="Sourabh" className="hero-image" />
          <div className="hero-name-card">
            <h2 className="first-name">Sourabh</h2>
            <h2 className="last-name">Thakur</h2>
            <p className="job-title"></p>
          </div>
        </div>

        <div className="hero-right">
          <h1>
            Hi, I’m <span className="highlight">Web<br /> Developer</span>
          </h1>
          <h3 className="job-title"> </h3>
          <p className="hero-description">
            I’m a passionate junior developer who loves building clean,
            responsive web apps using React. I aim to deliver real-world
            solutions with strong logic and creative thinking.
          </p>
          <button className="hire-button" onClick={() => navigate("/home")}>
            🚀 Hire Me → Check My Full Potential
          </button>
        </div>
      </section>

      {/* === ABOUT SECTION === */}
      <section className="section fade-section fade-delay-2">
        <h2>About Me</h2>
        <p>
          I'm a software developer based in Calgary with a diploma in Software Development.
          I love turning ideas into functional and elegant interfaces using JavaScript, React, and CSS.
        </p>
      </section>

      {/* === GOALS + SKILLS SECTION (STAGGERED) === */}
      <section className="section dual-section fade-section fade-delay-3">
        {/* Software Goals */}
        <div className="goals-box">
          <h2>My Software Goals</h2>
          <ul className="goals-list">
            <li>✅ Build accessible, fast, and user-focused applications</li>
            <li>📚 Keep improving my skills through real-world projects</li>
            <li>🌐 Contribute to open-source projects</li>
            <li>🧑‍💻 Become a Full Stack Developer</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="skills-box">
          <h2>Skills</h2>
          <div className="skills-grid">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Tailwind</span>
            <span>Git</span>
            <span>MySQL</span>
            <span>Node.js</span>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="footer fade-section fade-delay-4">
        <p>&copy; {new Date().getFullYear()} Sourabh Thakur. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
