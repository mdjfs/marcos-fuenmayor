import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useClasses } from "../../../common/helpers/components.helpers";
import { RadioProps } from "./radio.interfaces";
import "./radio.scss";

const Radio = ({
  choices,
  onSelectChoice,
  isMultiple,
  ...props
}: RadioProps) => {
  const [classes] = useClasses("radio", { props });

  const radioClass = `${classes} ${isMultiple ? "multiple" : "single"}`;

  if (!isMultiple) {
    const [selected, setSelected] = useState<string>();

    useEffect(() => {
      if (choices && selected && onSelectChoice) {
        const [choice] = choices.filter(([key]) => key === selected);
        onSelectChoice(choice);
      }
    }, [selected]);

    return (
      <div className={radioClass}>
        {choices?.map(([key, content]) => (
          <div
            key={key}
            className={`choice ${selected === key ? "selected" : ""}`}
          >
            <button onClick={() => setSelected(key)}></button>
            {content}
          </div>
        ))}
      </div>
    );
  } else {
    const [selected, setSelected] = useState<string[]>([]);

    useEffect(() => {
      if (choices && selected && onSelectChoice) {
        const choiceArr = choices.filter(([key]) => selected.includes(key));
        onSelectChoice(choiceArr);
      }
    }, [selected]);

    return (
      <div className={radioClass}>
        {choices?.map(([key, content]) => {
          const isSelected = selected?.includes(key);
          return (
            <div key={key} className={`choice ${isSelected ? "selected" : ""}`}>
              <button
                onClick={() => {
                  if (isSelected)
                    setSelected(selected.filter((r) => r !== key));
                  else setSelected([...selected, key]);
                }}
              >
                {isSelected && <FaCheck />}
              </button>
              {content}
            </div>
          );
        })}
      </div>
    );
  }
};

export default Radio;
