import './Pages.css';
import './About.css';
import PillNav from '../components/PillNav';
import { useTheme } from '../context/ThemeContext';

function About() {
  const { theme } = useTheme();

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

        {/* Skills Section */}
        <div className="about-card skills-card">
          <h2 className="card-title">Skills & Tools</h2>
          <div className="card-content">
            {[
              { title: 'Game Development', skills: ['Unity', 'Unreal Engine', 'Spline'], colorIndex: 0 },
              { title: 'Frontend Development', skills: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React'], colorIndex: 1 },
              { title: 'Backend & APIs', skills: ['Python', 'Flask', 'Java', 'Node.js', 'Nuclio', 'Func Apps', 'Postman', 'Dagster'], colorIndex: 2 },
              { title: 'AI / Machine Learning', skills: ['YOLO', 'Ollama', 'Claude Code'], colorIndex: 3 },
              { title: 'Databases', skills: ['SQL', 'PostgreSQL', 'Neo4j', 'Snowflake'], colorIndex: 4 },
              { title: 'Cloud & DevOps', skills: ['Azure', 'Azure DevOps', 'Docker'], colorIndex: 0 },
              { title: 'Collaboration & Project Management', skills: ['Jira', 'GitHub'], colorIndex: 1 },
              { title: 'Languages', skills: ['English', 'French'], colorIndex: 2, soft: true }
            ].map((category, idx) => (
              <div key={idx} className="skills-category">
                <h3>{category.title}</h3>
                <div className="skill-tags">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className={`skill-tag ${category.soft ? 'soft' : ''}`}
                      style={{
                        backgroundColor: category.soft ? 'white' : theme.colors[category.colorIndex],
                        color: category.soft ? theme.colors[category.colorIndex] : 'white',
                        borderColor: category.soft ? theme.colors[category.colorIndex] : 'transparent'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
