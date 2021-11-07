import Hero from "../../organisms/hero/hero";
import Presentation from "../../organisms/presentation/presentation";
import Navigator from "../../molecules/navigator/navigator";

export const Home = () => {
  return (
    <>
      <Navigator />
      <Hero />
      <Presentation />
    </>
  );
};

export default Home;
