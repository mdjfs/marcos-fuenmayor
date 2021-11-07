import { useClasses } from "../../../common/helpers/components.helpers";
import { HeaderProps } from "./header.interfaces";
import "./header.scss";

const Header = (props: HeaderProps) => {
  const [classes] = useClasses("header", { props });
  return <h1 className={classes}>{props.content}</h1>;
};

export default Header;
