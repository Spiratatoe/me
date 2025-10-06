import { Link, useLocation } from 'react-router-dom';
import './PillNav.css';

function PillNav() {
  const location = useLocation();

  const navItems = [
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/connect', label: 'Connect' }
  ];

  return (
    <nav className="pill-nav">
      <div className="pill-nav-container">
        <Link to="/" className="pill-logo">
          :)
        </Link>
        <div className="pill-nav-items">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`pill-nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default PillNav;
