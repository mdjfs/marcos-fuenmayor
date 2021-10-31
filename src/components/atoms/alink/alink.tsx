import { ALinkProps } from "./alink.interfaces";
import "./alink.scss";

const ALink = ({
  isPrimary,
  isDark,
  dimension,
  content,
  ...inherited
}: ALinkProps) => {
  let ALinkClass = "";
  ALinkClass += " " + (isPrimary ? "alink-primary" : "alink-secondary");
  ALinkClass += " " + (isDark ? "dark" : "");
  ALinkClass += " " + (dimension || "medium");
  return (
    <a className={ALinkClass} {...inherited}>
      {content}
    </a>
  );
};

export default ALink;
