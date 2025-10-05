import './Pages.css';
import './About.css';
import PillNav from '../components/PillNav';

function About() {
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
          <h2 className="card-title">Skills</h2>
          <div className="card-content">
            <div className="skills-category">
              <h3>Technical Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">CSS/HTML</span>
              </div>
            </div>

            <div className="skills-category">
              <h3>Soft Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag soft">#Creativity</span>
                <span className="skill-tag soft">#Teamwork</span>
                <span className="skill-tag soft">#Communication</span>
                <span className="skill-tag soft">#Problem_Solving</span>
              </div>
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
