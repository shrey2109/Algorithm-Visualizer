import React from "react";
import SortNavbar from "./SortNavbar";
import SortVisuals from "./SortVisuals";
import "./SortScreen.css";

const SortScreen = () => {
  return (
    <div className="sortAppContainer animate-fade-in">
      <div className="screen-header">
        <span className="screen-eyebrow">ALGORITHM DEMO</span>
        <h1 className="screen-title">Sorting Visualizer</h1>
        <p className="screen-subtitle">
          Configure an input array, select a sorting algorithm and speed, then watch element comparisons and swaps in real time.
        </p>
      </div>

      <SortNavbar />
      <SortVisuals />
    </div>
  );
};

export default SortScreen;
