import {
  FaMagic,
  FaMobileAlt,
  FaDesktop,
  FaHouseUser,
  FaArrowDown,
} from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import SVG from "react-inlinesvg";
import { useClasses } from "../../../common/helpers/components.helpers";
import Button from "../../atoms/button/button";
import Header from "../../atoms/header/header";
import Text from "../../atoms/text/text";
import "./hero.scss";

export const Hero = () => {
  const [className] = useClasses("hero");
  return (
    <div className={className}>
      <div className="background">
        <SVG className="svg-background" src="/static/svg/wave.svg"></SVG>
      </div>
      <div className="grid">
        <Header content="Experimenta tecnología de punta hecha a medida" />
        <Text
          content={
            <>
              <FaMagic /> Automatiza tus procesos
            </>
          }
        />
        <Text
          content={
            <>
              <IoGlobeOutline /> Posicionate en la web
            </>
          }
        />
        <Text
          content={
            <>
              <FaMobileAlt />
              <FaDesktop />
              Desarrolla aplicaciones
            </>
          }
        />
        <Text
          content={
            <>
              <FaHouseUser />
              Comodidad para ti y tus clientes
            </>
          }
        />
        <div className="actions">
          <Text content="¿Interesado en unirte al mundo de la tecnología?" />
          <Button isPrimary={false} content="Ver opciones" />
          <Button isPrimary={false} content="Hablemos" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
