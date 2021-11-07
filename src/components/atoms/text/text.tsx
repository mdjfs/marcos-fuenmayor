import { useClasses } from "../../../common/helpers/components.helpers";
import { TextProps } from "./text.interfaces";
import "./text.scss";

const Text = ({ content, ...props }: TextProps) => {
  const [classes] = useClasses("text", { props });
  return <p className={classes}>{content}</p>;
};

export default Text;
