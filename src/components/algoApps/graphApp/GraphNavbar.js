import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './GraphNavbar.css';

const GraphNavbar = () => {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const screenWidth = window.innerWidth;
  const columnLimit = Math.floor(screenWidth / 38);

  const generateMap = () => {
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
      type: 'UPDATE_MAP',
      map: grid,
    });
  };

  const handleStart = () => {
    if (!myState.startPoint) {
    } else {
      return;
    }
    dispatch({
      type: 'START',
      startPoint: true,
    });
  };

  const handleEnd = () => {
    if (!myState.endPoint) {
    } else {
      return;
    }
    dispatch({
      type: 'END',
      endPoint: true,
    });
  };

  const handleWall = () => {
    if (!myState.wallPoint) {
    } else {
      return;
    }
    dispatch({
      type: 'WALL',
      wallPoint: true,
    });
  };

  const handlePlay = () => {
    const btnElm = document.getElementsByClassName('btn');
    [...btnElm].forEach((element) => {
      element.style.backgroundColor = '#999999';
      element.style.cursor = 'not-allowed';
    });

    dispatch({
      type: 'PLAY_PAUSE_GRAPH',
      graphplay: true,
    });
  };

  const handleAlgo = (graphAlgo) => {
    dispatch({
      type: 'UPDATE_GRAPHALGORITHM',
      graphAlgorithm: graphAlgo,
    });
  };

  useEffect(() => {
    generateMap();
  }, []);
  const handleClick = () => {
    navigate(`/${myState.graphAlgorithm}-info`);
  };

  return (
    <div className="navDiv">
      <FormControl variant="filled" sx={{ m: 1, minWidth: 190 }}>
        <InputLabel>Graph Algorithm</InputLabel>
        <Select
          className="menuClass"
          id="graph"
          value={myState.graphAlgorithm}
          onChange={(e) => {
            handleAlgo(e.target.value);
          }}
          disabled={myState.graphplay}
        >
          <MenuItem className="itmClass" value="bfs">
            BFS
          </MenuItem>
          <MenuItem className="itmClass" value="dfs">
            DFS
          </MenuItem>
        </Select>
      </FormControl>

      <button
        id="start"
        className="btn"
        onClick={() => handleStart(true)}
        disabled={myState.graphplay}
      >
        START
      </button>

      <button
        id="end"
        className="btn"
        onClick={() => handleEnd(true)}
        disabled={myState.graphplay}
      >
        END
      </button>

      <button
        id="wall"
        className="btn"
        onClick={() => handleWall(true)}
        disabled={myState.graphplay}
      >
        WALL
      </button>

      <button
        id="play"
        className="btn"
        onClick={() => handlePlay()}
        disabled={myState.graphplay}
      >
        PLAY
      </button>

      {myState.graphAlgorithm !== '' && (
        <button
          id="play"
          className="play"
          onClick={() => handleClick(myState.graphAlgorithm)}
        >
          {`LEARN MORE ABOUT ${myState.graphAlgorithm.toUpperCase()}`}
        </button>
      )}
    </div>
  );
};
export default GraphNavbar;
