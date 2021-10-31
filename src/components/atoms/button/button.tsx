import { useClasses } from "../../../common/helpers/components.helpers";
import { ButtonProps } from "./button.interfaces";
import "./button.scss";

const Button = (props: ButtonProps) => {
  const [classes, inherited] = useClasses("button", props);
  return (
    <button className={classes} {...inherited}>
      {props.content}
    </button>
  );
};

export default Button;
