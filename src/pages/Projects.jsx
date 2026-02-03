import './Pages.css';
import './Projects.css';
import PillNav from '../components/PillNav';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect, useRef } from 'react';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'graphics', label: 'Graphics & Games' },
  { id: 'web', label: 'Web' },
  { id: 'ai', label: 'AI & Algorithms' },
  { id: 'systems', label: 'Systems' },
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
      title: 'Underwater Bonanza',
      description: 'A graphics program using OpenGL to enable walking through a procedurally created virtual world. Navigate through the depths of the ocean with fish, sharks, seaweeds, rocks, and caves.',
      tags: ['C++', 'OpenGL', 'GLSL', 'Procedural'],
      category: 'graphics',
      screenshot: '/underwater_bonanza.jpg',
      link: 'https://github.com/Augusto-Concordia/underwater_bonanza'
    },
    {
      title: 'PathingAlgo',
      description: 'A pathfinding algorithm visualizer that solves hex-grid mazes using heuristic search. Visualize algorithmic behavior in real time on non-square grids.',
      tags: ['Python', 'NumPy', 'Matplotlib', 'Algorithms'],
      category: 'ai',
      screenshot: '/pathingAlgo.png',
      link: 'https://github.com/Spiratatoe/PathingAlgo'
    },
    {
      title: 'Bullet Bill Bullies',
      description: 'A 2D Metroidvania-style platformer through four time periods. Pixel-art visuals combining exploration, combat, and puzzle-solving with time manipulation mechanics.',
      tags: ['C#', 'Unity', 'Pixel Art', 'Game Dev'],
      category: 'graphics',
      screenshot: '/bullet-bill-bullies.png',
      link: 'https://github.com/Spiratatoe/Bullet-Bill-Bullies'
    },
    {
      title: 'CQI 2025',
      description: 'Quebec Engineering Competition project featuring strategic AI for attack vs. defense matches. Predictive algorithms for real-time decision optimization.',
      tags: ['Python', 'Pandas', 'Algorithms', 'Competition'],
      category: 'ai',
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
      description: 'Hackathon project combining rapid prototyping with functional design. API integrations and responsive layouts for dynamic web experience.',
      tags: ['TypeScript', 'React', 'Node.js', 'Hackathon'],
      category: 'web',
      screenshot: '/hackathon.png',
      link: 'https://github.com/Spiratatoe/ConUHacks-IX'
    },
    {
      title: 'Cabot Trail CEC 2025',
      description: 'Canadian Engineering Competition AI model for brain tumour detection from medical imaging. Machine learning with model optimization for accurate diagnosis.',
      tags: ['Python', 'TensorFlow', 'AI/ML', 'Medical'],
      category: 'ai',
      screenshot: '/brains.jpg',
      link: 'https://github.com/Spiratatoe/Cabot_Trail_CEC_2025'
    },
    {
      title: 'Rover Antenna Interface',
      description: 'Space Concordia capstone: communication system between rover and base station. UART protocols and RAI PIF standards for robust data transmission.',
      tags: ['C++', 'UART', 'Embedded', 'Space'],
      category: 'systems',
      screenshot: '/rover.webp',
      link: 'https://github.com/Spiratatoe/Rover_Antenna_Interface'
    },
    {
      title: 'Leather Book',
      description: 'Mobile app project currently in development.',
      tags: ['Ionic', 'React', 'Mobile'],
      category: 'web',
      status: 'wip',
      screenshot: '/leather.png',
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
      description: 'Learning project combining Octopath Traveler aesthetics with Pokemon mechanics in Unreal Engine.',
      tags: ['Unreal Engine', 'C++', 'Game Dev'],
      category: 'graphics',
      screenshot: '/pokemonhd.png',
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
