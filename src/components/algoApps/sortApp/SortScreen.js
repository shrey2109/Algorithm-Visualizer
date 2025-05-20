import React from "react";

import SortNavbar from "./SortNavbar";
import SortVisuals from "./SortVisuals";

import "./SortScreen.css";

const SortScreen = () => {
  return (
    <>
      <div className="sortAppContainer">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#ffffff",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "16px",
              padding: "0.6rem 1.5rem",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: "2px",
              display: "inline-block",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
          >
            Sorting Visualizer
          </h1>
        </div>

        <SortNavbar />
        <SortVisuals />
      </div>
    </>
  );
};

export default SortScreen;
