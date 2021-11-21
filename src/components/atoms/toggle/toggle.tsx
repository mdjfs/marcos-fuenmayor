import { useEffect, useState } from "react";
import { useBiThemedClasses } from "../../../hooks/useClasses";
import { ToggleProps } from "./toggle.interfaces";
import "./toggle.scss";

const Toggle = ({ left, right, onToggle, ...props }: ToggleProps) => {
  const [status, setStatus] = useState(true);
  const classes = useBiThemedClasses(props, "toggle");
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
