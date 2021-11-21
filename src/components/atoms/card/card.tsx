import { FC } from "react";
import { useThemedClasses } from "../../../hooks/useClasses";
import { CardProps } from "./card.interfaces";
import "./card.scss";

const Card: FC<CardProps> = (props: CardProps) => {
  const classes = useThemedClasses(props, "card");
  return (
    <div className={classes} {...props}>
      {props.children}
    </div>
  );
};

export default Card;
