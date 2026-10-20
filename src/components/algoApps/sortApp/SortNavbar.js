import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./SortNavbar.css";

const SortNavbar = () => {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [arr, setArr] = useState("");

  useEffect(() => {
    if (!myState.sortingAlgorithm) {
      dispatch({
        type: "UPDATE_SORTINGALGORITHM",
        sortingAlgorithm: "bubble",
      });
    }
    if (!myState.sortingColor) {
      dispatch({
        type: "UPDATE_COLOR",
        sortingColor: "#76afff",
      });
    }
    if (!myState.sortingSpeed) {
      dispatch({
        type: "UPDATE_SPEED",
        sortingSpeed: 1000,
      });
    }
  }, [dispatch, myState.sortingAlgorithm, myState.sortingColor, myState.sortingSpeed]);

  const handleSort = (sortAlgo) => {
    dispatch({
      type: "UPDATE_SORTINGALGORITHM",
      sortingAlgorithm: sortAlgo,
    });
  };

  const handleColor = (sortColor) => {
    dispatch({
      type: "UPDATE_COLOR",
      sortingColor: sortColor,
    });
  };

  const handleSpeed = (sortSpeed) => {
    dispatch({
      type: "UPDATE_SPEED",
      sortingSpeed: sortSpeed,
    });
  };

  const handleArray = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^0-9\s]/g, "");
    setArr(filteredValue);
    let newArr = [];
    let tokenizer = filteredValue.trim().split(/\s+/);

    for (let i = 0; i < tokenizer.length; i++) {
      if (tokenizer[i]) {
        newArr.push([parseInt(tokenizer[i], 10), i]);
      }
    }
    dispatch({
      type: "UPDATE_ARRAY",
      arrVal: newArr,
    });
  };

  const handlePlayStart = () => {
    const playElem = document.getElementById("play");
    if (playElem) {
      playElem.style.backgroundColor = "#94a3b8";
      playElem.style.cursor = "not-allowed";
    }
    const sortElem = document.getElementById("sort");
    if (sortElem) sortElem.style.cursor = "not-allowed";
    const colorElem = document.getElementById("color");
    if (colorElem) colorElem.style.cursor = "not-allowed";
    const speedElem = document.getElementById("speed");
    if (speedElem) speedElem.style.cursor = "not-allowed";
    const textElem = document.getElementById("textfield");
    if (textElem) textElem.style.cursor = "not-allowed";

    dispatch({
      type: "PLAY_PAUSE",
      sortplay: true,
    });
  };

  const handleClick = (algorithm) => {
    navigate(`/${algorithm}-info`);
  };

  return (
    <div className="navDiv">
      <div className="controls-primary-row">
        <FormControl variant="filled" sx={{ m: 1, minWidth: 180, flex: 1 }}>
          <InputLabel>
            Algorithm <span style={{ color: "red" }}>*</span>
          </InputLabel>
          <Select
            className="menuClass"
            id="sort"
            value={myState.sortingAlgorithm || "bubble"}
            onChange={(e) => handleSort(e.target.value)}
            disabled={myState.sortplay}
          >
            <MenuItem className="itmClass" value="bubble">
              Bubble Sort
            </MenuItem>
            <MenuItem className="itmClass" value="insertion">
              Insertion Sort
            </MenuItem>
            <MenuItem className="itmClass" value="selection">
              Selection Sort
            </MenuItem>
            <MenuItem className="itmClass" value="merge">
              Merge Sort
            </MenuItem>
            <MenuItem className="itmClass" value="quick">
              Quick Sort
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="filled" sx={{ m: 1, minWidth: 140, flex: 1 }}>
          <InputLabel>
            Color <span style={{ color: "red" }}>*</span>
          </InputLabel>
          <Select
            className="menuClass"
            id="color"
            value={myState.sortingColor || "#76afff"}
            onChange={(e) => handleColor(e.target.value)}
            disabled={myState.sortplay}
          >
            <MenuItem className="itmClass" value="#76afff">
              Blue
            </MenuItem>
            <MenuItem className="itmClass" value="#51a954">
              Green
            </MenuItem>
            <MenuItem className="itmClass" value="#ff7070">
              Red
            </MenuItem>
            <MenuItem className="itmClass" value="#e4e263">
              Yellow
            </MenuItem>
            <MenuItem className="itmClass" value="#6c6c6c">
              Black
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="filled" sx={{ m: 1, minWidth: 130, flex: 1 }}>
          <InputLabel>Speed</InputLabel>
          <Select
            className="menuClass"
            id="speed"
            value={myState.sortingSpeed || 1000}
            onChange={(e) => handleSpeed(e.target.value)}
            disabled={myState.sortplay}
          >
            <MenuItem className="itmClass" value={1000}>
              Slow
            </MenuItem>
            <MenuItem className="itmClass" value={300}>
              Medium
            </MenuItem>
            <MenuItem className="itmClass" value={100}>
              Fast
            </MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="controls-input-row">
        <div className="input-group-wrapper">
          <label className="input-field-label">
            Enter Array Numbers (1-99 separated by space) <span style={{ color: "red" }}>*</span>
          </label>
          <input
            id="textfield"
            data-testid="sortInput"
            type="text"
            placeholder="e.g. 34 64 23 73 31 78 68"
            onChange={(e) => handleArray(e)}
            value={arr}
            className="numVal"
            disabled={myState.sortplay}
          />
        </div>

        <div className="actions-button-wrapper">
          <button
            id="play"
            className="play"
            onClick={() => handlePlayStart()}
            disabled={myState.sortplay || myState.arrVal.length === 0}
          >
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '7px' }}>
              <polygon points="6 3 20 12 6 21 6 3"></polygon>
            </svg>
            PLAY
          </button>

          {myState.sortingAlgorithm && (
            <button
              id="learnMoreBtn"
              className="info-learn-btn"
              onClick={() => handleClick(myState.sortingAlgorithm)}
            >
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}>
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              {`LEARN ABOUT ${myState.sortingAlgorithm.toUpperCase()}`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SortNavbar;
