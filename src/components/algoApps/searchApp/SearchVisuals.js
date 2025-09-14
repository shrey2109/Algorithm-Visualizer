import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./SearchVisuals.css";

import LinearSearch from "./LinearSearch";
import BinarySearch from "./BinarySearch";

const SearchVisuals = () => {
  const myState = useSelector((state) => state.updateProps);
  const color = myState.searchingColor;
  const speed = myState.searchingSpeed;

  // Responsive container
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerWidth = windowWidth - 100; // available space
  let boxWidth = 75; // default
  const boxSpacing = 15;

  const totalBoxes = myState.arrValSearch.length;

  // check how many boxes can fit in default size
  const maxBoxesDefault = Math.floor(
    (containerWidth + boxSpacing) / (boxWidth + boxSpacing)
  );

  let visibleArray = myState.arrValSearch;
  let warning = "";

  if (totalBoxes > maxBoxesDefault) {
    // shrink size to fit more
    boxWidth = 50;
    const maxBoxesShrink = Math.floor(
      (containerWidth + boxSpacing) / (boxWidth + boxSpacing)
    );

    if (totalBoxes > maxBoxesShrink) {
      // still too many → trim array
      visibleArray = myState.arrValSearch.slice(0, maxBoxesShrink);
      warning = "Too many numbers, extra inputs are not shown.";
    }
  }

  return (
    <div className="visuals">
      <div
        className="visualizer"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div
          className="visual_items"
          style={{
            width: `${containerWidth}px`,
            position: "relative",
            height: `${boxWidth + 40}px`,
          }}
        >
          {visibleArray.map((item, index) => {
            return (
              <div
                className="visual_item"
                data-testid="searchGoal"
                key={item[1]}
                id={item[1]}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  transition: `${speed / 1200}s linear all`,
                  transform: `translateX(${index * (boxWidth + boxSpacing)}px)`,
                }}
              >
                <div
                  className="visual"
                  style={{
                    width: `${boxWidth}px`,
                    height: `${boxWidth}px`,
                    backgroundColor: color,
                    boxShadow: "2px 1px 2px",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {item[0]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {warning && <p style={{ color: "red", marginTop: "10px" }}>{warning}</p>}

      {myState.isfound === true && (
        <h1 style={{ color: "orange" }}> Number Found </h1>
      )}
      {myState.isnotfound === true && (
        <h1 style={{ color: "orange" }}> Number not Found </h1>
      )}

      <div className="code">
        {myState.searchingAlgorithm === "linear" && <LinearSearch />}
        {myState.searchingAlgorithm === "binary" && <BinarySearch />}
      </div>
    </div>
  );
};

export default SearchVisuals;
