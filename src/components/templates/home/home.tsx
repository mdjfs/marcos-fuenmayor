import Hero from "../../organisms/hero/hero";
import Navigator from "../../molecules/navigator/navigator";
import Solutions from "../../organisms/solutions/solutions";
import Tech from "../../organisms/tech/tech";
import Contact from "../../organisms/contact/contact";
import { FC } from "react";

export const Home: FC<{ contact?: boolean }> = ({ contact }) => {
  return (
    <>
      <Navigator />
      <Hero />
      <Solutions />
      <Tech />
      <Contact setScroll={contact} />
    </>
  );
};

export default Home;
