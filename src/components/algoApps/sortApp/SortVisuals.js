import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./SortVisuals.css";
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import SelectionSort from "./SelectionSort";
import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";

const SortVisuals = () => {
  const myState = useSelector((state) => state.updateProps);
  const color = myState.sortingColor || "#76afff";
  const speed = myState.sortingSpeed || 1000;
  const maxHeight = 300;

  const values = myState.arrVal.map((item) => item[0]);
  const maxVal = values.length > 0 ? Math.max(...values) : 100;

  // Responsive container width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerWidth = Math.min(Math.max(windowWidth - 120, 320), 1100);
  let barSpacing = 8;
  let barWidth = 25;

  const totalBars = myState.arrVal.length;

  const maxBarsDefault = Math.floor(
    (containerWidth + barSpacing) / (barWidth + barSpacing)
  );

  let visibleArray = myState.arrVal;
  let warning = "";

  if (totalBars > maxBarsDefault) {
    barWidth = 15;
    const maxBarsShrink = Math.floor(
      (containerWidth + barSpacing) / (barWidth + barSpacing)
    );

    if (totalBars > maxBarsShrink) {
      visibleArray = myState.arrVal.slice(0, maxBarsShrink);
      warning = "Too many numbers, extra inputs are not shown.";
    }
  }

  return (
    <div className="visuals">
      <div className="visualizer-stage-card">
        <div className="stage-header">
          <div className="stage-title-group">
            <span className="stage-title">Sorting Canvas</span>
            <span className="stage-badge">{visibleArray.length} items</span>
          </div>
          <div className="stage-legend">
            <span className="legend-item"><span className="legend-dot" style={{ backgroundColor: color }}></span>Default</span>
            <span className="legend-item"><span className="legend-dot" style={{ backgroundColor: '#0f172a' }}></span>Comparing</span>
            <span className="legend-item"><span className="legend-dot" style={{ backgroundColor: '#22c55e' }}></span>Sorted</span>
          </div>
        </div>

        <div className="visualizer">
          <div
            className="visual_items"
            style={{
              width: `${containerWidth}px`,
              position: "relative",
              height: `${maxHeight + 50}px`,
            }}
          >
            {visibleArray.map((item, index) => {
              const scaledHeight = maxVal > 0 ? (item[0] / maxVal) * maxHeight : 10;
              return (
                <div
                  className="visual_item"
                  data-testid="sortBar"
                  key={item[1]}
                  id={item[1]}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    transition: `${speed / 1200}s linear all`,
                    transform: `translateX(${index * (barWidth + barSpacing)}px)`,
                    textAlign: "center",
                  }}
                >
                  {/* Value above bar */}
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      marginBottom: "6px",
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-mono, monospace)"
                    }}
                  >
                    {item[0]}
                  </div>

                  {/* Bar */}
                  <div
                    className="visual"
                    style={{
                      width: `${barWidth}px`,
                      height: `${scaledHeight}px`,
                      backgroundColor: color,
                      borderRadius: "4px 4px 0 0",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.15)",
                    }}
                  ></div>
                </div>
              );
            })}

            {visibleArray.length === 0 && (
              <div className="empty-stage-prompt">
                <span>Enter numbers above and click PLAY to start sorting</span>
              </div>
            )}
          </div>
        </div>

        {warning && <p className="stage-warning">{warning}</p>}
      </div>

      <div className="code-container-card">
        <div className="code">
          {myState.sortingAlgorithm === "bubble" && <BubbleSort />}
          {myState.sortingAlgorithm === "insertion" && <InsertionSort />}
          {myState.sortingAlgorithm === "selection" && <SelectionSort />}
          {myState.sortingAlgorithm === "merge" && <MergeSort />}
          {myState.sortingAlgorithm === "quick" && <QuickSort />}
        </div>
      </div>
    </div>
  );
};

export default SortVisuals;
