import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './SortNavbar.css';

const SortNavbar = () => {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [arr, setArr] = useState([]);

  const handleSort = (sortAlgo) => {
    dispatch({
      type: 'UPDATE_SORTINGALGORITHM',
      sortingAlgorithm: sortAlgo,
    });
  };

  const handleColor = (sortColor) => {
    dispatch({
      type: 'UPDATE_COLOR',
      sortingColor: sortColor,
    });
  };

  const handleSpeed = (sortSpeed) => {
    dispatch({
      type: 'UPDATE_SPEED',
      sortingSpeed: sortSpeed,
    });
  };

  const handleArray = (array) => {
    setArr(array);
    let newArr = [];
    let tokenizer = arr.split(/\W+/);

    for (let i = 0; i < tokenizer.length; i++) {
      newArr.push([tokenizer[i], i]);
    }
    dispatch({
      type: 'UPDATE_ARRAY',
      arrVal: newArr,
    });
  };

  const handlePlayStart = () => {
    document.getElementById('play').style.backgroundColor = '#999999';
    document.getElementById('play').style.cursor = 'not-allowed';
    document.getElementById('sort').style.cursor = 'not-allowed';
    document.getElementById('color').style.cursor = 'not-allowed';
    document.getElementById('speed').style.cursor = 'not-allowed';
    document.getElementById('textfield').style.cursor = 'not-allowed';

    dispatch({
      type: 'PLAY_PAUSE',
      sortplay: true,
    });
  };

  const handleClick = (algorithm) => {
    navigate(`/${algorithm}-info`);
  };

  return (
    <div className="navDiv">
      <FormControl variant="filled" sx={{ m: 1, minWidth: 190 }}>
        <InputLabel>Sorting Algorithm</InputLabel>
        <Select
          className="menuClass"
          id="sort"
          value={myState.sortingAlgorithm}
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
          {/* <MenuItem className="itmClass" value="quick">Quick Sort</MenuItem> */}
        </Select>
      </FormControl>

      <FormControl variant="filled" sx={{ m: 1, minWidth: 140 }}>
        <InputLabel>Color</InputLabel>
        <Select
          className="menuClass"
          id="color"
          value={myState.sortingColor}
          onChange={(e) => handleColor(e.target.value)}
          disabled={myState.sortplay}
        >
          <MenuItem
            className="itmClass"
            value="#76afff"
            style={{ backgroundColor: '#cefbff' }}
          >
            Blue
          </MenuItem>
          <MenuItem
            className="itmClass"
            value="#51a954"
            style={{ backgroundColor: '#deffde' }}
          >
            Green
          </MenuItem>
          <MenuItem
            className="itmClass"
            value="#ff7070"
            style={{ backgroundColor: '#ffe2e7' }}
          >
            Red
          </MenuItem>
          <MenuItem
            className="itmClass"
            value="#e4e263"
            style={{ backgroundColor: '#ffffd1' }}
          >
            Yellow
          </MenuItem>
          <MenuItem
            className="itmClass"
            value="#6c6c6c"
            style={{ backgroundColor: '#d4d4d4' }}
          >
            Black
          </MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="filled" sx={{ m: 1, minWidth: 130 }}>
        <InputLabel>Speed</InputLabel>
        <Select
          className="menuClass"
          id="speed"
          value={myState.sortingSpeed}
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

      <button
        id="play"
        className="play"
        onClick={() => handlePlayStart()}
        disabled={myState.sortplay}
      >
        PLAY
      </button>
      <div>
        {/* MAX NUMBERS CAN BE ENTERED ARE 42 */}
        <h2> Enter The Values of Numbers Between 1-99 : </h2>
        <input
          id="textfield"
          type="text"
          placeholder="Enter The Values of Numbers"
          onChange={(e) => handleArray(e.target.value)}
          value={arr}
          className="numVal"
          disabled={myState.sortplay}
        />
      </div>
      {myState.sortingAlgorithm !== '' && (
        <button
          id="play"
          className="play"
          onClick={() => handleClick(myState.sortingAlgorithm)}
        >
          {`LEARN MORE ABOUT ${myState.sortingAlgorithm.toUpperCase()} SORT`}
        </button>
      )}
    </div>
  );
};

export default SortNavbar;
