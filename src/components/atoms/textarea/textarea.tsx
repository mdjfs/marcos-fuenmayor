import { ChangeEvent, useState } from "react";
import { TextAreaProps } from "./textarea.interfaces";
import "./textarea.scss";

const TextArea = ({
  isDark,
  isPrimary,
  onType,
  dimension,
  matchRegex,
  ...inherited
}: TextAreaProps) => {
  const [isMatched, setIsMatched] = useState(true);

  let inputClass = "";
  inputClass += " " + (isPrimary ? "textarea-primary" : "textarea-secondary");
  inputClass += " " + (isDark ? "dark" : "");
  inputClass += " " + (dimension || "medium");
  inputClass += " " + (isMatched ? "" : "unmatched");

  function listener(e: ChangeEvent<HTMLTextAreaElement>) {
    if (onType) {
      const { value } = e.target;
      if (matchRegex) {
        const status = value.match(matchRegex) !== null;
        setIsMatched(status);
        onType(value, status);
      } else onType(value);
    }
  }

  return <textarea onChange={listener} className={inputClass} {...inherited} />;
};

export default TextArea;
