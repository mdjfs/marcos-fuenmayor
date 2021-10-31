import { useClasses } from "../../../common/helpers/components.helpers";
import { CardProps } from "./card.interfaces";
import "./card.scss";

const Card = (props: CardProps) => {
  const [classes] = useClasses("card", props, false);
  return <div className={classes}>{props.content}</div>;
};

export default Card;
