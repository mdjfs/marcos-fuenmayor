import { useEffect, useState } from "react";
import { ToggleProps } from "./toggle.interfaces";
import "./toggle.scss";

const Toggle = ({
  isDark,
  isPrimary,
  dimension,
  left,
  right,
  onToggle,
}: ToggleProps) => {
  const [status, setStatus] = useState(true);

  let toggleClass = "";
  toggleClass += " " + (isPrimary ? "toggle-primary" : "toggle-secondary");
  toggleClass += " " + (isDark ? "dark" : "");
  toggleClass += " " + (dimension || "medium");
  toggleClass += " " + (status ? "left" : "right");

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
