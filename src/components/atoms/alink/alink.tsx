import { useClasses } from "../../../common/helpers/components.helpers";
import { ALinkProps } from "./alink.interfaces";
import "./alink.scss";

const ALink = (props: ALinkProps) => {
  const [classes, inherit] = useClasses("alink", { props, IsBiThemed: true });
  return (
    <a className={classes} {...inherit}>
      {props.content}
    </a>
  );
};

export default ALink;
