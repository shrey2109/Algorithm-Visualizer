import React from "react";
import QueueNavbar from "./QueueNavbar";
import QueueVisuals from "./QueueVisuals";
import "./QueueScreen.css";

const QueueScreen = () => {
  return (
    <div className="queueAppContainer animate-fade-in">
      <div className="screen-header">
        <span className="screen-eyebrow">DATA STRUCTURE</span>
        <h1 className="screen-title">Queue Visualizer</h1>
        <p className="screen-subtitle">
          Demonstrate First-In-First-Out (FIFO) queue principles. Enqueue new items at the Rear and dequeue serviced items from the Front.
        </p>
      </div>

      <QueueNavbar />
      <QueueVisuals />
    </div>
  );
};

export default QueueScreen;
