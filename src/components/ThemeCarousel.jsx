import { useState } from 'react';
import './ThemeCarousel.css';

const themes = [
  {
    name: 'Default',
    colors: ['#0736ff', '#000000', '#ffffff', '#40ffaa', '#4079ff'],
    splineScene: 'https://prod.spline.design/lwJZVVCK6o807FRr/scene.splinecode'
  },
  {
    name: 'Sunset',
    colors: ['#ff6b35', '#f7931e', '#fdc500', '#c1121f', '#780000'],
    splineScene: 'https://prod.spline.design/PbvdFoCheyXlkUSY/scene.splinecode'
  },
  {
    name: 'Ocean',
    colors: ['#06d6a0', '#118ab2', '#073b4c', '#ef476f', '#ffd166'],
    splineScene: 'https://prod.spline.design/d0RGQyc-gWntt7li/scene.splinecode'
  },
  {
    name: 'Purple',
    colors: ['#7209b7', '#560bad', '#3a0ca3', '#f72585', '#4cc9f0'],
    splineScene: 'https://prod.spline.design/el1qrgRs9m15U78x/scene.splinecode'
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
            <div className="circle-gradient" style={{
              background: `conic-gradient(
                ${theme.colors[0]} 0deg 72deg,
                ${theme.colors[1]} 72deg 144deg,
                ${theme.colors[2]} 144deg 216deg,
                ${theme.colors[3]} 216deg 288deg,
                ${theme.colors[4]} 288deg 360deg
              )`
            }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThemeCarousel;
export { themes };
