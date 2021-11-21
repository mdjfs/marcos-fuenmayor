import { useBiThemedClasses } from "../../../hooks/useClasses";
import { ALinkProps } from "./alink.interfaces";
import "./alink.scss";

const ALink = (props: ALinkProps) => {
  const classes = useBiThemedClasses(props, "alink");
  return (
    <a {...props} className={classes}>
      {props.children}
    </a>
  );
};

export default ALink;
