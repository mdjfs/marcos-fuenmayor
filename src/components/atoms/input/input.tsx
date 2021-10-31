import { ChangeEvent, useState } from "react";
import { InputProps } from "./input.interfaces";
import "./input.scss";

const Input = ({
  isDark,
  isPrimary,
  onType,
  dimension,
  matchRegex,
  type,
  ...inherited
}: InputProps) => {
  const [isMatched, setIsMatched] = useState(true);

  let inputClass = "";
  inputClass += " " + (isPrimary ? "input-primary" : "input-secondary");
  inputClass += " " + (isDark ? "dark" : "");
  inputClass += " " + (dimension || "medium");
  inputClass += " " + (isMatched ? "" : "unmatched");
  type = "text"; // just text inputs

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
      type={type}
      onChange={listener}
      className={inputClass}
      {...inherited}
    />
  );
};

export default Input;
