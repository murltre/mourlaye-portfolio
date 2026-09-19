import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import {
  SiDatabricks,
  SiApachespark,
  SiPython,
} from 'react-icons/si';

const projects = [
  {
    title: 'United States Emissions Breakdown',
    tag: 'Data Engineering + Analytics',
    description:
      'Built a Databricks workflow to clean, standardize, transform, and analyze U.S. greenhouse-gas emissions data for downstream analytics and dashboards.',
    tools: ['Databricks', 'PySpark', 'SQL', 'Python'],
    github: 'https://github.com/murltre/US-County-Emissions-Dashboard-Built-with-Databricks-PySpark',
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
    title: 'Relational Database Design',
    tag: 'Data Modeling',
    description:
      'Designed a normalized relational database for a multi-location coffee business, connecting operational data across staff, outlets, sales, customers, and products.',
    tools: ['SQL', 'Data Modeling', 'Normalization', 'Relational DB'],
    github: 'https://github.com/murltre/coffee-shop-database-design',
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
  { label: 'Languages', items: ['SQL', 'Python', 'R'] },
  { label: 'Data Engineering', items: ['PySpark', 'Spark', 'Hadoop', 'Hive', 'ETL'] },
  { label: 'Platforms & Databases', items: ['Databricks', 'MySQL', 'MongoDB', 'SQLite'] },
  { label: 'Analytics', items: ['Power BI', 'Tableau', 'Excel', 'Pandas', 'NumPy'] },
];

function App() {
  return (
    <div className="site-shell">
      <nav className="nav container">
        <a className="brand" href="#top">MT<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main id="top">
        <section className="hero container">
          <div className="eyebrow">MOUR LAYE TRAORE</div>
          <h2>Data Engineer | Data Analytics
          </h2>
            <p className="hero-subtitle">
              Data modeling, ETL, and ML-ready pipelines.
              PostgreSQL · PySpark · Databricks · Power BI 
            </p>
          <p className="hero-copy">
            I turn raw data into reliable pipelines, useful analytics, and clear business insights — with SQL, Python, Spark, and Databricks.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">View my work</a>
            <a className="button secondary" href="#contact">Get in touch</a>
          </div>
        </section>

        <section id="about" className="section container split-section">
          <div className="section-kicker">01 / ABOUT</div>
          <div>
            <h2>From raw data to something useful.</h2>
            <p>
              I’m a data-focused professional with a master’s in Business Analytics & AI from UT Dallas. My work sits at the intersection of data engineering and analytics: building pipelines, working with databases, transforming messy data, and turning results into decisions people can actually use.
            </p>
            <p>
              Right now, I’m focused on growing deeper as a Data Engineer and building portfolio projects that demonstrate practical, end-to-end data work.
            </p>
          </div>
        </section>

        <section id="skills" className="section container">
          <div className="section-kicker">02 / TOOLKIT</div>
          <div className="section-heading">
            <h2>What I work with.</h2>
            <p>Technical tools I use across engineering, analytics, and data projects.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.label}>
                <h3>{group.label}</h3>
                <div className="pill-row">
                  {group.items.map((item) => <span className="pill" key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section container">
          <div className="section-kicker">03 / SELECTED WORK</div>
          <div className="section-heading">
            <h2>Projects that show how I think.</h2>
            <p>More than dashboards — the goal is to show the engineering underneath the result.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-tag">{project.tag}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="pill-row">
                  {
                    project.tools.map((tool) => {
                      const Icon = toolIcons[tool];
                      return (
                        <span className="pill muted" key={tool}>
                          {Icon && (<Icon 
                            className="tool-icon"
                            style={{color: toolColors[tool]}} />)}
                          {tool}
                        </span>
                      );
                    })
                  }
                </div>
                <a className="project-link" href={project.github}
                target ="_blank"
                rel="noreferrer">Project details <span>→</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section container now-section">
          <div className="section-kicker">04 / CURRENTLY</div>
          <div className="now-box">
            <div>
              <h2>Building toward Data Engineering.</h2>
              <p>Deepening my work with cloud data platforms, ETL pipelines, Spark, SQL, and production-minded data workflows.</p>
            </div>
            <div className="now-list">
              <span>Databricks</span>
              <span>PySpark</span>
              <span>SQL</span>
              <span>Cloud</span>
              <span>Data Pipelines</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section container contact-section">
          <div className="section-kicker">05 / CONTACT</div>
          <div className="contact-grid">
            <div>
              <h2>Let’s build something with data.</h2>
              <p>
                I’m interested in Data Engineer, Analytics Engineer, and data-focused roles where I can work on real pipelines, databases, and analytics problems.
              </p>
            </div>
            <div className="contact-links">
              <a href="mailto:mourlayetraore120@gmail.com">Email <span>↗</span></a>
              <a href="https://www.linkedin.com/in/mourlaye120traore/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
              <a href="https://github.com/murltre" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} Mourlaye Traore</span>
        <span></span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
