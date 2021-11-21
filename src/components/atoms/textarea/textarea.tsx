import { ChangeEvent, useState } from "react";
import { useBiThemedClasses } from "../../../hooks/useClasses";
import { TextAreaProps } from "./textarea.interfaces";
import "./textarea.scss";

const TextArea = ({ onType, matchRegex, ...props }: TextAreaProps) => {
  const [isMatched, setIsMatched] = useState(true);

  const classes = useBiThemedClasses(props, "textarea");
  const matched = isMatched ? "matched" : "unmatched";
  const inputClass = classes + " " + matched;

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

  return <textarea {...props} onChange={listener} className={inputClass} />;
};

export default TextArea;
