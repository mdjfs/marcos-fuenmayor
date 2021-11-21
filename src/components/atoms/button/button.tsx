import { FC } from "react";
import { useBiThemedClasses } from "../../../hooks/useClasses";
import { ButtonProps } from "./button.interfaces";
import "./button.scss";

const Button: FC<ButtonProps> = ({
  isDark,
  isPrimary,
  dimension,
  ...props
}) => {
  const classes = useBiThemedClasses(
    { isDark, isPrimary, dimension },
    "button"
  );
  return (
    <button className={classes} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
