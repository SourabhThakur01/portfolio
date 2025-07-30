import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Landing.css";

const projects = [
  {
    title: "🌐 Portfolio Website",
    description: "A clean personal portfolio built using React and CSS with full responsiveness.",
    stack: "React • CSS • GitHub",
    link: "https://github.com/SourabhThakur01/protfolio-1",
  },
  {
    title: "✈️ Flight Booking System",
    description: "Desktop app built with C# and XML to simulate airline booking and management.",
    stack: "C# • XML • Windows Forms",
    link: "https://github.com/SourabhThakur01/FlightBooking",
  },
  {
    title: "☁️ Weather App",
    description: "Simple weather app using JavaScript that shows live weather using OpenWeather API.",
    stack: "HTML • CSS • JS • API",
    link: "#",
  },
  {
    title: "🍱 TiffIndia",
    description: "Tiffin delivery app UI built in Figma and React (work in progress).",
    stack: "React • Figma • API",
    link: "https://www.figma.com/file/iD1kp2ie1uulqI6kIZwKNu/Tiff-India",
  },
  {
    title: "🎮 Gamer Hub",
    description: "Figma design for social gaming platform with chat and profile features.",
    stack: "Figma • UI/UX",
    link: "https://www.figma.com/file/2mbRF3ZKdFAZSdCP7VBuPs/Gamers-Hut",
  },
  {
    title: "💼 Portfolio 2",
    description: "An advanced and animated portfolio you're currently browsing. Built with React and CSS.",
    stack: "React • CSS • Responsive Design",
    link: "https://github.com/SourabhThakur01/protfolio-2",
  },
];

const Landing = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerView = 2;
  const maxIndex = Math.max(0, projects.length - projectsPerView);
  const [isManual, setIsManual] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isManual) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isManual, maxIndex]);

  const handleNext = () => {
    clearInterval(intervalRef.current);
    setIsManual(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    clearInterval(intervalRef.current);
    setIsManual(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const trackTranslate = {
    transform: `translateX(-${(currentIndex * 100) / projectsPerView}%)`,
  };

  return (
    <>
      {/* === NAVIGATION BAR === */}
      <nav className="navbar">
        <div className="nav-left">Sourabh.dev</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#goals">Goals</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="page-container">
        <div className="content-wrapper">

          {/* === HERO SECTION === */}
          <section id="home" className="hero fade-section fade-delay-1">
            <div className="hero-left">
              <img src="src/assets/sourabh.jpg" alt="Sourabh" className="hero-image" />
              <div className="hero-name-card">
                <h2 className="first-name">Sourabh</h2>
                <h2 className="last-name">Thakur</h2>
              </div>
            </div>

            <div className="hero-right">
              <h1>
                Hi, I’m <span className="highlight">Junior<br />Web Developer</span>
              </h1>
              <p className="hero-description">
                I’m a passionate junior developer who loves building clean,
                responsive web apps using React. I aim to deliver real-world
                solutions with strong logic and creative thinking.
              </p>
              <div className="social-icons">
                <a href="https://github.com/SourabhThakur01" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/sourabh-thakur2530/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="icon" />
                </a>
                <span className="hire-text">Hire me and check my full potential!</span>
              </div>
            </div>
          </section>

          {/* === ABOUT SECTION === */}
          <section id="about" className="section fade-section fade-delay-2">
            <h2>About Me</h2>
            <p>
              I'm a dedicated and enthusiastic junior software developer based in Calgary. After completing
              my diploma in Software Development, I immersed myself in hands-on learning by building projects
              that combine clean UI design with solid back-end functionality.
            </p>
            <p>
              I enjoy solving real-world problems with code and have experience in HTML, CSS, JavaScript,
              React, Node.js, and MySQL. I'm especially passionate about frontend development and responsive
              design, ensuring a seamless experience across devices.
            </p>
            <p>
              Apart from technical skills, I bring strong communication, team collaboration, and leadership
              experience from my current role as a supervisor at Harvey’s. I believe in continuous learning,
              attention to detail, and always staying curious about new technologies.
            </p>
            <p>
              When I’m not coding, I enjoy exploring tech trends, reading about startups, and watching programming tutorials.
              I’m currently focused on improving my React and Node.js skills, with the long-term goal of becoming a full-stack developer.
            </p>
          </section>

          {/* === GOALS + SKILLS SECTION === */}
          <section className="section dual-section fade-section fade-delay-3">
            <div id="goals" className="goals-box">
              <h2>My Software Goals</h2>
              <ul className="goals-list">
                <li>✅ Build accessible, fast, and user-focused applications</li>
                <li>📚 Keep improving my skills through real-world projects</li>
                <li>🌐 Contribute to open-source projects</li>
                <li>🧑‍💻 Become a Full Stack Developer</li>
              </ul>
            </div>

            <div id="skills" className="skills-box">
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

          {/* === PROJECTS SECTION === */}
          <section id="projects" className="section projects-section fade-section fade-delay-4">
            <h2>Projects</h2>
            <div className="project-slider-wrapper">
              <button className="side-button left" onClick={handlePrev}>‹</button>
              <div className="projects-slider">
                <div className="projects-track" style={trackTranslate}>
                  {projects.map((proj, index) => (
                    <div key={index} className="project-slide">
                      <div className="project-glass">
                        <h3>{proj.title}</h3>
                        <p>{proj.description}</p>
                        <p className="tech-stack">{proj.stack}</p>
                        <a href={proj.link} target="_blank" rel="noopener noreferrer">View Code</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="side-button right" onClick={handleNext}>›</button>
            </div>
          </section>
        </div>
      </div>

        <div className="contact-footer-wrapper">
          <div className="inner-container">
          {/* === CONTACT SECTION === */}
          <section id="contact" className="contact-section">
            <div className="contact-left">
              <h2>Let's Connect</h2>
              <p>
                Whether it's a project, opportunity, or just a chat —
                I'm always open to connect!
              </p>
              <div className="contact-icons">
                <a href="https://github.com/SourabhThakur01" target="_blank" rel="noopener noreferrer">🐱 GitHub</a>
                <a href="https://www.linkedin.com/in/sourabh-thakur2530/" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">📷 Instagram</a>
              </div>
            </div>

            <form
              className="contact-right"
              action="https://formspree.io/f/mnqeovpr"
              method="POST"
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows="5" required />
              <button type="submit">Send Message</button>
            </form>
          </section>

          {/* === FOOTER === */}
          <footer id="footer" className="footer fade-section fade-delay-5">
            <p>&copy; {new Date().getFullYear()} Sourabh Thakur. All rights reserved.</p>
          </footer>
          </div>
        </div>
    </>
  );
};

export default Landing;
