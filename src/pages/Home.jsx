import GradientText from '../components/GradientText';

function Home() {
  return (
    <div className="left-content">
      <div className="name">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={10}
          showBorder={false}
          className="custom-class"
        >
          Jack
        </GradientText>
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
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
