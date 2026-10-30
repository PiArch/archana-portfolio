
import { useState, useEffect } from "react";
import "./App.css";

const projects = [
  {
    title: "Emotion Recognition from Customer Reviews",
    category: "Analytics",
    subtitle: "Understanding customer sentiment through NLP",
    description:
      "A machine learning project that analyses customer reviews and identifies emotional patterns.",
    details:
      "Developed a text classification model using Natural Language Processing and BiLSTM to identify emotions expressed in customer reviews. The project reported over 95% accuracy.",
    tools: ["Python", "NLP", "BiLSTM", "Machine Learning"],
  },
  {
    title: "Retail Sales Dashboard",
    category: "Analytics",
    subtitle: "Turning data into business insights",
    description:
      "A data visualisation project designed to make retail sales performance easier to understand.",
    details:
      "Created a dashboard concept to organise retail sales information and present important business metrics, sales trends and product performance.",
    tools: ["Data Analytics", "Excel", "Visualisation"],
  },
  {
    title: "European Travel Organization",
    category: "Analytics",
    subtitle: "Relational Database Design & SQL Analysis",
    description:
      "A relational database project designed to manage travel operations, bookings, payments and resource allocation.",
    details:
      "Designed and built a relational database in Oracle SQL Plus with 9 linked tables covering countries, customers, tour packages, hotels, flights, tour guides, bookings and payments. Modelled one-to-many and many-to-many relationships using foreign keys and junction tables. Executed multi-table joins, filtering and aggregation queries to analyse booking trends, payment status and package performance. Extracted insights including revenue by package, booking confirmation rates and guide and hotel allocation across tour packages.",
    tools: [
      "Oracle SQL Plus",
      "SQL",
      "Relational Database Design",
      "Joins",
      "Data Analysis",
    ],
  },
  {
    title: "Loan Analytics Dashboard",
    category: "Analytics",
    subtitle: "Exploring lending trends through Power BI",
    description:
      "An interactive dashboard project analysing loan approvals, customer segments and lending behaviour.",
    details:
      "Sourced raw loan data from Kaggle and worked through the complete data lifecycle, from data collection to cleaning, transformation and reporting. Assessed data accuracy, transformed datasets using Power Query and developed KPI dashboards to uncover loan approval and customer trends. Analysed patterns across customer segments and loan types to identify trends in approvals, risk and lending behaviour.",
    tools: [
      "Power BI",
      "Power Query",
      "Kaggle",
      "Data Cleaning",
      "Data Visualisation",
    ],
  },
];

const skills = [
  "Python",
  "SQL",
  "Data Analytics",
  "Power BI",
  "Microsoft Excel",
  "Stakeholder Communication",
  "Business Development",
  "Business Analysis",
  "Problem Solving",
  "Agile Fundamentals",
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".section-spacing, .experience-item, .project-card, .education-card, .achievement-card, .skill-list span, .about-highlights div"
    );

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      !("IntersectionObserver" in window) ||
      prefersReducedMotion
    ) {
      return;
    }

    elements.forEach((element) => {
      element.classList.add("reveal-on-scroll");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo">
          archana<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-contact">
          Let's connect ↗
        </a>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero section-container" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              EXPLORING OPPORTUNITIES & IDEAS
            </div>

            <p className="eyebrow">HELLO, I'M ARCHANA</p>

            <h1>
              Exploring the space
              <br />
              between <span>technology,</span>
              <br />
              business & ideas.
            </h1>

            <p className="hero-description">
              Computer Science graduate exploring the intersection of
              technology, analytics and business. I enjoy understanding
              problems, connecting ideas and discovering how technology
              can create meaningful business outcomes.
            </p>

            <div className="data-mantra">
              <span>MY PERSPECTIVE</span>
              <p>
                The world is driven by <em>data.</em>
                <br />
                I'm driven by the possibilities within it.
              </p>
            </div>

            <div className="social-links">
              <a
                href="/Archana_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume ↗
              </a>

              <a href="mailto:piarchana2k4@gmail.com">
                Email ↗
              </a>

              <a
                href="https://www.linkedin.com/in/archanapi/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <span>Bengaluru, India</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <img
                src="/archana-portfolio.jpeg"
                alt="Archana's professional portrait"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="portrait-placeholder">
                <span>AP</span>
                <p>YOUR PROFESSIONAL PHOTO</p>
              </div>
            </div>

            <div className="portrait-caption">
              Curious mind. Practical thinking.
            </div>

            <div className="floating-card card-one">
              <span>01</span> Technology
            </div>

            <div className="floating-card card-two">
              <span>02</span> Business & Analytics
            </div>
          </div>

          <div className="hero-footer-label">PORTFOLIO / 2026</div>
        </section>

        {/* INTEREST STRIP */}
        <section className="interest-strip">
          <div className="section-container interest-content">
            <span>MY INTERESTS</span>
            <p>
              Data Science <b>✳</b> Technology <b>✳</b> Business Analytics{" "}
              <b>✳</b> Problem Solving <b>✳</b> Continuous Learning
            </p>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          className="about section-container section-spacing"
          id="about"
        >
          <div className="section-label">
            <span>01 / ABOUT ME</span>
            <span>GET TO KNOW ME</span>
          </div>

          <div className="about-grid">
            <h2>
              I like understanding
              <br />
              how things <em>work.</em>
            </h2>

            <div className="about-text">
              <p>
                My journey began with Computer Science, where I developed
                an interest in understanding how technology works and how
                it can solve real-world problems.
              </p>

              <p>
                As I explored different areas, I became particularly
                curious about data — how it can reveal patterns, uncover
                insights and help make better decisions. I enjoy looking
                beyond numbers to understand what they actually tell us.
              </p>

              <p>
                Over time, this curiosity also led me towards the business
                side of things: understanding customer needs, identifying
                opportunities and seeing how people, processes and
                technology work together.
              </p>

              <p>
                Today, I'm exploring the intersection of technology, data
                and business, with a keen interest in using analytical
                thinking to understand challenges and find meaningful
                solutions.
              </p>

              <div className="about-highlights">
                <div>
                  <strong>01</strong>
                  <span>Technology & Computing</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Data & Analytical Thinking</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Business & Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section
          className="experience-section section-spacing"
          id="experience"
        >
          <div className="section-container">
            <div className="section-label">
              <span>02 / EXPERIENCE</span>
              <span>LEARNING BY DOING</span>
            </div>

            <h2 className="section-heading">
              Where I'm <em>growing.</em>
            </h2>

            <div className="experience-item">
              <div className="experience-date">OCT 2026 — PRESENT</div>

              <div className="experience-details">
                <p className="eyebrow">CURRENT INTERNSHIP</p>
                <h3>B2B Sales & Business Development Intern</h3>
                <h4>Chara Technologies · Bengaluru, India</h4>

                <p>
                  Exploring how businesses connect, collaborate and create
                  value. Learning to understand customer requirements,
                  identify opportunities and coordinate across teams to
                  support the customer journey.
                </p>

                <div className="tags">
                  <span>B2B Sales</span>
                  <span>Business Development</span>
                  <span>Customer Engagement</span>
                  <span>Coordination</span>
                </div>
              </div>

              <span className="experience-number">01</span>
            </div>

            <div className="experience-item">
              <div className="experience-date">MAY — JUN 2025</div>

              <div className="experience-details">
                <p className="eyebrow">VIRTUAL EXPERIENCE</p>
                <h3>Data Analytics Intern</h3>
                <h4>Tata Micro Innovations</h4>

                <p>
                  Explored industrial telemetry data and data visualisation
                  through a virtual data analytics internship.
                </p>

                <div className="tags">
                  <span>Data Analytics</span>
                  <span>Tableau</span>
                  <span>Industrial Data</span>
                </div>
              </div>

              <span className="experience-number">02</span>
            </div>

            <div className="experience-item">
              <div className="experience-date">JUN — JUL 2025</div>

              <div className="experience-details">
                <p className="eyebrow">VIRTUAL EXPERIENCE</p>
                <h3>Data Analytics & Forensic Analytics</h3>
                <h4>Deloitte</h4>

                <p>
                  Explored data analytics concepts, forensic analytics
                  and responsible handling of HR-related data.
                </p>

                <div className="tags">
                  <span>Analytics</span>
                  <span>Forensic Analytics</span>
                  <span>Data Ethics</span>
                </div>
              </div>

              <span className="experience-number">03</span>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          className="projects-section section-container section-spacing"
          id="projects"
        >
          <div className="section-label">
            <span>03 / SELECTED WORK</span>
            <span>IDEAS INTO PROJECTS</span>
          </div>

          <div className="projects-heading">
            <h2 className="section-heading">
              Things I've <em>explored.</em>
            </h2>

            <p>
              A collection of academic, technical and business-oriented
              projects.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-art art-${index % 4}`}>
                  <span className="art-index">
                    PROJECT / 0{index + 1}
                  </span>

                  <span className="art-symbol">
                    {project.category === "Technology"
                      ? "⌘"
                      : project.category === "Analytics"
                      ? "↗"
                      : "◈"}
                  </span>

                  <span className="art-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-info">
                  <p className="project-subtitle">
                    {project.subtitle}
                  </p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <button
                    className="project-button"
                    onClick={() => setSelectedProject(project)}
                  >
                    View project details ↗
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="skills-section section-spacing" id="skills">
          <div className="section-container">
            <div className="section-label">
              <span>04 / SKILLS & INTERESTS</span>
              <span>WHAT I BRING</span>
            </div>

            <div className="skills-grid">
              <div>
                <h2 className="section-heading">
                  A mix of <em>perspectives.</em>
                </h2>

                <p className="skills-description">
                  I am building a skill set that brings together technical
                  understanding, analytical thinking and the ability to
                  work with people.
                </p>
              </div>

              <div className="skill-list">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section
          className="education-section section-container section-spacing"
          id="education"
        >
          <div className="section-label">
            <span>05 / EDUCATION</span>
            <span>MY ACADEMIC JOURNEY</span>
          </div>

          <div className="education-card">
            <div>
              <p className="eyebrow">2022 — 2026</p>
              <h3>Bachelor of Technology (B.Tech)</h3>
              <h4>Computer Science & Engineering</h4>
              <p>Vimal Jyothi Engineering College · Kerala</p>
            </div>

            <div className="cgpa">
              <strong>7.96</strong>
              <span>CGPA</span>
            </div>
          </div>

          <div className="education-card">
            <div>
              <p className="eyebrow">2021 — 2022</p>
              <h3>Class XII (12th)</h3>
              <h4>CBSE</h4>
              <p>Kendriya Vidyalaya NSG Manesar, Gurgaon</p>
            </div>

            <div className="cgpa">
              <strong>79.6%</strong>
              <span>Percentage</span>
            </div>
          </div>

          <div className="education-card">
            <div>
              <p className="eyebrow">2019 — 2020</p>
              <h3>Class X (10th)</h3>
              <h4>CBSE</h4>
              <p>Kendriya Vidyalaya NSG Manesar, Gurgaon</p>
            </div>

            <div className="cgpa">
              <strong>91.4%</strong>
              <span>Percentage</span>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS SECTION */}
        <section className="achievement-section section-spacing">
          <div className="section-container">
            <div className="section-label">
              <span>06 / HIGHLIGHTS</span>
              <span>BEYOND THE CLASSROOM</span>
            </div>

            <div className="achievement-grid">
              <div className="achievement-card">
                <span className="achievement-icon">✳</span>
                <p>HACKATHON</p>
                <h3>SAP National Hackfest</h3>
                <span>Finalist · Top 100 · Team Lead</span>
              </div>

              <div className="achievement-card">
                <span className="achievement-icon">✳</span>
                <p>PUBLIC SPEAKING</p>
                <h3>Public Speaker</h3>
                <span>
                  Communication · Audience Engagement · Confidence
                </span>
              </div>

              <div className="achievement-card">
                <span className="achievement-icon">✳</span>
                <p>LEADERSHIP</p>
                <h3>Project Team Leadership</h3>
                <span>Led academic mini and final projects</span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section section-spacing" id="contact">
          <div className="section-container contact-content">
            <p className="eyebrow">
              HAVE AN IDEA OR AN OPPORTUNITY?
            </p>

            <h2>
              Let's start a
              <br />
              <em>conversation.</em>
            </h2>

            <p className="contact-description">
              I'm always interested in meeting people, exchanging ideas
              and exploring opportunities to learn and grow.
            </p>

            <a
              className="primary-button"
              href="mailto:piarchana2k4@gmail.com"
            >
              Say hello
            </a>

            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/archanapi/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:piarchana2k4@gmail.com">
                Email ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="section-container footer-content">
          <a href="#home" className="logo">
            archana<span>.</span>
          </a>

          <p>Designed with curiosity · © 2026 Archana</p>

          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              ×
            </button>

            <p className="eyebrow">
              {selectedProject.category}
            </p>

            <h2>{selectedProject.title}</h2>
            <h4>{selectedProject.subtitle}</h4>

            <p className="modal-description">
              {selectedProject.details}
            </p>

            <div className="tags">
              {selectedProject.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
