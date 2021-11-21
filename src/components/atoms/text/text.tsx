import { useThemedClasses } from "../../../hooks/useClasses";
import { TextProps } from "./text.interfaces";
import "./text.scss";

const Text = ({ children, ...props }: TextProps) => {
  const classes = useThemedClasses(props, "text");
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};

export default Text;
