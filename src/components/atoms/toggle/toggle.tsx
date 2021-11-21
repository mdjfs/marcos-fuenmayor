import { useEffect, useState } from "react";
import { useBiThemedClasses } from "../../../hooks/useClasses";
import { ToggleProps } from "./toggle.interfaces";
import "./toggle.scss";

const Toggle = ({
  left,
  right,
  onToggle,
  defaultStatus,
  ...props
}: ToggleProps) => {
  const [status, setStatus] = useState<boolean>(
    defaultStatus !== undefined ? defaultStatus : true
  );
  const classes = useBiThemedClasses(props, "toggle");
  const direction = status ? "left" : "right";
  const toggleClass = classes + " " + direction;

  const toggle = () => {
    setStatus(!status);
    if (onToggle) onToggle(!status);
  };

  return (
    <div className={toggleClass} onClick={toggle}>
      <button>{status ? left : right}</button>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};

export default Toggle;
