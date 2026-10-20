import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./SearchNavbar.css";

const SearchNavbar = () => {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [arr, setArr] = useState("");
  const [num, setNum] = useState("");

  useEffect(() => {
    if (!myState.searchingAlgorithm) {
      dispatch({
        type: "UPDATE_SEARCHINGALGORITHM",
        searchingAlgorithm: "linear",
      });
    }
    if (!myState.searchingColor) {
      dispatch({
        type: "UPDATE_SEARCHINGCOLOR",
        searchingColor: "#76afff",
      });
    }
    if (!myState.searchingSpeed) {
      dispatch({
        type: "UPDATE_SEARCHINGSPEED",
        searchingSpeed: 1000,
      });
    }
  }, [dispatch, myState.searchingAlgorithm, myState.searchingColor, myState.searchingSpeed]);

  const handleSearch = (searchAlgo) => {
    dispatch({
      type: "UPDATE_SEARCHINGALGORITHM",
      searchingAlgorithm: searchAlgo,
    });
  };

  const handleColor = (searchColor) => {
    dispatch({
      type: "UPDATE_SEARCHINGCOLOR",
      searchingColor: searchColor,
    });
  };

  const handleSpeed = (searchSpeed) => {
    dispatch({
      type: "UPDATE_SEARCHINGSPEED",
      searchingSpeed: searchSpeed,
    });
  };

  const handleNum = (no) => {
    setNum(no);
    dispatch({
      type: "UPDATE_NUM",
      searchVal: no === "" ? "" : parseInt(no, 10),
    });
  };

  const handleArray = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/[^0-9\s]/g, "");
    setArr(filteredValue);
    let newArr = [];
    let tokenizer = filteredValue.trim().split(/\s+/);

    if (myState.searchingAlgorithm === "binary") {
      tokenizer.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
    }
    for (let i = 0; i < tokenizer.length; i++) {
      if (tokenizer[i]) {
        newArr.push([parseInt(tokenizer[i], 10), i]);
      }
    }
    dispatch({
      type: "UPDATE_SEARCH_ARRAY",
      arrValSearch: newArr,
    });
  };

  const handlePlayPause = () => {
    const playElem = document.getElementById("play");
    if (playElem) {
      playElem.style.backgroundColor = "#94a3b8";
      playElem.style.cursor = "not-allowed";
    }
    const searchElem = document.getElementById("search");
    if (searchElem) searchElem.style.cursor = "not-allowed";
    const colorElem = document.getElementById("color");
    if (colorElem) colorElem.style.cursor = "not-allowed";
    const speedElem = document.getElementById("speed");
    if (speedElem) speedElem.style.cursor = "not-allowed";
    const textElem = document.getElementById("textfield");
    if (textElem) textElem.style.cursor = "not-allowed";
    const tfElem = document.getElementById("tf");
    if (tfElem) tfElem.style.cursor = "not-allowed";

    dispatch({
      type: "PLAY",
      searchplay: true,
    });
  };

  const handleClick = () => {
    const algo = myState.searchingAlgorithm || "linear";
    navigate(`/${algo}-info`);
  };

  return (
    <div className="searchNavDiv">
      <div className="controls-primary-row">
        <FormControl variant="filled" sx={{ m: 1, minWidth: 180, flex: 1 }}>
          <InputLabel>
            Algorithm <span style={{ color: "red" }}>*</span>
          </InputLabel>
          <Select
            className="menuClass"
            id="search"
            value={myState.searchingAlgorithm || "linear"}
            onChange={(e) => handleSearch(e.target.value)}
            disabled={myState.searchplay}
          >
            <MenuItem className="itmClass" value="linear">
              Linear Search
            </MenuItem>
            <MenuItem className="itmClass" value="binary">
              Binary Search
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
            value={myState.searchingColor || "#76afff"}
            onChange={(e) => handleColor(e.target.value)}
            disabled={myState.searchplay}
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
            value={myState.searchingSpeed || 1000}
            onChange={(e) => handleSpeed(e.target.value)}
            disabled={myState.searchplay}
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
        <div className="input-group-wrapper" style={{ flex: 2 }}>
          <label className="input-field-label">
            Array Numbers (space separated) <span style={{ color: "red" }}>*</span>
          </label>
          <input
            id="textfield"
            data-testid="searchInput"
            type="text"
            placeholder="e.g. 10 24 35 48 62 75 90"
            onChange={(e) => handleArray(e)}
            value={arr}
            className="numVal"
            disabled={myState.searchplay}
          />
        </div>

        <div className="input-group-wrapper" style={{ flex: 1, minWidth: '140px' }}>
          <label className="input-field-label">
            Search Target <span style={{ color: "red" }}>*</span>
          </label>
          <input
            id="tf"
            type="number"
            placeholder="Target"
            onChange={(e) => handleNum(e.target.value)}
            value={num}
            className="numVal"
            disabled={myState.searchplay}
          />
        </div>

        <div className="actions-button-wrapper">
          <button
            id="play"
            className="play"
            onClick={() => handlePlayPause()}
            disabled={myState.searchplay || myState.arrValSearch.length === 0}
          >
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '7px' }}>
              <polygon points="6 3 20 12 6 21 6 3"></polygon>
            </svg>
            PLAY
          </button>

          {myState.searchingAlgorithm && (
            <button
              id="learnMoreSearchBtn"
              className="info-learn-btn"
              onClick={() => handleClick()}
            >
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}>
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              {`LEARN ABOUT ${myState.searchingAlgorithm.toUpperCase()}`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchNavbar;
