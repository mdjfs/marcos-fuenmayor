import { TextProps } from "./text.interfaces";
import "./text.scss";

const Text = ({ content, isDark, dimension }: TextProps) => {
  let textClass = "text";
  textClass += " " + (isDark ? "dark" : "");
  textClass += " " + (dimension || "medium");
  return <p className={textClass}>{content}</p>;
};

export default Text;
