import { ButtonProps } from "./button.interfaces";
import "./button.scss";

const Button = ({
  isPrimary,
  isDark,
  dimension,
  content,
  ...inherited
}: ButtonProps) => {
  let buttonClass = "";
  buttonClass += " " + (isPrimary ? "button-primary" : "button-secondary");
  buttonClass += " " + (isDark ? "dark" : "");
  buttonClass += " " + (dimension || "medium");
  return (
    <button className={buttonClass} {...inherited}>
      {content}
    </button>
  );
};

export default Button;
