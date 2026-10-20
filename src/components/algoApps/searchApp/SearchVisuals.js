import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./SearchVisuals.css";
import LinearSearch from "./LinearSearch";
import BinarySearch from "./BinarySearch";

const SearchVisuals = () => {
  const myState = useSelector((state) => state.updateProps);
  const color = myState.searchingColor || "#76afff";
  const speed = myState.searchingSpeed || 1000;

  // Responsive container
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerWidth = Math.min(Math.max(windowWidth - 120, 320), 1100);
  let boxWidth = 65;
  const boxSpacing = 14;

  const totalBoxes = myState.arrValSearch.length;

  const maxBoxesDefault = Math.floor(
    (containerWidth + boxSpacing) / (boxWidth + boxSpacing)
  );

  let visibleArray = myState.arrValSearch;
  let warning = "";

  if (totalBoxes > maxBoxesDefault) {
    boxWidth = 48;
    const maxBoxesShrink = Math.floor(
      (containerWidth + boxSpacing) / (boxWidth + boxSpacing)
    );

    if (totalBoxes > maxBoxesShrink) {
      visibleArray = myState.arrValSearch.slice(0, maxBoxesShrink);
      warning = "Too many numbers, extra inputs are not shown.";
    }
  }

  return (
    <div className="visuals">
      <div className="visualizer-stage-card">
        <div className="stage-header">
          <div className="stage-title-group">
            <span className="stage-title">Search Canvas</span>
            <span className="stage-badge">{visibleArray.length} items</span>
            {myState.searchVal !== "" && (
              <span className="target-badge">Target: {myState.searchVal}</span>
            )}
          </div>

          <div className="search-status-container">
            {myState.isfound && (
              <div className="search-result-badge found">
                ✓ Element Found
              </div>
            )}
            {myState.isnotfound && (
              <div className="search-result-badge not-found">
                ✕ Not Found
              </div>
            )}
          </div>
        </div>

        <div className="visualizer" style={{ minHeight: "180px", alignItems: "center" }}>
          <div
            className="visual_items"
            style={{
              width: `${containerWidth}px`,
              position: "relative",
              height: `${boxWidth + 40}px`,
              borderBottom: "none",
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
                      borderRadius: "10px",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                      transition: "background-color 0.2s ease, border-radius 0.2s ease",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: "700",
                        textAlign: "center",
                        color: "#ffffff",
                      }}
                    >
                      {item[0]}
                    </div>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: "6px",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {item[1]}
                  </div>
                </div>
              );
            })}

            {visibleArray.length === 0 && (
              <div className="empty-stage-prompt">
                <span>Enter array numbers and target above, then click PLAY</span>
              </div>
            )}
          </div>
        </div>

        {warning && <p className="stage-warning">{warning}</p>}
      </div>

      <div className="code-container-card">
        <div className="code">
          {myState.searchingAlgorithm === "linear" && <LinearSearch />}
          {myState.searchingAlgorithm === "binary" && <BinarySearch />}
        </div>
      </div>
    </div>
  );
};

export default SearchVisuals;
