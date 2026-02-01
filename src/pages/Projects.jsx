import './Pages.css';
import './Projects.css';
import PillNav from '../components/PillNav';
import { useTheme } from '../context/ThemeContext';

function Projects() {
  const { theme } = useTheme();

  const projects = [
    {
      title: 'Underwater Bonanza',
      description: 'The goal of this project is to create a graphics program using OpenGL to enable walking through a procedurally created virtual world. Our virtual world starts above sea level, and as the user moves, they are introduced to the depths of the ocean. There, one can see and navigate through sea life, including fish, sharks, seaweeds, rocks, caves, and more. This terrain is procedurally created.',
      languages: ['C++', 'OpenGL', 'GLSL'],
      screenshot: '/underwater_bonanza.jpg',
      link: 'https://github.com/Augusto-Concordia/underwater_bonanza'
    },
    {
      title: 'PathingAlgo',
      description: 'A pathfinding algorithm visualizer that solves hex-grid mazes using heuristic search. Built to explore efficient graph traversal on non-square grids and visualize algorithmic behavior in real time.',
      languages: ['Python', 'NumPy', 'Matplotlib'],
      screenshot: '/pathingAlgo.png',
      link: 'https://github.com/Spiratatoe/PathingAlgo'
    },
    {
      title: 'Bullet Bill Bullies',
      description: 'Back In Time is a 2D Metroidvania-style platformer that takes players on an adventure through four distinct time periods — the Present Day, Medieval Times, the Prehistoric Age, and the mysterious Pre-Time era. Designed with nostalgic pixel-art visuals, the game combines exploration, combat, and puzzle-solving, where each era presents unique environments, enemies, and time-based mechanics. Players must navigate challenging levels that evolve across timelines, using time manipulation to overcome obstacles and uncover the deeper consequences of altering history.',
      languages: ['C#', 'Unity', 'Pixel Art'],
      screenshot: '/bullet-bill-bullies.png',
      link: 'https://github.com/Spiratatoe/Bullet-Bill-Bullies'
    },
    {
      title: 'CQI_2025',
      description: 'CQI_2025 was developed for the Quebec Engineering Competition (Compétition Québécoise d’Ingénierie), where participants represented their schools in a strategic, board-style challenge. The competition featured attack vs. defense matches that tested both engineering insight and analytical thinking. This project involved designing and implementing predictive algorithms to anticipate opponents’ moves and optimize decision-making in real time — turning the game into a battle of strategy, logic, and foresight. Built in Python, the project highlighted skills in algorithm design, game theory, and competitive problem-solving.',
      languages: ['Python', 'Pandas', 'Algorithms'],
      screenshot: '/cqi.png',
      link: 'https://github.com/Spiratatoe/CQI_2025'
    },
    {
      title: 'Rosalia Website',
      description: 'Rosalia Website is a promotional web project created to showcase a new building before its construction was completed. The site served as a digital preview, allowing visitors to explore the building’s design, amenities, and location through an interactive and visually engaging interface. Built with JavaScript, HTML, and CSS, the website emphasized responsive design, smooth animations, and clear presentation to help generate early interest and provide stakeholders with a virtual experience of the upcoming development.',
      languages: ['JavaScript', 'HTML', 'CSS'],
      screenshot: '/rosalia.png',
      link: 'https://github.com/Spiratatoe/Rosalia_Website'
    },
    {
      title: 'ConUHacks IX',
      description: 'A hackathon project built in TypeScript under time constraints, combining rapid prototyping with functional design. Integrates API calls and responsive layouts for a dynamic web experience.',
      languages: ['TypeScript', 'React', 'Node.js'],
      screenshot: '/hackathon.png',
      link: 'https://github.com/Spiratatoe/ConUHacks-IX'
    },
    {
      title: 'Cabot Trail CEC 2025',
      description: 'Developed for the Canadian Engineering Competition in Halifax, this project challenged each province to create an AI model capable of identifying brain tumours from medical imaging data. The solution combined machine learning techniques, data preprocessing, and model optimization to achieve accurate tumor detection. Built under competition constraints, the project demonstrated proficiency in medical AI, neural networks, and high-stakes problem solving in a collaborative engineering environment.',
      languages: ['Python', 'TensorFlow', 'AI/ML'],
      screenshot: '/brains.jpg',
      link: 'https://github.com/Spiratatoe/Cabot_Trail_CEC_2025'
    },
    {
      title: 'Rover Antenna Interface',
      description: 'A capstone project for Space Concordia focused on developing a reliable communication system between a rover and base station. The system implements UART protocols and RAI PIF standards to ensure robust data transmission in challenging conditions. This project involved low-level hardware interfacing, protocol design, and real-time communication handling — critical for autonomous rover operations in space exploration scenarios.',
      languages: ['C++', 'UART', 'Embedded Systems'],
      screenshot: '/rover.webp',
      link: 'https://github.com/Spiratatoe/Rover_Antenna_Interface'
    },
    {
      title: 'Leather Book',
      description: 'In the works',
      languages: ['ionic', 'react'],
      screenshot: '/leather.png',
      link: 'https://github.com/Spiratatoe/leather-book'
    },
    {
      title: 'RoomateFinancials App',
      description: 'In the works',
      languages: [ 'mongoDB', 'react', 'auth0'],
      screenshot: '/finance.png',
      link: 'https://github.com/Spiratatoe/RoomateFinancials-App'
    },
    {
      title: 'Unreal Engine Pokemon Clone',
      description: 'A tester project to get a feel for Unreal Engine by mixing two of my favorite games, Octopath Traveler and Pokemon.',
      languages: [ 'Unreal Engine', 'C++'],
      screenshot: '/pokemonhd.png',
      // link: 'https://github.com/Spiratatoe/RoomateFinancials-App'
    }
  ];

  return (
    <>
      <PillNav />
      <div className="projects-container">
        <div className="masonry-grid">
          {projects.map((project, index) => {
            const colorIndex = index % theme.colors.length;
            return (
              <div
                key={index}
                className="masonry-card"
              >
                <div className="card-image">
                  <img src={project.screenshot} alt={project.title} />
                </div>
                <div
                  className="card-content"
                  style={{
                    backgroundColor: theme.colors[colorIndex],
                  }}
                >
                  <div className="project-header">
                    <h2 className="project-title">{project.title}</h2>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                      aria-label="View on GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-languages">
                    {project.languages.map((lang, i) => (
                      <span
                        key={i}
                        className="language-tag"
                        style={{ borderColor: theme.colors[(colorIndex + 2) % theme.colors.length] }}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
