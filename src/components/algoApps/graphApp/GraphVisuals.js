import React from "react";
import { useSelector } from "react-redux";
import "./GraphVisuals.css";
import GraphWorking from "./GraphWorking";

const GraphVisuals = () => {
  const hash = (i, j) => {
    return 2001 * (i + 1000) + (j + 1000);
  };
  const myState = useSelector((state) => state.updateProps);
  const grid = [...myState.map];
  let editingFlag = false;
  const btnEvent = () => {
    if (editingFlag) editingFlag = false;
    else editingFlag = true;
  };

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
                onClick={(e) => btnClick(has, block)}
                onMouseDown={() => btnEvent()}
                onMouseUp={() => btnEvent()}
                onMouseMove={(e) => wallClick(has, block)}
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
      document.getElementById(e).style.backgroundColor = "#5555ff";
      document.getElementById(e).innerText = "S";
      myState.startPoint = false;
      document.getElementById("start").disabled = true;
      document.getElementById("start").style.backgroundColor = "#CCCCCC";
      document.getElementById("start").style.cursor = "not-allowed";
    }

    if (myState.endPoint) {
      block.isEnd = true;
      document.getElementById(e).style.backgroundColor = "#00e600";
      document.getElementById(e).innerText = "E";
      myState.endPoint = false;
      document.getElementById("end").disabled = true;
      document.getElementById("end").style.backgroundColor = "#CCCCCC";
      document.getElementById("end").style.cursor = "not-allowed";
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
        document.getElementById(e).style.backgroundColor = "gray";
        document.getElementById(e).innerText = "W";
      }
    }
  };

  return (
    <div className="visuals">
      <div className="map-container">
        {generateMap()}
        <GraphWorking />
      </div>
    </div>
  );
};

export default GraphVisuals;
