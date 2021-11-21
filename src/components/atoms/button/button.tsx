import { FC } from "react";
import { useBiThemedClasses } from "../../../hooks/useClasses";
import { ButtonProps } from "./button.interfaces";
import "./button.scss";

const Button: FC<ButtonProps> = (props) => {
  const classes = useBiThemedClasses(props, "button");
  return <button className={classes}>{props.children}</button>;
};

export default Button;
