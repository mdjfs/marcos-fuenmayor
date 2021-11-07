import { ChangeEvent, useState } from "react";
import { useClasses } from "../../../common/helpers/components.helpers";
import { InputProps } from "./input.interfaces";
import "./input.scss";

const Input = ({ onType, matchRegex, type, ...props }: InputProps) => {
  const [isMatched, setIsMatched] = useState(true);
  const [classes, inherited] = useClasses("input", { props, IsBiThemed: true });

  function listener(e: ChangeEvent<HTMLInputElement>) {
    if (onType) {
      const { value } = e.target;
      if (matchRegex) {
        const status = value.match(matchRegex) !== null;
        setIsMatched(status);
        onType(value, status);
      } else onType(value);
    }
  }

  return (
    <input
      type="text"
      onChange={listener}
      className={`${classes} ${isMatched ? "matched" : "unmatched"}`}
      {...inherited}
    />
  );
};

export default Input;
