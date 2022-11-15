import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ButtonSection from "./components/ButtonSection";
import Portfolio from "./Portfolio";
import { useState, useEffect } from "react";

export default function App() {
  //console.log(localStorage.getItem("api"));
  const [isLightMode, setLightMode] = useState(
    localStorage.getItem("isLightMode") || "false"
  );
  const toggleLightMode = () => {
    setLightMode((prevValue) => {
      localStorage.setItem(
        "isLightMode",
        prevValue === "true" ? "false" : "true"
      );
      //wenn prevValue true war ist der nächste value false

      return prevValue === "true" ? "false" : "true";
    });
  };

  return (
    <div className="main">
      <div className="toggle-switch">
        <label>
          <input
            type="checkbox"
            onChange={toggleLightMode}
            checked={isLightMode === "true" ? true : false}
          ></input>
          <span className="slider"></span>
        </label>
      </div>
      {isLightMode === "true" && (
        <div
          className="container"
          id="light" /* style={{ backgroundColor: "white" }}>*/
        >
          <Portfolio></Portfolio>
        </div>
      )}
      {isLightMode === "false" && (
        <div className="container" id="dark">
          <Portfolio></Portfolio>
        </div>
      )}
    </div>
  );
}
