import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ReduxStore } from "../../../common/interfaces/theme.interfaces";
import { useThemedClasses } from "../../../hooks/useClasses";
import Home from "../../templates/home/home";
import "./marcosfuenmayor.scss";

export const MarcosFuenmayor = () => {
  const className = useThemedClasses({}, "root");
  const isDark = useSelector((state: ReduxStore) => state.theme);

  useEffect(() => {
    if (isDark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [isDark]);
  return (
    <div className={className}>
      <Home />
    </div>
  );
};

export default MarcosFuenmayor;
