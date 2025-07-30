import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFileDownload,
  FaBars,
  FaTimes,
} from "react-icons/fa";
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
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleMailTo = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const subject = encodeURIComponent("New message from portfolio");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:thakursourav250@gmail.com?subject=${subject}&body=${body}`;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const trackTranslate = {
    transform: `translateX(-${(currentIndex * 100) / projectsPerView}%)`,
  };


  return (
    <>
      {/* === NAVIGATION BAR === */}
      <nav className="navbar">
        <div className="nav-left">Sourabh</div>
        
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#goals">Goals</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      <div className="page-container">
        <div className="content-wrapper">

          {/* === HERO SECTION === */}
          <section id="home" className="hero fade-section fade-delay-1">
            <div className="hero-left">
              <img src="/public/sourabh.jpg" alt="Sourabh" className="hero-image" />
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
                <a
                  href="/publich_Thakur_01.pdf"
                  download="Sourabh_Thakur_Resume.pdf"
                  title="Download Resume"
                >
                  <FaFileDownload className="icon" />
                </a>
                <span className="hire-text">Hire me and check my full potential!</span>
              </div>

            </div>
          </section>

          {/* === ABOUT SECTION === */}
          <section id="about" className="section fade-section fade-delay-2">
            <h2>About Me</h2>
            <p>
              I’m a passionate and curious junior software developer currently based in Calgary. After completing my diploma in Software Development, I dove straight into building real-world projects that blend clean UI design with solid backend logic.
            </p>
            <p>
              I love turning ideas into responsive, user-friendly web applications. My experience includes working with HTML, CSS, JavaScript, React, Node.js, and MySQL. I'm especially drawn to frontend development — crafting smooth, accessible interfaces that work beautifully across devices.
            </p>
            <p>
              Outside of tech, I’ve gained strong teamwork and leadership experience as a supervisor at Harvey’s. That role taught me the value of clear communication, problem-solving on the go, and staying organized under pressure — all of which I now bring into my tech journey.
            </p>
            <p>
              In my free time, you'll usually find me exploring new tech trends, watching dev tutorials, or working on my next side project. I’m currently focused on sharpening my React and Node.js skills, and my long-term goal is to grow into a confident full-stack developer.
            </p>
          </section>

          {/* === GOALS + SKILLS SECTION === */}
          <section className="section dual-section fade-section fade-delay-3">
            <div id="goals" className="goals-box">
              <h2>My Software Goals</h2>
              <ul className="goals-list">
                <li>✅ Build clean, fast, and user-centered applications for real-world users</li>
                <li>📚 Keep learning and growing by working on challenging, hands-on projects</li>
                <li>🌐 Contribute to open-source communities and collaborate with other developers</li>
                <li>🧑‍💻 Become a confident Full Stack Developer with strong frontend & backend skills</li>
              </ul>
            </div>

            <div id="skills" className="skills-box">
              <h2>Skills</h2>
              <div className="skills-grid">
                {/* Programming Languages */}
                <span>Python</span>
                <span>JavaScript</span>
                <span>C#</span>

                {/* Web Development */}
                <span>HTML</span>
                <span>CSS</span>
                <span>Tailwind</span>
                <span>React</span>
                <span>Node.js</span>

                {/* Databases */}
                <span>MySQL</span>
                <span>MongoDB</span>
                <span>Oracle</span>
                <span>XML</span>
                <span>Basic SQL</span>

                {/* Tools & Platforms */}
                <span>GitHub</span>
                <span>Visual Studio</span>
                <span>Figma</span>

                {/* Concepts */}
                <span>Responsive Design</span>
                <span>UI/UX Basics</span>
                <span>Agile</span>
                <span>Scrum</span>

                {/* Soft Skills */}
                <span>Teamwork</span>
                <span>Communication</span>
                <span>Time Management</span>
                <span>Problem Solving</span>
                <span>Adaptability</span>
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
                <a href="https://github.com/SourabhThakur01" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/sourabh-thakur2530/" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaInstagram />
                </a>
              </div>
            </div>

            <form className="contact-right" onSubmit={handleMailTo}>

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
