import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./GraphNavbar.css";

const GraphNavbar = () => {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
  const columnLimit = Math.max(10, Math.floor(screenWidth / 38));

  const generateMap = useCallback(() => {
    let grid = [];
    for (let i = 0; i < 14; i++) {
      let temp = [];
      for (let j = 0; j < columnLimit; j++) {
        temp.push({
          r: i,
          c: j,
          isStart: false,
          isEnd: false,
          isWall: false,
          isWeight: false,
        });
      }
      grid.push(temp);
    }

    dispatch({
      type: "UPDATE_MAP",
      map: grid,
    });
  }, [columnLimit, dispatch]);

  useEffect(() => {
    if (!myState.graphAlgorithm) {
      dispatch({
        type: "UPDATE_GRAPHALGORITHM",
        graphAlgorithm: "bfs",
      });
    }
    generateMap();
  }, [dispatch, generateMap, myState.graphAlgorithm]);

  const handleStart = () => {
    if (myState.startPoint) {
      dispatch({ type: "START", startPoint: false });
      return;
    }
    dispatch({ type: "END", endPoint: false });
    dispatch({ type: "WALL", wallPoint: false });
    dispatch({
      type: "START",
      startPoint: true,
    });
  };

  const handleEnd = () => {
    if (myState.endPoint) {
      dispatch({ type: "END", endPoint: false });
      return;
    }
    dispatch({ type: "START", startPoint: false });
    dispatch({ type: "WALL", wallPoint: false });
    dispatch({
      type: "END",
      endPoint: true,
    });
  };

  const handleWall = () => {
    const nextWall = !myState.wallPoint;
    dispatch({
      type: "WALL",
      wallPoint: nextWall,
    });
    if (nextWall) {
      dispatch({ type: "START", startPoint: false });
      dispatch({ type: "END", endPoint: false });
    }
  };

  const handlePlay = () => {
    const btnElm = document.getElementsByClassName("btn");
    [...btnElm].forEach((element) => {
      element.style.backgroundColor = "#94a3b8";
      element.style.cursor = "not-allowed";
    });

    dispatch({
      type: "PLAY_PAUSE_GRAPH",
      graphplay: true,
    });
  };

  const handleAlgo = (graphAlgo) => {
    dispatch({
      type: "UPDATE_GRAPHALGORITHM",
      graphAlgorithm: graphAlgo,
    });
  };

  const handleClearPath = () => {
    // Reset visited and path styling only, preserving start, end, walls
    const hash = (i, j) => 2001 * (i + 1000) + (j + 1000);
    const grid = [...myState.map];
    for (let i = 0; i < 14; i++) {
      for (let j = 0; j < columnLimit; j++) {
        const block = grid[i] && grid[i][j];
        if (block && !block.isStart && !block.isEnd && !block.isWall) {
          const cell = document.getElementById(hash(i, j));
          if (cell) {
            cell.style.backgroundColor = "";
            cell.style.transitionDelay = "0ms";
            cell.innerText = "";
          }
        }
      }
    }
    const playBtn = document.getElementById("play");
    if (playBtn) {
      playBtn.style.backgroundColor = "";
      playBtn.style.cursor = "pointer";
    }
    dispatch({
      type: "PLAY_PAUSE_GRAPH",
      graphplay: false,
    });
  };

  const handleRandomMaze = () => {
    handleClearPath();
    const hash = (i, j) => 2001 * (i + 1000) + (j + 1000);
    const grid = [...myState.map];
    for (let i = 0; i < 14; i++) {
      for (let j = 0; j < columnLimit; j++) {
        const block = grid[i] && grid[i][j];
        if (block && !block.isStart && !block.isEnd) {
          const isObstacle = Math.random() < 0.28;
          block.isWall = isObstacle;
          const cell = document.getElementById(hash(i, j));
          if (cell) {
            if (isObstacle) {
              cell.style.backgroundColor = "var(--wall-node, #334155)";
              cell.style.color = "#ffffff";
              cell.innerText = "W";
              cell.classList.add("placed-wall-node");
            } else {
              cell.style.backgroundColor = "";
              cell.style.color = "";
              cell.innerText = "";
              cell.classList.remove("placed-wall-node");
            }
          }
        }
      }
    }
    dispatch({
      type: "UPDATE_MAP",
      map: grid,
    });
  };

  const handleReset = () => {
    // Reset buttons
    const startBtn = document.getElementById("start");
    if (startBtn) {
      startBtn.disabled = false;
      startBtn.style.backgroundColor = "";
      startBtn.style.cursor = "pointer";
    }
    const endBtn = document.getElementById("end");
    if (endBtn) {
      endBtn.disabled = false;
      endBtn.style.backgroundColor = "";
      endBtn.style.cursor = "pointer";
    }
    const wallBtn = document.getElementById("wall");
    if (wallBtn) {
      wallBtn.disabled = false;
      wallBtn.style.backgroundColor = "";
      wallBtn.style.cursor = "pointer";
    }
    const playBtn = document.getElementById("play");
    if (playBtn) {
      playBtn.style.backgroundColor = "";
      playBtn.style.cursor = "pointer";
    }

    // Reset grid cells DOM
    const hash = (i, j) => 2001 * (i + 1000) + (j + 1000);
    for (let i = 0; i < 14; i++) {
      for (let j = 0; j < columnLimit; j++) {
        const cell = document.getElementById(hash(i, j));
        if (cell) {
          cell.style.backgroundColor = "";
          cell.style.transitionDelay = "0ms";
          cell.innerText = "";
          cell.classList.remove("placed-start-node", "placed-end-node", "placed-wall-node");
        }
      }
    }

    dispatch({
      type: "PLAY_PAUSE_GRAPH",
      graphplay: false,
    });
    dispatch({
      type: "START",
      startPoint: false,
    });
    dispatch({
      type: "END",
      endPoint: false,
    });
    dispatch({
      type: "WALL",
      wallPoint: false,
    });

    generateMap();
  };

  const handleClick = (algorithm) => {
    navigate(`/${algorithm}-info`);
  };

  return (
    <div className="graphNavDiv">
      <div className="graph-controls-row">
        <FormControl variant="filled" sx={{ m: 1, minWidth: 180, flex: 1 }}>
          <InputLabel>Algorithm</InputLabel>
          <Select
            className="menuClass"
            id="algorithm"
            value={myState.graphAlgorithm || "bfs"}
            onChange={(e) => handleAlgo(e.target.value)}
            disabled={myState.graphplay}
          >
            <MenuItem className="itmClass" value="bfs">
              BFS (Breadth-First)
            </MenuItem>
            <MenuItem className="itmClass" value="dfs">
              DFS (Depth-First)
            </MenuItem>
          </Select>
        </FormControl>

        <div className="graph-actions-group">
          <button
            id="start"
            className={`btn btn-node-start ${myState.startPoint ? "selected-node" : ""}`}
            onClick={handleStart}
            disabled={myState.graphplay}
            title="Click to select, then click a cell on the grid"
          >
            <span className="node-indicator-dot dot-green"></span>
            START NODE
          </button>

          <button
            id="end"
            className={`btn btn-node-end ${myState.endPoint ? "selected-node" : ""}`}
            onClick={handleEnd}
            disabled={myState.graphplay}
            title="Click to select, then click a cell on the grid"
          >
            <span className="node-indicator-dot dot-red"></span>
            END NODE
          </button>

          <button
            id="wall"
            className={`btn btn-node-wall ${myState.wallPoint ? "selected-node" : ""}`}
            onClick={handleWall}
            disabled={myState.graphplay}
            title="Click to select, then click & drag across grid"
          >
            <span className="node-indicator-dot dot-slate"></span>
            WALL NODES
          </button>

          <button
            id="play"
            className="btn play"
            onClick={handlePlay}
            disabled={myState.graphplay}
          >
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
              <polygon points="6 3 20 12 6 21 6 3"></polygon>
            </svg>
            PLAY
          </button>

          <button
            type="button"
            className="btn btn-tool-action"
            onClick={handleRandomMaze}
            disabled={myState.graphplay}
            title="Generate random maze obstacles"
          >
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '5px' }}>
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            Add Maze
          </button>

          <button
            type="button"
            className="btn btn-tool-action"
            onClick={handleClearPath}
            disabled={myState.graphplay}
            title="Clear path visualization while keeping walls"
          >
            Clear Path
          </button>

          <button
            type="button"
            className="btn btn-reset-grid"
            onClick={handleReset}
            disabled={myState.graphplay}
            title="Clear all walls, nodes, and path"
          >
            Reset Grid
          </button>

          {myState.graphAlgorithm && (
            <button
              id="learnMoreGraphBtn"
              className="info-learn-btn"
              onClick={() => handleClick(myState.graphAlgorithm)}
            >
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}>
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              {`LEARN ABOUT ${myState.graphAlgorithm.toUpperCase()}`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GraphNavbar;
