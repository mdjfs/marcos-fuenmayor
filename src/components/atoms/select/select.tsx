import Input from "../input/input";
import { Choice, SelectProps } from "./select.interfaces";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import "./select.scss";
import { ChangeEvent, useState, CSSProperties, useEffect } from "react";
import { useBiThemedClasses } from "../../../hooks/useClasses";

const Select = ({ onSelectChoice, choices, ...props }: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>();
  const [filtered, setFiltered] = useState<Array<string>>();
  const [choice, setChoice] = useState<Choice>();
  const firstRender = isOpen === undefined;
  const classes = useBiThemedClasses(props, "select");
  const status = firstRender ? "" : isOpen ? "opened" : "closed";
  const selectClass = classes + " " + status;

  function getKey([key]: Choice) {
    return key;
  }

  function filterChoices([key, content]: Choice, value: string) {
    value = value.toLowerCase();
    key = key.toLowerCase();
    if (typeof content === "string") {
      content = content.toLowerCase();
      return key.includes(value) || (content as string).includes(value);
    } else {
      return key.includes(value);
    }
  }

  function inputListener(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    if (!isOpen) setIsOpen(true);
    if (choices) {
      const filtered = choices.filter((choice) => filterChoices(choice, value));
      const filteredKeys = filtered.map(getKey);
      const choicesKeys = choices.map(getKey);
      setFiltered(filteredKeys.length > 0 ? filteredKeys : choicesKeys);
    }
  }

  const choicesKeys = (choices || []).map(getKey);
  let dropdownList: string[] = [];
  if (filtered && filtered.length > 0) dropdownList = filtered;
  else dropdownList = choicesKeys;

  const lenghtKeys = dropdownList.length;
  const dropdownHeight = 100 * lenghtKeys + "%";
  const selectStyle = { "--dropdown-height": dropdownHeight } as CSSProperties;

  useEffect(() => {
    if (choice && isOpen) setIsOpen(false);
    if (choice && onSelectChoice) onSelectChoice(choice);
    else if (!choice && onSelectChoice) onSelectChoice(null);
  }, [choice]);

  return (
    <div className={selectClass} style={selectStyle}>
      <div className="search">
        {!choice && (
          <>
            <Input
              dimension={props.dimension}
              isPrimary={props.isPrimary}
              isDark={props.isDark}
              onChange={inputListener}
            />
            <button onClick={() => setIsOpen(!(isOpen || false))}>
              <FaAngleDown />
            </button>
          </>
        )}
        {choice && (
          <>
            <Input
              dimension={props.dimension}
              isPrimary={props.isPrimary}
              isDark={props.isDark}
              disabled
            />
            <div className="selected">{choice[1]}</div>
            <button onClick={() => setChoice(undefined)}>
              <FaTimes />
            </button>
          </>
        )}
        <div className="dropdown">
          {choices?.map((choice) => {
            const isHidden = dropdownList.includes(choice[0]);
            return (
              <div
                className={`choice ${isHidden ? "" : "hidden"}`}
                key={choice[0]}
                onClick={() => setChoice(choice)}
              >
                {choice[1]}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Select;
