import GradientText from '../components/GradientText';
import { useTheme } from '../context/ThemeContext';

function Home() {
  const { theme } = useTheme();
  const textColors = [theme.colors[0], theme.colors[1]];

  return (
    <div className="left-content">
      <div className="name">
        <GradientText
          colors={textColors}
          animationSpeed={10}
          showBorder={false}
          className="custom-class"
        >
          Jack
        </GradientText>
        <GradientText
          colors={textColors}
          animationSpeed={10}
          showBorder={false}
          className="custom-class"
        >
          Spiratos
        </GradientText>
      </div>
    </div>
  );
}

export default Home;
