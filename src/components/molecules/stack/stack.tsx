import { FC } from "react";
import Card from "../../atoms/card/card";
import { StackProps } from "./stack.interfaces";
import "./stack.scss";

export const Stack: FC<StackProps> = ({ children, icon, ...props }) => {
  return (
    <Card {...props}>
      <div className="stack">
        <div className="icon">{icon}</div>
        <div className="content">{children}</div>
      </div>
    </Card>
  );
};

export default Stack;
