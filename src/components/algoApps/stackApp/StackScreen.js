import React from "react";
import StackNavbar from "./StackNavbar";
import StackVisuals from "./StackVisuals";
import "./StackScreen.css";

const StackScreen = () => {
  return (
    <div className="stackAppScreen animate-fade-in">
      <div className="screen-header">
        <span className="screen-eyebrow">DATA STRUCTURE</span>
        <h1 className="screen-title">Stack Visualizer</h1>
        <p className="screen-subtitle">
          Demonstrate Last-In-First-Out (LIFO) stack operations. Push elements onto the stack, pop from the top, and watch the underlying memory pointer update.
        </p>
      </div>

      <StackNavbar />
      <StackVisuals />
    </div>
  );
};

export default StackScreen;
