import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    name: 'Default',
    colors: ['#0736ff', '#000000', '#43484B', '#F4E4BA', '#84b0c1'], // Refined Beige
    splineScene: 'https://prod.spline.design/lwJZVVCK6o807FRr/scene.splinecode'
  });

  useEffect(() => {
    // Apply CSS variables when theme changes
    document.documentElement.style.setProperty('--primary-color', theme.colors[0]);
    document.documentElement.style.setProperty('--secondary-color', theme.colors[1]);
    document.documentElement.style.setProperty('--background-color', theme.colors[2]);
    document.documentElement.style.setProperty('--accent-color-1', theme.colors[3]);
    document.documentElement.style.setProperty('--accent-color-2', theme.colors[4]);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
