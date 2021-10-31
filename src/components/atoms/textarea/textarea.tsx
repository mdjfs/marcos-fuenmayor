import { ChangeEvent, useState } from "react";
import { useClasses } from "../../../common/helpers/components.helpers";
import { TextAreaProps } from "./textarea.interfaces";
import "./textarea.scss";

const TextArea = ({ onType, matchRegex, ...props }: TextAreaProps) => {
  const [isMatched, setIsMatched] = useState(true);

  const [classes, inherited] = useClasses("textarea", props);
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

  return <textarea onChange={listener} className={inputClass} {...inherited} />;
};

export default TextArea;
