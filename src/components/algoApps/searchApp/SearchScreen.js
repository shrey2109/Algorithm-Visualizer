import React from "react";
import SearchNavbar from "./SearchNavbar";
import SearchVisuals from "./SearchVisuals";
import "./SearchScreen.css";

const SearchScreen = () => {
  return (
    <div className="searchAppScreen animate-fade-in">
      <div className="screen-header">
        <span className="screen-eyebrow">ALGORITHM DEMO</span>
        <h1 className="screen-title">Search Visualizer</h1>
        <p className="screen-subtitle">
          Observe how Linear Search checks items one by one, and Binary Search divides sorted arrays in half at each step.
        </p>
      </div>

      <SearchNavbar />
      <SearchVisuals />
    </div>
  );
};

export default SearchScreen;
