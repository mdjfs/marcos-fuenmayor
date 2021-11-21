import { useThemedClasses } from "../../../hooks/useClasses";
import { HeaderProps } from "./header.interfaces";
import "./header.scss";

const Header = (props: HeaderProps) => {
  const classes = useThemedClasses(props, "header");
  return (
    <h1 className={classes} {...props}>
      {props.children}
    </h1>
  );
};

export default Header;
