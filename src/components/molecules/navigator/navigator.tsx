import { useEffect, useState } from "react";
import { IoMenuOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { isGlobalDark, useThemedClasses } from "../../../hooks/useClasses";
import {
  SET_DARK_MODE,
  SET_LIGHT_MODE,
} from "../../../redux/reducers/theme.reducers";
import ALink from "../../atoms/alink/alink";
import Text from "../../atoms/text/text";
import Toggle from "../../atoms/toggle/toggle";
import "./navigator.scss";

export const Navigator = () => {
  let className = useThemedClasses({}, "navigator");
  const [isTop, setIsTop] = useState<boolean>();
  const [isPortrait, setIsPortrait] = useState<boolean>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const isDark = isGlobalDark();

  const handleScroll = () => {
    if (document.scrollingElement) {
      const status = document.scrollingElement.scrollTop < 5;
      setIsTop(status);
    }
  };

  const handleResize = () => {
    const status = window.innerHeight > window.innerWidth;
    setIsPortrait(status);
  };

  const handleToggle = (status: boolean) => {
    dispatch(status ? { type: SET_LIGHT_MODE } : { type: SET_DARK_MODE });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  className += isTop ? " top" : " scrolled";
  className += isPortrait ? " portrait" : " landscape";

  const links = [
    <ALink isPrimary={false} key="Inicio" to="/">
      Inicio
    </ALink>,
    <ALink isPrimary={false} key="Acerca de mi" to="/about">
      Acerca de mi
    </ALink>,
    <ALink isPrimary={false} key="Soluciones" to="/solutions">
      Soluciones
    </ALink>,
  ];

  return (
    <div className={className}>
      <div className="logo">
        <Text>MF</Text>
      </div>
      <div className="content">
        {isPortrait && (
          <Toggle
            dimension="small"
            left={<IoSunnyOutline />}
            right={<IoMoonOutline />}
            onToggle={handleToggle}
            defaultStatus={!isDark}
            isPrimary={false}
          />
        )}
        {isPortrait && (
          <div className="hamburguer" onClick={() => setIsOpen(!isOpen)}>
            <IoMenuOutline />
          </div>
        )}
        {!isPortrait && links}
        {!isPortrait && (
          <Toggle
            left={<IoSunnyOutline />}
            right={<IoMoonOutline />}
            onToggle={handleToggle}
            isPrimary={false}
            defaultStatus={!isDark}
          />
        )}
      </div>
      {isPortrait && isOpen && <div className="links">{links}</div>}
    </div>
  );
};

export default Navigator;
