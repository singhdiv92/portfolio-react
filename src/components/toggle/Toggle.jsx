import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import React, { useContext } from "react";
import { ThemeContext } from "../../context";

export const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src={Sun} className="t-icon" alt="" />
      <img src={Moon} className="t-icon" alt="" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};
