import React from "react";
import "./GraphScreen.css";
import GraphNavbar from "./GraphNavbar";
import GraphVisuals from "./GraphVisuals";

const GraphScreen = () => {
  return (
    <div className="graphAppContainer animate-fade-in">
      <div className="screen-header">
        <span className="screen-eyebrow">GRAPH ALGORITHMS</span>
        <h1 className="screen-title">Graph Pathfinding Visualizer</h1>
        <p className="screen-subtitle">
          Place a Start node (S) and End node (E), optionally draw Wall obstacles, and watch BFS or DFS navigate the grid to locate the shortest path.
        </p>
      </div>

      <GraphNavbar />
      <GraphVisuals />
    </div>
  );
};

export default GraphScreen;
