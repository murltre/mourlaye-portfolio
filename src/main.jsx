import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { SiDatabricks, SiApachespark, SiPython } from 'react-icons/si';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Technical Skills' },
  { id: 'work', label: 'Featured Projects' },
  { id: 'credentials', label: 'Credentials / Certifications' },
  { id: 'in-process', label: 'In Progress' },
  { id: 'contact', label: 'Contact Me' },
];

const projects = [
  {
    title: 'United States Emissions Breakdown',
    tag: 'Data Engineering + Analytics',
    description:
      'Built a Databricks workflow to clean, standardize, transform, and analyze U.S. greenhouse-gas emissions data for downstream analytics and dashboards.',
    tools: ['Databricks', 'PySpark', 'SQL', 'Python'],
    github:
      'https://github.com/murltre/US-County-Emissions-Dashboard-Built-with-Databricks-PySpark',
  },
  {
    title: 'GDP ETL Pipeline',
    tag: 'ETL Pipeline',
    description:
      'Created an ETL workflow that extracts economic data from public sources, transforms monetary values, and loads curated results into reusable CSV and SQLite outputs.',
    tools: ['Python', 'Pandas', 'Web Scraping', 'SQLite'],
    github: 'https://github.com/murltre/country-gdp-pipeline',
  },
  {
    title: 'Coffee Shop Chain — Central Database Design',
    tag: 'Database Design + Data Engineering',
    description:
      'Designed a normalized central database for a coffee shop chain preparing to franchise, consolidating disconnected staff, outlet, sales, customer, and product data and serving defined subsets across multiple database engines.',
    tools: [
      'PostgreSQL',
      'MySQL',
      'IBM Db2',
      'Neon',
      'pgAdmin',
      'SQL',
    ],
    github: 'https://github.com/murltre/coffee-shop-database-design',
  },
  {
  title: 'IBM Data Analyst Capstone — Customer Loyalty & Developer Trends',
  tag: 'Data Analytics + BI',
  description:
    'End-to-end analytics project covering data sourcing, data wrangling, exploratory analysis, and interactive dashboards focused on customer satisfaction drivers and global developer technology trends.',
  tools: [
    'Python',
    'Pandas',
    'NumPy',
    'IBM Cognos Analytics',
    'Looker Studio',
    'APIs',
    'Web Scraping',
  ],
  github:
    'https://github.com/murltre/IBM-Data-Analyst-Capstone-Customer-Loyalty-Developer-Trends-Dashboard-',
},
{
  title: 'Credit Risk Modeling Using XGBoost & Neural Networks',
  tag: 'Machine Learning + Risk Analytics',
  description:
    'Developed and compared XGBoost and Neural Network models to predict customer default probability. The project combined feature engineering, SHAP-based feature selection, AUC evaluation, and threshold analysis to support practical credit-risk strategies.',
  tools: [
    'Python',
    'XGBoost',
    'Neural Networks',
    'SHAP',
    'Pandas',
    'Grid Search',
  ],
  github:
    'https://github.com/murltre/credit-risk-modeling-using-XGBoost-and-neural-networks',
},
{
  title: 'Power BI Sales Analytics & Data Modeling',
  tag: 'Power BI + Data Modeling',
  description:
    'Built a Power BI sales analytics solution using a star schema, data transformations, DAX measures, and interactive visualizations to analyze product, regional, salesperson, and time-based performance.',
  tools: [
    'Power BI',
    'DAX',
    'Power Query',
    'Data Modeling',
    'Star Schema',
  ],
  github:
    'https://github.com/murltre/PowerBI-Sales-Analytics-DataModeling',
},

];

const toolIcons = {
  Databricks: SiDatabricks,
  PySpark: SiApachespark,
  Python: SiPython,
};

const toolColors = {
  Databricks: '#E74C3C',
  PySpark: '#E86A17',
  Python: '#3776AB',
};

const skillGroups = [
  {
    label: 'Data Engineering',
    items: ['PySpark', 'Apache Spark', 'Hadoop', 'Hive', 'ETL / ELT'],
  },
  {
    label: 'Analytics & Automation',
    items: [
      'Power BI',
      'DAX',
      'Power Query',
      'Data Modeling',
      'Pandas',
      'NumPy',
      'Excel VBA & Macro Automation',
      'Python Automation',
      'ETL Process Automation',
    ],
  },
  {
    label: 'Cloud & Data Platforms',
    items: [
      'Azure Databricks',
      'Azure Data Factory',
      'PostgreSQL (Neon)',
      'MySQL',
      'Azure ML Studio',
    ],
  },
  {
    label: 'Languages & Development Tools',
    items: [
      'SQL',
      'Python',
      'R',
      'JavaScript',
      'HTML',
      'CSS',
      'React',
      'Jupyter Notebook',
      'VS Code',
    ],
  },
];

const certifications = [
  {
    title: 'Microsoft Certified: Azure Data Scientist Associate',
    detail: 'DP-100',
    type: 'Certification',
  },
  {
    title: 'Microsoft Power BI Data Analyst Specialization',
    detail: 'Microsoft · 8 courses',
    type: 'Specialization',
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    detail: 'Certificate of Completion',
    type: 'Certificate',
  },
];

const education = [
  {
    title: 'M.S. in Business Analytics & A.I.',
    school: 'The University of Texas at Dallas',
    dates: 'Aug 2023 – May 2025',
    location: 'Richardson, TX',
    detail:
      'Concentration: Data Science · Certificates: Business Intelligence & Data Mining, Applied Machine Learning',
  },
  {
    title: 'B.S. in Petroleum Engineering',
    school: 'Texas Tech University',
    dates: 'Jun 2016 – May 2020',
    location: 'Lubbock, TX',
    detail: 'Minor: Mathematics',
  },
];


function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (!visible.length) return;

        const current = visible.sort(
          (a, b) =>
            Math.abs(a.boundingClientRect.top - 140) -
            Math.abs(b.boundingClientRect.top - 140)
        )[0];

        setActiveSection(current.target.id);
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const renderNavLink = (item, location) => (
    <a
      key={item.id}
      href={`#${item.id}`}
      className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
      aria-current={activeSection === item.id ? 'page' : undefined}
      onClick={() => setActiveSection(item.id)}
    >
      <span>{item.label}</span>
      {location === 'sidebar' && (
        <span className="nav-indicator" aria-hidden="true">→</span>
      )}
    </a>
  );

  return (
    <div className="site-shell" id="top">
      <header className="topbar">
        <nav className="nav container" aria-label="Primary navigation">
          <div className="nav-links top-nav-links">
            {navItems.map((item) => renderNavLink(item, 'top'))}
          </div>
        </nav>
      </header>

      <div className="portfolio-layout">
        <aside className="profile-sidebar" aria-label="Portfolio profile and section navigation">
          <div className="profile-block">
            <a
              className="profile-photo-link"
              href="#home"
              onClick={() => setActiveSection('home')}
              aria-label="Go to Home"
            >
              <div className="profile-photo-wrap">
                <img
                  className="profile-photo"
                  src="/profile.jpg"
                  alt="Mourlaye Traore"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                    const fallback = event.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = 'grid';
                  }}
                />
                <div className="profile-photo-fallback" aria-hidden="true">MT</div>
              </div>
            </a>

            <a
              className="profile-identity"
              href="#home"
              onClick={() => setActiveSection('home')}
            >
              <div className="profile-name">Mourlaye Traore</div>
              <div className="profile-title">Data Engineer | Data Analytics</div>
                <a> 
                Dallas-Fort-Worth, TX </a>
            </a>
          </div>

          <nav className="sidebar-nav" aria-label="Section navigation">
            {navItems.map((item) => renderNavLink(item, 'sidebar'))}
          </nav>

          <div className="sidebar-progress" aria-label="Page progress">
            {navItems.map((item) => (
              <span
                key={item.id}
                className={`progress-dot ${activeSection === item.id ? 'active' : ''}`}
                title={item.label}
                aria-hidden="true"
              />
            ))}
          </div>

          <div className="sidebar-socials">
            <a
              href="https://www.linkedin.com/in/mourlaye120traore/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://github.com/murltre" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </aside>

        <main className="content-area">
          <section id="home" className="hero section-anchor">
            <div className="eyebrow"></div>
            <h1 className="hero-overview">
              Aspiring Data Engineer | Data Analyst
            </h1>
            
            <p className="hero-copy">
              Data modeling, ETL, and ML-ready pipelines.
              <br />
              PostgreSQL · PySpark · Databricks · Power BI
            </p>
            <p className="hero-copy">
              I turn raw data into reliable pipelines, useful analytics, and clear business insights — with SQL, Python, Spark, and Databricks.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">View my work</a>
              <a className="button secondary" href="#skills">Technical Skills</a>
              <a className="button secondary" href="#credentials">Credentials</a>
              <a className="button secondary" href="#contact">Get in touch</a>
            </div>
          </section>

          <section id="about" className="section about-section section-anchor">
            <div className="section-kicker">01 / ABOUT ME</div>

            <div className="about-content">
              <h2>From Field Engineer to Data Engineering</h2>

              <div className="about-story">
                <p>
                  With about 3 years of professional experience, 
                  I started my career as an Oil & Gas Field Engineer, where I worked with data as part of day-to-day field operations. 
                  That experience led me to pursue a master’s in Business Analytics & AI and move deeper into data work.
                </p>

                <p>
                  Today, my work sits at the intersection of data engineering and analytics—building pipelines, working with databases, 
                  transforming messy data, and turning results into useful insights. As technology continues to evolve,
                  I’m continuously deepening my skills in Data Engineering and ML Engineering through hands-on projects and practical, end-to-end work.
                </p>
              </div>
            </div>
          </section>
          <section id="skills" className="section section-anchor">
            <div className="section-kicker">02 / TECHNICAL SKILLS</div>
            <div className="section-heading">
              <h2>Tools I have experience with</h2>
              <p>Technical tools I use across engineering, analytics, and data projects.</p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.label}>
                  <h3>{group.label}</h3>
                  <div className="pill-row">
                    {group.items.map((item) => (
                      <span className="pill" key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="work" className="section section-anchor">
            <div className="section-kicker">03 / FEATURED PROJECTS</div>
            <div className="section-heading">
              <h2>Projects</h2>
              <p>Learn more about each project by clicking on the link, "Project details".</p>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-number">0{index + 1}</div>
                  <div className="project-tag">{project.tag}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="pill-row">
                    {project.tools.map((tool) => {
                      const Icon = toolIcons[tool];
                      return (
                        <span className="pill muted" key={tool}>
                          {Icon && (
                            <Icon
                              className="tool-icon"
                              style={{ color: toolColors[tool] }}
                              aria-hidden="true"
                            />
                          )}
                          {tool}
                        </span>
                      );
                    })}
                  </div>
                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Project details <span>→</span>
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section id="credentials" className="section section-anchor">
            <div className="section-kicker">04 / CREDENTIALS & CERTIFICATIONS</div>
            <div className="section-heading">
              <h2>Accomplishments</h2>
              <p></p>
            </div>
            <h3>Certifications</h3>

            <div className="credentials-grid">
              {certifications.map((certification) => (
                <article className="credential-card" key={certification.title}>
                  <div className="credential-type">{certification.type}</div>
                  <h3>{certification.title}</h3>
                  <p>{certification.detail}</p>
                </article>
              ))}
            </div>

            <h3>Education</h3>

            <div className="credentials-grid">
              {education.map((degree) => (
                <article className="credential-card" key={degree.title}>
                  <div className="credential-type">{degree.dates}</div>
                  <h3>{degree.title}</h3>
                  <p>{degree.school}</p>
                  <p>{degree.location}</p>
                  <p>{degree.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="in-process" className="section now-section section-anchor">
            <div className="section-kicker">05 / IN PROGRESS</div>

            <div className="now-box">
              <div>
                <h2>Currently Working On</h2>
                <p>
                  Deepening my work with cloud data platforms, ETL pipelines,
                  Spark, SQL, and production-minded data workflows.
                </p>
              </div>

              <div className="now-list">
                <span>Databricks</span>
                <span>PySpark</span>
                <span>SQL</span>
                <span>Cloud</span>
                <span>Data Pipelines</span>
              </div>
            </div>

            <div className="progress-card">
              <div className="progress-header">
                <div>
                  <div className="progress-label">CURRENTLY LEARNING</div>
                  <h3>IBM Data Engineering</h3>
                </div>

                <div className="progress-count">7 / 16</div>
              </div>

              <p>
                Currently completing the IBM Data Engineering program, with 7 of 16
                courses completed.
              </p>

              <div className="progress-track">
                <div className="progress-fill"></div>
              </div>

              <div className="progress-percent">43.75% complete</div>
            </div>
              <div className="process-card">
              <div className="process-label">IN PROGRESS</div>
              <h3>Multi-Format ETL Pipeline</h3>

              <p>
                Building an ETL workflow that ingests files from different sources and
                formats, standardizes their structure, and prepares them for consistent
                downstream processing.
              </p>

              <p className="process-note">
                Exploring automated file ingestion with Python, including pattern-based
                file discovery using <code>glob</code>.
              </p>
            </div>
          </section>
          <section id="contact" className="section contact-section section-anchor">
            <div className="contact-content">
              <div className="section-kicker">06 / CONTACT ME</div>

              <h2>Let's connect.</h2>

              <p className="contact-intro">
                Looking forward to connecting and sharing ideas
              </p>

              <div className="contact-links">

                <a
                  href="https://www.linkedin.com/in/mourlaye120traore/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <span>↗</span>
                </a>

                <a
                  href="https://github.com/murltre"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <span>↗</span>
                </a>
              </div>

              <form 
                className="contact-form"
                action="https://formspree.io/f/myezkywo"
                method="POST"
              >
                <div className="form-row">
                  <input type="text" name="name" placeholder="Your name..." required />
                  <input type="email" name="email" placeholder="Your email..." required />
                </div>

                <input type="text" name="subject" placeholder="Subject..." required />

                <textarea
                  name="message"
                  rows="7"
                  placeholder="Your message..."
                  required
                />

                <button type="submit">Send Message</button>
              </form>
            </div>
          </section>


          <footer className="footer container">
            <span>© {new Date().getFullYear()} Mourlaye Traore</span>
            <span>Data Engineer | Data Analytics</span>
          </footer>
        </main>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
