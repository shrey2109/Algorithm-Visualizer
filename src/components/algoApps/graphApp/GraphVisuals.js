import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./GraphVisuals.css";
import GraphWorking from "./GraphWorking";

const GraphVisuals = () => {
  const hash = (i, j) => {
    return 2001 * (i + 1000) + (j + 1000);
  };
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();
  const grid = [...myState.map];
  let editingFlag = false;
  const btnEvent = () => {
    if (editingFlag) editingFlag = false;
    else editingFlag = true;
  };

  const activeModeClass = myState.startPoint
    ? "cursor-place-start"
    : myState.endPoint
    ? "cursor-place-end"
    : myState.wallPoint
    ? "cursor-place-wall"
    : "";

  const generateMap = () => {
    return grid.map((row, index) => {
      return (
        <div className="map-row" key={index}>
          {row.map((block) => {
            let has = hash(block.r, block.c);
            return (
              <button
                className="gridbtn"
                id={has}
                key={has}
                onClick={() => btnClick(has, block)}
                onMouseDown={() => btnEvent()}
                onMouseUp={() => btnEvent()}
                onMouseMove={() => wallClick(has, block)}
                aria-label={`Cell (${block.r}, ${block.c})`}
              ></button>
            );
          })}
        </div>
      );
    });
  };

  const btnClick = (e, block) => {
    if (myState.startPoint) {
      block.isStart = true;
      const cell = document.getElementById(e);
      if (cell) {
        cell.style.backgroundColor = "#16a34a";
        cell.style.color = "#ffffff";
        cell.innerText = "S";
        cell.classList.add("placed-start-node");
      }
      dispatch({
        type: "START",
        startPoint: false,
      });
      const startBtn = document.getElementById("start");
      if (startBtn) {
        startBtn.disabled = true;
        startBtn.style.cursor = "not-allowed";
      }
    }

    if (myState.endPoint) {
      block.isEnd = true;
      const cell = document.getElementById(e);
      if (cell) {
        cell.style.backgroundColor = "#dc2626";
        cell.style.color = "#ffffff";
        cell.innerText = "E";
        cell.classList.add("placed-end-node");
      }
      dispatch({
        type: "END",
        endPoint: false,
      });
      const endBtn = document.getElementById("end");
      if (endBtn) {
        endBtn.disabled = true;
        endBtn.style.cursor = "not-allowed";
      }
    }

    if (myState.reset) {
      block.reset = true;
      generateMap();
    }
  };

  const wallClick = (e, block) => {
    if (myState.wallPoint && editingFlag) {
      if (block.isStart === false && block.isEnd === false) {
        block.isWall = true;
        const cell = document.getElementById(e);
        if (cell) {
          cell.style.backgroundColor = "var(--wall-node, #334155)";
          cell.style.color = "#ffffff";
          cell.innerText = "W";
          cell.classList.add("placed-wall-node");
        }
      }
    }
  };

  return (
    <div className="visuals">
      <div className="visualizer-stage-card">
        <div className="stage-header">
          <div className="stage-title-group">
            <span className="stage-title">Graph Matrix Canvas</span>
            <span className="stage-badge">
              {myState.graphAlgorithm ? myState.graphAlgorithm.toUpperCase() : "BFS"} Mode
            </span>
          </div>

          <div className="graph-mode-strip">
            {myState.startPoint && (
              <span className="grid-status-pill pill-start">
                <span className="pulse-mini-dot"></span> Click cell to place Start Node (S)
              </span>
            )}
            {myState.endPoint && (
              <span className="grid-status-pill pill-end">
                <span className="pulse-mini-dot"></span> Click cell to place End Node (E)
              </span>
            )}
            {myState.wallPoint && (
              <span className="grid-status-pill pill-wall">
                <span className="pulse-mini-dot"></span> Click & drag across cells to draw walls
              </span>
            )}
            {!myState.startPoint && !myState.endPoint && !myState.wallPoint && !myState.graphplay && (
              <span className="grid-status-pill pill-idle">Grid Ready • 14 × {Math.floor(window.innerWidth / 38)} Matrix</span>
            )}
            {myState.graphplay && (
              <span className="grid-status-pill pill-running">Traversing Graph...</span>
            )}
          </div>

          <div className="graph-legend">
            <span className="legend-item"><span className="legend-box start-box">S</span>Start</span>
            <span className="legend-item"><span className="legend-box end-box">E</span>End</span>
            <span className="legend-item"><span className="legend-box wall-box">W</span>Wall</span>
            <span className="legend-item"><span className="legend-box visited-box"></span>Visited</span>
            <span className="legend-item"><span className="legend-box path-box"></span>Shortest Path</span>
          </div>
        </div>

        <div className="grid-scroll-wrapper">
          <div className={`map-container ${activeModeClass}`}>
            {generateMap()}
          </div>
        </div>
      </div>

      <div className="code-container-card">
        <GraphWorking />
      </div>
    </div>
  );
};

export default GraphVisuals;
