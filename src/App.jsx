import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span>CS Portfolio</span>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
            <a href="#home" onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a>
            <a href="#about" onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
            <a href="#skills" onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
            <a href="#projects" onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
            <a href="#experience" onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          </div>
          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-logo">
            <div className="logo-container">
              <div className="logo-icon">
                <svg viewBox="0 0 100 100" className="logo-svg">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#fbbf24" strokeWidth="3"/>
                  <path d="M30 40 L50 20 L70 40 L60 40 L60 80 L40 80 L40 40 Z" fill="#fbbf24"/>
                  <circle cx="50" cy="35" r="8" fill="#2563eb"/>
                  <rect x="35" y="60" width="30" height="4" fill="#2563eb" rx="2"/>
                  <rect x="40" y="70" width="20" height="4" fill="#2563eb" rx="2"/>
                </svg>
              </div>
              <div className="logo-text">
                <span className="logo-name">John </span>
                <span className="logo-title">Software Engineer</span>
              </div>
            </div>
      </div>
          <p className="hero-description">
            Passionate about software development, algorithms, and creating innovative solutions. 
            Ready to contribute to meaningful projects and grow in the tech industry.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Get In Touch
        </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a recent Computer Science graduate with a strong foundation in software development, 
                data structures, and algorithms. My journey in tech started with curiosity about how 
                computers work and has evolved into a passion for building efficient, scalable solutions.
              </p>
              <p>
                During my studies, I've worked on various projects ranging from web applications to 
                machine learning models. I enjoy tackling complex problems and learning new technologies 
                to stay current with industry trends.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>5+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>10+</h3>
                  <p>Programming Languages</p>
                </div>
                <div className="stat">
                  <h3>3.4</h3>
                  <p>GPA</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="profile-placeholder">
                <span>👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-list">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">C</span>
                <span className="skill-tag">C#</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Swift</span>
                <span className="skill-tag">Rust</span>
                <span className="skill-tag">GO</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <div className="skill-list">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Vue.js</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">ThreeJS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend Development</h3>
              <div className="skill-list">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">MongoDB</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Technologies</h3>
              <div className="skill-list">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">ChatGPT</span>
                <span className="skill-tag">Cursor</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">Tensorflow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">🌐</div>
              </div>
              <div className="project-content">
                <h3>Custom Database</h3>
                <p>
                  A custom database written from scratch in Python. Features include efficient data storage, 
                  query optimization, and transaction management with support for complex database operations.
                </p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>Database Systems</span>
                  <span>Data Structures</span>
                  <span>Algorithms</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/Jared-Hall/CS-551-Javawokeez" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">🤖</div>
              </div>
              <div className="project-content">
                <h3>Thyroid Cancer Detection Model</h3>
                <p>
                  Machine Learning model for detection of thyroid cancer using advanced classification techniques. 
                  Built with Python and machine learning libraries to achieve high accuracy in medical diagnosis.
                </p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>Machine Learning</span>
                  <span>TensorFlow</span>
                  <span>Data Science</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/jodonnell221/cs423" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">📱</div>
              </div>
              <div className="project-content">
                <h3>AI-Powered Meal Plan Dieting Web App</h3>
                <p>
                  An AI-powered meal plan dieting web application that generates personalized meal plans 
                  based on user preferences and dietary requirements. Features intelligent meal recommendations 
                  and nutritional tracking.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>AI/ML</span>
                  <span>Web Development</span>
                  <span>Nutrition API</span>
                </div>
                <div className="project-links">
                  <a href="https://grubify.ai" target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience & Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Software Development Intern</h3>
                <h4>Grubify | 2025</h4>
                <p>
                  Built front end and connected with ChatGPT API to create an AI-powered meal planning application. 
                  Developed responsive user interfaces and integrated AI functionality for personalized meal recommendations.
                </p>
                <ul>
                  <li>Built responsive user interfaces with React components</li>
                  <li>Integrated ChatGPT API for AI-powered features</li>
                  <li>Developed front-end architecture for meal planning application</li>
                </ul>
              </div>
              <div className="timeline-date">2025</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Bachelor of Science in Computer Science</h3>
                <h4>University of Oregon | 2020-2024</h4>
                <p>
                  Focus in AI and Machine Learning
                  Relevant coursework included machine learning, database systems, and software architecture.
                </p>
                
                
              </div>
              <div className="timeline-date">2020-2024</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Freelance Web Developer</h3>
                <h4>Self-Employed | 2020-2026</h4>
                <p>
                  Created custom websites and web applications for small businesses. Specialized in 
                  responsive design and modern web technologies to deliver high-quality user experiences.
                </p>
                <ul>
                  <li>Maintained 100% client satisfaction rate</li>
                </ul>
              </div>
              <div className="timeline-date">2020-2026</div>
            </div>
          </div>
      </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <p>JohnOD221@proton.me</p>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📱</span>
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (415) 747-5713</p>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h4>Location</h4>
                    <p>San Francisco, CA</p>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/john-o-donnell-810369297" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                <a href="https://github.com/jodonnell221" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 John O'Donnell. All rights reserved.</p>
          <p>Built with React and ❤️</p>
        </div>
      </footer>
    </div>
  )
}

export default App
