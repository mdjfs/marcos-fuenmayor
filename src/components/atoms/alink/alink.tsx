import { FC } from "react";
import { Link } from "react-router-dom";
import { useBiThemedClasses } from "../../../hooks/useClasses";
import { ALinkProps } from "./alink.interfaces";
import "./alink.scss";

const ALink: FC<ALinkProps> = ({ isPrimary, isDark, dimension, ...props }) => {
  const classes = useBiThemedClasses({ isPrimary, isDark, dimension }, "alink");
  return (
    <Link {...props} className={classes}>
      {props.children}
    </Link>
  );
};

export default ALink;
