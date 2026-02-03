import './Pages.css';
import './About.css';
import PillNav from '../components/PillNav';
import { useTheme } from '../context/ThemeContext';
import { useEffect, useRef } from 'react';

function About() {
  const { theme } = useTheme();
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.about-card');
    cards.forEach(card => observerRef.current.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <PillNav />
      <div className="about-page">
        <div className="about-grid">
          {/* Introduction Section */}
          <div className="about-card intro-card">
            <h2 className="card-title">Introduction</h2>
            <div className="card-content">
              <p>A Full Stack Developer based in Ottawa, Montreal and maybe more</p>
              <p className="intro-description">
                I've always had a strong passion for the latest tech. I love
                solving complex problems and trying all the latest tools. Whether it's leetcode challenges, vibe coding random
                ideas, competing in hackathons or any competition i can sneak my way in to, I'm always looking for ways to push my skills further.
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="about-card experience-card">
            <h2 className="card-title">Experience</h2>
            <div className="card-content">
              <div className="experience-item">
                <span className="year-badge">May 2025 – Present </span>
                <h3>Aedo</h3>
                <p>Full Stack Developer - Permanent Full-time</p>
                <p className="description">Everything...</p>
              </div>

              <div className="experience-item">
                <span className="year-badge">2021-2022</span>
                <h3>Pratt & Whitney</h3>
                <p>Data Analyst (Internship)</p>
                <p className="description">Web Development, Data Anaylsis, Power Bi, SQL </p>
              </div>
            </div>
          </div>

          {/* Skills Section - Bento Grid */}
          <div className="about-card skills-card">
            <h2 className="card-title">What I Work With</h2>
            <div className="skills-bento">
              {/* Frontend - Large */}
              <div
                className="skill-box skill-box-large"
                style={{ '--box-color': theme.colors[0] }}
              >
                <div className="skill-box-header">
                  <span className="skill-icon">{'</>'}</span>
                  <h3>Frontend</h3>
                </div>
                <div className="skill-list">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Tailwind</span>
                  <span>Next.js</span>
                  <span>HTML/CSS</span>
                </div>
                <p className="skill-vibe">Where pixels meet purpose</p>
              </div>

              {/* Backend - Large */}
              <div
                className="skill-box skill-box-large"
                style={{ '--box-color': theme.colors[1] }}
              >
                <div className="skill-box-header">
                  <span className="skill-icon">{'{}'}</span>
                  <h3>Backend</h3>
                </div>
                <div className="skill-list">
                  <span>Python</span>
                  <span>Node.js</span>
                  <span>C++</span>
                  <span>C#</span>
                  <span>Flask</span>
                  <span>Java</span>
                  <span>JavaScript</span>
                  <span>REST APIs</span>
                </div>
                <p className="skill-vibe">The engine under the hood</p>
              </div>

              {/* Data & AI - Medium */}
              <div
                className="skill-box skill-box-medium"
                style={{ '--box-color': theme.colors[2] }}
              >
                <div className="skill-box-header">
                  <span className="skill-icon">*</span>
                  <h3>Data & AI</h3>
                </div>
                <div className="skill-list">
                  <span>PostgreSQL</span>
                  <span>Snowflake</span>
                  <span>Neo4j</span>
                  <span>YOLO</span>
                  <span>Pandas/Polars</span>
                  <span>Dagster</span>
                  <span>TensorFlow</span>
                  <span>SQL</span>
                </div>
              </div>

              {/* Cloud & DevOps - Medium */}
              <div
                className="skill-box skill-box-medium"
                style={{ '--box-color': theme.colors[3] }}
              >
                <div className="skill-box-header">
                  <span className="skill-icon">~</span>
                  <h3>Cloud & DevOps</h3>
                </div>
                <div className="skill-list">
                  <span>Azure</span>
                  <span>Docker/Portainer</span>
                  <span>NGINX</span>
                  <span>Vercel</span>
                  <span>Auth0</span>
                  <span>MacOS</span>
                </div>
              </div>

              {/* Creative - Small */}
              <div
                className="skill-box skill-box-small"
                style={{ '--box-color': theme.colors[4] }}
              >
                <div className="skill-box-header">
                  <span className="skill-icon">^</span>
                  <h3>Creative</h3>
                </div>
                <div className="skill-list">
                  <span>Unity</span>
                  <span>Unreal</span>
                  <span>Spline</span>
                </div>
              </div>

              {/* Tools - Small */}
              <div
                className="skill-box skill-box-small"
                style={{ '--box-color': theme.colors[0] }}
              >
                <div className="skill-box-header">
                  <span className="skill-icon">#</span>
                  <h3>Tools</h3>
                </div>
                <div className="skill-list">
                  <span>VS Code</span>
                  <span>Jira</span>
                  <span>Postman</span>
                  <span>GitHub</span>
                </div>
              </div>

              {/* Languages - Accent */}
              <div
                className="skill-box skill-box-accent"
                style={{ '--box-color': theme.colors[1] }}
              >
                <span className="lang-badge">EN</span>
                <span className="lang-badge">FR</span>
                <p className="skill-vibe">Fluent in both + code</p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="about-card education-card">
            <h2 className="card-title">Education</h2>
            <div className="card-content">
              <div className="education-item">
                <span className="year-badge dark">2021 – 2025</span>
                <h3>Concordia University</h3>
                <p>Bachelor of Engineering (B.E.), Computer Software Engineering</p>
              </div>

              <div className="education-item">
                <span className="year-badge dark">2019-2021</span>
                <h3>Marianopolis College</h3>
                <p>D.E.C., Pure and Applied Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
