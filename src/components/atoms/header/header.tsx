import { HeaderProps } from "./header.interfaces";
import "./header.scss";

const Header = ({ content, isDark, dimension }: HeaderProps) => {
  let headerClass = "header";
  headerClass += " " + (isDark ? "dark" : "");
  headerClass += " " + (dimension || "medium");
  return <h1 className={headerClass}>{content}</h1>;
};

export default Header;
