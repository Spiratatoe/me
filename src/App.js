import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Particles from './components/Particles';
import BubbleCursor from './components/BubbleCursor';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Connect from './pages/Contact';
import ThemeCarousel from './components/ThemeCarousel';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`App ${!isHome ? 'scrollable' : ''}`}>

      {/* Bubble Cursor - only for Kirby theme */}
      {theme.name === 'Kirby' && <BubbleCursor />}

      {/* Particles background - only on home */}
      {isHome && (
        <div className="particles-background fade-in">
          <Particles
            particleColors={theme.colors}
            particleCount={1000}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
      )}

      {/* Spline background - only on home */}
      {isHome && (
        <div className="spline-container fade-in">
          <Spline scene={theme.splineScene} />
        </div>
      )}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>

      {/* Right side - Navigation - Only show on home */}
      {isHome && (
        <nav className="right-nav">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/connect">Connect</Link></li>
          </ul>
        </nav>
      )}

      {/* Theme Carousel */}
      <ThemeCarousel onThemeChange={handleThemeChange} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
        <Analytics />
      </Router>
    </ThemeProvider>
  );
}

export default App;
