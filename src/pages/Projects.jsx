import './Pages.css';
import './Projects.css';
import PillNav from '../components/PillNav';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect, useRef } from 'react';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'graphics', label: 'Games' },
  { id: 'web', label: 'Web' },
  { id: 'ai', label: 'AI & Algorithms' },
  { id: 'systems', label: 'Systems' },
  { id: 'competition', label: 'Competitions' },
];

function Projects() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.masonry-card');
    cards.forEach(card => observerRef.current.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [activeCategory]); // Re-run when category changes

  const projects = [
    {
      title: 'Pretty Blue',
      description: 'Built a custom game engine featuring a procedural underwater world generated via Marching Cubes & custom noise algorithms. Implemented a high-performance rendering pipeline with real-time ray tracing and custom shaders.',
      tags: ['C++', 'OpenGL', 'GLSL', 'Procedural', 'Game Engine'],
      category: 'graphics',
      screenshot: '/underwater_bonanza.jpg',
      link: 'https://github.com/Augusto-Concordia/underwater_bonanza'
    },
    {
      title: 'PathingAlgo',
      description: 'A pathfinding algorithm visualizer that solves hex-grid mazes using heuristic search. Visualize algorithmic behavior in real time on non-square grids.',
      tags: ['Python', 'NumPy', 'Matplotlib', 'Algorithms'],
      category: ['ai', 'competition'],
      screenshot: '/pathingAlgo.png',
      link: 'https://github.com/Spiratatoe/PathingAlgo'
    },
    {
      title: 'Back in Time',
      description: 'Designed a Metroidvania platformer with unique boss fights and complex time-travel mechanics. Managed state logic for enemy AI and collectibles in Unity.',
      tags: ['C#', 'Unity', 'Pixel Art', 'Game Dev'],
      category: 'graphics',
      screenshot: '/bullet-bill-bullies.png',
      link: 'https://github.com/Spiratatoe/Bullet-Bill-Bullies'
    },
    {
      title: 'CQI 2025',
      description: 'Developed an autonomous point-scoring agent for a grid environment, implementing adaptive pathfinding algorithms and state evaluation under strict constraints.',
      tags: ['Python', 'Pandas', 'Algorithms', 'Competition'],
      category: ['ai', 'competition'],
      screenshot: '/cqi.png',
      link: 'https://github.com/Spiratatoe/CQI_2025'
    },
    {
      title: 'Rosalia Website',
      description: 'Promotional web project showcasing a building pre-construction. Interactive interface with responsive design and smooth animations.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Responsive'],
      category: 'web',
      screenshot: '/rosalia.png',
      link: 'https://github.com/Spiratatoe/Rosalia_Website'
    },
    {
      title: 'ConUHacks IX',
      description: 'Developed a real-time AI Financial Assistant using RAG (Retrieval-Augmented Generation). Integrated live data with a custom chat UI using Next.js, MongoDB, and Ollama.',
      tags: ['Next.js', 'MongoDB', 'RAG', 'AI', 'Hackathon'],
      category: ['web', 'competition'],
      screenshot: '/hackathon.png',
      link: 'https://github.com/Spiratatoe/ConUHacks-IX'
    },
    {
      title: 'Cabot Trail CEC 2025',
      description: 'Brain Tumor Detection AI: Trained a custom Neural Network for medical imaging, designing a full preprocessing pipeline to optimize dataset quality and model accuracy.',
      tags: ['Python', 'TensorFlow', 'AI/ML', 'Medical'],
      category: ['ai', 'competition'],
      screenshot: '/brains.jpg',
      link: 'https://github.com/Spiratatoe/Cabot_Trail_CEC_2025'
    },
    {
      title: 'Rover Antenna Interface',
      description: 'Communication system between rover and base station built with UART protocols and RAI PIF standards. Includes a web-based front-end for GPS and map visuals (Leaflet).',
      tags: ['C++', 'UART', 'Embedded', 'JavaScript', 'Space Concordia'],
      category: ['systems', 'competition'],
      screenshot: '/rover.webp',
      link: 'https://github.com/Spiratatoe/Rover_Antenna_Interface'
    },
    {
      title: 'Leather Book',
      description: 'A personal food tracker & fitness notebook built from scratch with Claude Code, Ionic React, and Capacitor to replace ad-filled alternatives.',
      tags: ['Ionic', 'React', 'Mobile', 'Capacitor'],
      category: 'web',
      status: 'wip',
      screenshot: '/gymbook.png',
      link: 'https://github.com/Spiratatoe/leather-book'
    },
    {
      title: 'RoomateFinancials',
      description: 'Finance management app for roommates currently in development.',
      tags: ['MongoDB', 'React', 'Auth0', 'Full Stack'],
      category: 'web',
      status: 'wip',
      screenshot: '/finance.png',
      link: 'https://github.com/Spiratatoe/RoomateFinancials'
    },
    {
      title: 'Unreal Pokemon Clone',
      description: 'A learning project combining Octopath Traveler aesthetics with Pokemon mechanics in Unreal Engine 5.',
      tags: ['Unreal Engine 5', 'C++', 'Game Dev'],
      category: 'graphics',
      status: 'wip',
      screenshot: '/pokemonhd.png',
    },    {
      title: 'Rhumbix API',
      description: 'Quick little tool for dealing with the Rhumbix api, without postgres and the ability to get the csv and json of the responses.',
      tags: ['Rhumbix', 'Python', 'API', 'Construction'],
      category: 'ai',
      screenshot: '/rhumbix.png',
      link:'https://github.com/Spiratatoe/rhumbix-api'
    }, {
      title: 'Personal Portfolio',
      description: 'A showcase of my work blending AI-driven development with 3D web objects. Experimentation with Spline, Vercel, and modern web tools.',
      tags: ['React', 'Three.js', 'Spline', 'Vercel', 'AI'],
      category: 'web',
      screenshot: '/portfolio.png', // Placeholder
      link: 'https://github.com/Spiratatoe/me'
    },
    {
      title: 'Robot Wars',
      description: 'Programmed control logic and sensor integration (C/C++, Arduino) for a competitive sumo robot. Iterative design over multiple years.',
      tags: ['C++', 'Arduino', 'Robotics', 'Embedded'],
      category: ['systems', 'competition'],
      screenshot: '/robotwars.png', // Placeholder
      link: 'https://github.com/Spiratatoe/RoboWars2024' // Inferred from "Github" header in resume
    },
    {
      title: 'Jeux de Génie',
      description: 'Representative for Concordia in software and consulting challenges. Developed rapid prototypes and technical solutions under strict time pressure.',
      tags: ['Consulting', 'Competition'],
      category: 'competition',
      screenshot: '/jdg.png', // Placeholder
    },
    {
      title: 'Tetris',
      description: 'The project that made me fall for coding. As a submission for my final coding project in cegep, for a class I had almost given up on, I had decide to try building one of my favourite games so that class would at least be fun. A few years later, and I\'ve now graduated as a software engineer, and work as a developer. ',
      tags: ['Pygames', 'Python', 'Game Dev'],
      category: 'graphics',
      screenshot: '/tetrisPoster.jpg',
      link:'https://github.com/Spiratatoe/tetris'
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p =>
      Array.isArray(p.category)
        ? p.category.includes(activeCategory)
        : p.category === activeCategory
    );

  return (
    <>
      <PillNav />
      <div className="projects-container">
        {/* Category Filter Bar */}
        <div className="category-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                '--btn-color': theme.colors[0],
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="masonry-grid">
          {filteredProjects.map((project, index) => {
            const colorIndex = index % theme.colors.length;
            return (
              <div
                key={project.title}
                className={`masonry-card ${project.status === 'wip' ? 'wip' : ''}`}
              >
                <div className="card-image">
                  <img src={project.screenshot} alt={project.title} />
                  {project.status === 'wip' && (
                    <span className="wip-badge">In Progress</span>
                  )}
                </div>
                <div
                  className="card-content"
                  style={{
                    backgroundColor: theme.colors[colorIndex],
                  }}
                >
                  <div className="project-header">
                    <h2 className="project-title">{project.title}</h2>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                        aria-label="View on GitHub"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
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
