import React from "react";

import "./SearchScreen.css";

import SearchNavbar from "./SearchNavbar";
import SearchVisuals from "./SearchVisuals";

const SearchScreen = () => {
  return (
    <>
      <div className="searchAppScreen">
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
            Search Visualizer
          </h1>
        </div>
        <SearchNavbar />
        <SearchVisuals />
      </div>
    </>
  );
};

export default SearchScreen;
