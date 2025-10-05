import './Pages.css';
import PillNav from '../components/PillNav';

function Projects() {
  return (
    <>
      <PillNav />
      <div className="page-content">
      <div className="page-container">
        <h1 className="page-title">Projects</h1>
        <div className="page-body">
          <p>Here are some of my recent projects:</p>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Description of your project goes here.</p>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Description of your project goes here.</p>
            </div>
            <div className="project-card">
              <h3>Project 3</h3>
              <p>Description of your project goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Projects;
