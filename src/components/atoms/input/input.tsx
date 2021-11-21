import { ChangeEvent, useState } from "react";
import { useBiThemedClasses } from "../../../hooks/useClasses";
import { InputProps } from "./input.interfaces";
import "./input.scss";

const Input = ({ onType, matchRegex, type, ...props }: InputProps) => {
  const [isMatched, setIsMatched] = useState(true);
  const classes = useBiThemedClasses(props, "input");

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
      {...props}
      className={`${classes} ${isMatched ? "matched" : "unmatched"}`}
      type="text"
      onChange={listener}
    />
  );
};

export default Input;
