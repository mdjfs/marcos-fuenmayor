import { useEffect, useState } from "react";
import { useClasses } from "../../../common/helpers/components.helpers";
import { ToggleProps } from "./toggle.interfaces";
import "./toggle.scss";

const Toggle = ({ left, right, onToggle, ...props }: ToggleProps) => {
  const [status, setStatus] = useState(true);
  const [classes] = useClasses("toggle", { props, IsBiThemed: true });
  const direction = status ? "left" : "right";
  const toggleClass = classes + " " + direction;

  useEffect(() => {
    if (onToggle) onToggle(status);
  }, [status]);

  return (
    <div className={toggleClass} onClick={() => setStatus(!status)}>
      <button>{status ? left : right}</button>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};

export default Toggle;
