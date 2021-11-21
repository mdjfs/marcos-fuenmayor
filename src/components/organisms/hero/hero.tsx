import { FaMagic, FaMobileAlt, FaDesktop, FaHouseUser } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import SVG from "react-inlinesvg";
import { useThemedClasses } from "../../../hooks/useClasses";
import Button from "../../atoms/button/button";
import Header from "../../atoms/header/header";
import Text from "../../atoms/text/text";
import "./hero.scss";

export const Hero = () => {
  const className = useThemedClasses({}, "hero");
  return (
    <div className={className}>
      <div className="background">
        <SVG className="svg-background" src="/static/svg/wave.svg"></SVG>
      </div>
      <div className="grid">
        <Header>Experimenta tecnología de punta hecha a medida</Header>
        <Text>
          <FaMagic /> Automatiza tus procesos
        </Text>
        <Text>
          <IoGlobeOutline /> Posicionate en la web
        </Text>
        <Text>
          <FaMobileAlt />
          <FaDesktop />
          Desarrolla aplicaciones
        </Text>
        <Text>
          <FaHouseUser />
          Comodidad para ti y tus clientes
        </Text>
        <div className="actions">
          <Text>¿Interesado en unirte al mundo de la tecnología?</Text>
          <Button isPrimary={false}>Ver opciones</Button>
          <Button isPrimary={false}>Hablemos</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
