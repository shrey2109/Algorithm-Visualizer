import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './GraphNavbar.css';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

const GraphNavbar = () => {

  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const generateMap = () => {
    let grid = [];
    for(let i = 0; i < 14; i++){
        let temp = [];
        for(let j = 0; j < 40; j++){
            temp.push({
                r: i,
                c: j,
                isStart : false,
                isEnd : false,
                isWall : false,
                isWeight : false  
            })
        }
        grid.push(temp)
    }
  
    dispatch({
      type: 'UPDATE_MAP',
      map: grid
    })
  }


  const handleStart = (startPoint) => {

    if(!myState.startPoint){
      console.log("START BUTTON CLICKED");
    }

    else{
       return;
    }
    dispatch({
       type: 'START',
       startPoint: true
    })
 }


 const handleEnd = (endPoint) => {

  if(!myState.endPoint){
    console.log("END BUTTON CLICKED");
  }

  else{
     return;
  }
  dispatch({
     type: 'END',
     endPoint: true
  })
}

const handleWall = (wallPoint) => {

  if(!myState.wallPoint){
    console.log("WALL BUTTON CLICKED");
  }

  else{
     return;
  }
  dispatch({
     type: 'WALL',
     wallPoint : true
  })
}

const handleWeight = (weightPoint) => {

  if(!myState.weightPoint){
    console.log("WEIGHT BUTTON CLICKED");
  }

  else{
     return;
  }
  dispatch({
     type: 'WEIGHT',
     weightPoint: true
  })
}


const handleReset = (reset) => {

  if(!myState.reset){
    console.log("RESET BUTTON CLICKED");
  }

  else{
     return;
  }
  dispatch({
     type: 'RESET',
     reset: true
  })
}

  const handlePlay = (play) => {

    if(!myState.play){
      console.log("PLAY BUTTON CLICKED");
    }

    else{
       return;
    }
    dispatch({
       type: 'PLAY_PAUSE_GRAPH',
       graphplay: true
    })
 }

 const handleAlgo = (graphAlgo) => {
  console.log(graphAlgo);
  dispatch({
    type: "UPDATE_GRAPHALGORITHM",
    graphAlgorithm: graphAlgo,
  });
};

useEffect(() => {
  console.log("GENERATING MAP!")
  generateMap();
},[])
const handleClick1 = () => {
  navigate("/bfsinfo");
}
const handleClick2 = () => {
  navigate("/dfsinfo");
}

    return (
        <div className="navDiv">
    
          <FormControl  variant="filled" sx={{ m: 1, minWidth: 190 }}>
            <InputLabel>Graph Algorithm</InputLabel>
            <Select
              className="menuClass"
              id="graph"
              value={myState.graphAlgorithm}
              onChange={(e)=>{handleAlgo(e.target.value)}}
              
            >
              <MenuItem className="itmClass" value="bfs">BFS</MenuItem>
              <MenuItem className="itmClass" value="dfs">DFS</MenuItem>
            </Select>
          </FormControl>
    
          


          <button id='start' className="btn" onClick={() => handleStart(true)}> START </button>
          
          <button id='end' className="btn" onClick={() => handleEnd(true)}> END </button>

          <button id='wall' className="btn" onClick={() => handleWall(true)}> WALL </button>
          
          <button id='play' className="btn" onClick={() => handlePlay(true)}> PLAY </button>

         { myState.graphAlgorithm==='bfs' && <button id='play' className="play" onClick={() => handleClick1()} > LEARN MORE ABOUT BFS </button>}
         { myState.graphAlgorithm==='dfs' && <button id='play' className="play" onClick={() => handleClick2()} > LEARN MORE ABOUT DFS </button>}

        </div>
      );
} 
export default GraphNavbar;