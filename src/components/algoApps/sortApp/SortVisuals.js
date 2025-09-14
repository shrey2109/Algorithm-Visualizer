// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

// import "./SortVisuals.css";

// import BubbleSort from "./BubbleSort";
// import InsertionSort from "./InsertionSort";
// import SelectionSort from "./SelectionSort";
// import MergeSort from "./MergeSort";
// import QuickSort from "./QuickSort";

// const SortVisuals = () => {
//   const myState = useSelector((state) => state.updateProps);
//   const color = myState.sortingColor;
//   const speed = myState.sortingSpeed;
//   const maxHeight = 320;

//   const values = myState.arrVal.map((item) => item[0]);
//   const maxVal = Math.max(...values);

//   // Responsive container width
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const containerWidth = windowWidth - 100;
//   let barSpacing = 8;
//   let barWidth = 25;

//   const totalBars = myState.arrVal.length;
//   const maxAllowedWidth =
//     (containerWidth - (totalBars - 1) * barSpacing) / totalBars;

//   if (maxAllowedWidth < barWidth) {
//     barWidth = Math.max(5, maxAllowedWidth);
//   }

//   if (barWidth * totalBars + barSpacing * (totalBars - 1) > containerWidth) {
//     barSpacing = Math.max(
//       2,
//       (containerWidth - barWidth * totalBars) / (totalBars - 1)
//     );
//   }

//   return (
//     <div className="visuals">
//       <div className="visualizer">
//         <div
//           className="visual_items"
//           style={{
//             width: `${containerWidth}px`,
//             position: "relative", // needed for translateX animation
//             height: `${maxHeight + 40}px`,
//           }}
//         >
//           {myState.arrVal.map((item, index) => {
//             const scaledHeight = (item[0] / maxVal) * maxHeight;
//             return (
//               <div
//                 className="visual_item"
//                 data-testid="sortBar"
//                 key={item[1]}
//                 id={item[1]}
//                 style={{
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   transition: `${speed / 1200}s linear all`,
//                   transform: `translateX(${index * (barWidth + barSpacing)}px)`,
//                   textAlign: "center",
//                 }}
//               >
//                 {/* Value above bar */}
//                 <div style={{ fontSize: "13px", fontWeight: "bold" }}>
//                   {item[0]}
//                 </div>

//                 {/* Bar */}
//                 <div
//                   className="visual"
//                   style={{
//                     width: `${barWidth}px`,
//                     height: `${scaledHeight}px`,
//                     backgroundColor: color,
//                     boxShadow: "2px 1px 3px rgba(0,0,0,0.5)",
//                   }}
//                 ></div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <div className="code">
//         {myState.sortingAlgorithm === "bubble" && <BubbleSort />}
//         {myState.sortingAlgorithm === "insertion" && <InsertionSort />}
//         {myState.sortingAlgorithm === "selection" && <SelectionSort />}
//         {myState.sortingAlgorithm === "merge" && <MergeSort />}
//         {myState.sortingAlgorithm === "quick" && <QuickSort />}
//       </div>
//     </div>
//   );
// };

// export default SortVisuals;

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
  const color = myState.sortingColor;
  const speed = myState.sortingSpeed;
  const maxHeight = 320;

  const values = myState.arrVal.map((item) => item[0]);
  const maxVal = Math.max(...values);

  // Responsive container width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerWidth = windowWidth - 100;
  let barSpacing = 8;
  let barWidth = 25;

  const totalBars = myState.arrVal.length;

  // --- Step 1: how many bars can fit at default size ---
  const maxBarsDefault = Math.floor(
    (containerWidth + barSpacing) / (barWidth + barSpacing)
  );

  let visibleArray = myState.arrVal;
  let warning = "";

  if (totalBars > maxBarsDefault) {
    // --- Step 2: shrink bar width a bit ---
    barWidth = 15;
    const maxBarsShrink = Math.floor(
      (containerWidth + barSpacing) / (barWidth + barSpacing)
    );

    if (totalBars > maxBarsShrink) {
      // --- Step 3: still too many, trim and warn ---
      visibleArray = myState.arrVal.slice(0, maxBarsShrink);
      warning = "Too many numbers, extra inputs are not shown.";
    }
  }

  return (
    <div className="visuals">
      <div className="visualizer">
        <div
          className="visual_items"
          style={{
            width: `${containerWidth}px`,
            position: "relative",
            height: `${maxHeight + 40}px`,
          }}
        >
          {visibleArray.map((item, index) => {
            const scaledHeight = (item[0] / maxVal) * maxHeight;
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
                <div style={{ fontSize: "13px", fontWeight: "bold" }}>
                  {item[0]}
                </div>

                {/* Bar */}
                <div
                  className="visual"
                  style={{
                    width: `${barWidth}px`,
                    height: `${scaledHeight}px`,
                    backgroundColor: color,
                    boxShadow: "2px 1px 3px rgba(0,0,0,0.5)",
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      {warning && <p style={{ color: "red", marginTop: "10px" }}>{warning}</p>}

      <div className="code">
        {myState.sortingAlgorithm === "bubble" && <BubbleSort />}
        {myState.sortingAlgorithm === "insertion" && <InsertionSort />}
        {myState.sortingAlgorithm === "selection" && <SelectionSort />}
        {myState.sortingAlgorithm === "merge" && <MergeSort />}
        {myState.sortingAlgorithm === "quick" && <QuickSort />}
      </div>
    </div>
  );
};

export default SortVisuals;
