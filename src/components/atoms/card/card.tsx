import { CardProps } from "./card.interfaces";
import "./card.scss";

const Card = ({ isDark, content, dimension }: CardProps) => {
  let cardClass = "card";
  cardClass += " " + (isDark ? "dark" : "");
  cardClass += " " + (dimension || "medium");
  return <div className={cardClass}>{content}</div>;
};

export default Card;
