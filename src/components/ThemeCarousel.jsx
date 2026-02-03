import { useState } from 'react';
import './ThemeCarousel.css';


const themes = [
  {
    name: 'Default',
    colors: ['#0736ff', '#000000', '#43484B', '#F4E4BA', '#84b0c1'], // Refined Beige
    splineScene: 'https://prod.spline.design/lwJZVVCK6o807FRr/scene.splinecode'
  },
  {
    name: 'Sunset',
    colors: ['#F46036', '#2E294E', '#8D0801', '#D72638', '#F49D37'], // Changed index 2 to Dark Red
    splineScene: 'https://prod.spline.design/PbvdFoCheyXlkUSY/scene.splinecode'
  },
  {
    name: 'Ocean',
    colors: ['#00916E', '#0D1B2A', '#1B4332', '#FE5F55', '#4CC9F0'], // Changed index 2 to Dark Green
    splineScene: 'https://prod.spline.design/d0RGQyc-gWntt7li/scene.splinecode'
  },
  {
    name: 'Purple',
    colors: ['#560BAD', '#240046', '#3F37C9', '#B5179E', '#4361EE'], // Changed index 2 to Indigo
    splineScene: 'https://prod.spline.design/el1qrgRs9m15U78x/scene.splinecode'
  },
  {
    name: 'Kirby',
    colors: ['#ffb3d9', '#87ceeb', '#ff69b4', '#ffc0cb', '#ffe4e1'],
    splineScene: 'https://prod.spline.design/T4wHMb1VhCwfyWJP/scene.splinecode',
    icon: '/kirby_icon.png'
  }
];

function ThemeCarousel({ onThemeChange }) {
  const [selectedTheme, setSelectedTheme] = useState(0);

  const handleThemeClick = (index) => {
    setSelectedTheme(index);
    if (onThemeChange) {
      onThemeChange(themes[index]);
    }
  };

  return (
    <div className="theme-carousel">
      <div className="theme-circles">
        {themes.map((theme, index) => (
          <div
            key={index}
            className={`theme-circle ${selectedTheme === index ? 'active' : ''}`}
            onClick={() => handleThemeClick(index)}
            title={theme.name}
          >
            {theme.icon ? (
              <img
                src={theme.icon}
                alt={theme.name}
                className="theme-icon"
              />
            ) : (
              <div className="circle-gradient" style={{
                background: `conic-gradient(
                  ${theme.colors[0]} 0deg 72deg,
                  ${theme.colors[1]} 72deg 144deg,
                  ${theme.colors[2]} 144deg 216deg,
                  ${theme.colors[3]} 216deg 288deg,
                  ${theme.colors[4]} 288deg 360deg
                )`
              }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThemeCarousel;
export { themes };
