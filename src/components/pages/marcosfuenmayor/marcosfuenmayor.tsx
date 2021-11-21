import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ReduxStore } from "../../../common/interfaces/theme.interfaces";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../templates/home/home";

import "./marcosfuenmayor.scss";
import About from "../../templates/about/about";
import SolutionsTemplate from "../../templates/solutions/solutions";

export const MarcosFuenmayor = () => {
  const isDark = useSelector((state: ReduxStore) => state.theme);

  useEffect(() => {
    if (isDark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [isDark]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="contact" element={<Home contact />} />
          <Route path="about" element={<About />} />
          <Route path="solutions" element={<SolutionsTemplate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MarcosFuenmayor;
