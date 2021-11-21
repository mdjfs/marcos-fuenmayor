import Hero from "../../organisms/hero/hero";
import Navigator from "../../molecules/navigator/navigator";
import Solutions from "../../organisms/solutions/solutions";
import Tech from "../../organisms/tech/tech";
import Contact from "../../organisms/contact/contact";

export const Home = () => {
  return (
    <>
      <Navigator />
      <Hero />
      <Solutions />
      <Tech />
      <Contact />
    </>
  );
};

export default Home;
