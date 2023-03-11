import React, { useEffect, useState } from "react";
// import { getGrid } from "../startingGrid";
import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from '../context';
import "./GraphVisuals.css";
import GraphWorking from './GraphWorking'




const GraphVisuals = () => {
  const hash = (i,j) => {
    return 2001*(i+1000)+(j+1000);
  }
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();
  const grid = [...myState.map];
  let editingFlag = false;
  // const {grid,setgrid,editing,seteditFlag,mode,start,end,run,res,algo} = useParams()
  const hello = () => {
      console.log("MOUSE DOWN START ON...")
      if(editingFlag) editingFlag = false;
      else editingFlag = true;
  }

  const handleBlock = () => {
    console.log("HELLO");
  }


  const generateMap = () => {
    console.log("generatin MAP")
    return(
        grid.map((row,index) => {
          return <div className='map-row' key={index}>
              {row.map(block => {
                  let has = hash(block.r,block.c);
                  return <button className="gridbtn" id={has} onClick={(e) => btnClick(has, block)} onMouseDown={() => hello()} onMouseUp={() => hello()} onMouseMove={(e) => wallClick(has, block)}> </button>
                })
              }
          </div>
      })
    )
  }



  const btnClick = (e, block) => {
    if(myState.startPoint){
      console.log("GRID BUTTON CLICKED" + e);
      block.isStart = true;
      console.log("IS START PROPERTY : " + block.isStart);
      console.log("ROW : " + block.r);
      document.getElementById(e).style.backgroundColor="#5555ff";
      document.getElementById(e).innerText="S";
      myState.startPoint=false
      document.getElementById('start').disabled = true;
      document.getElementById('start').style.backgroundColor = '#CCCCCC';
      document.getElementById('start').style.cursor='not-allowed';
    }

    if(myState.endPoint){
      console.log("GRID BUTTON CLICKED" + e);
      block.isEnd = true;
      console.log("IS END PROPERTY : " + block.isEnd);
      console.log("ROW : " + block.r);
      document.getElementById(e).style.backgroundColor="#00e600";
      document.getElementById(e).innerText="E";
      myState.endPoint=false
      document.getElementById('end').disabled = true;
      document.getElementById('end').style.backgroundColor = '#CCCCCC';
      document.getElementById('end').style.cursor='not-allowed';
    }
    
    if(myState.reset){
      console.log("GRID BUTTON CLICKED" + e);
      block.reset = true;
      console.log("IS END PROPERTY : " + block.isEnd);
      console.log("ROW : " + block.r);
      generateMap();
    }

  }

  const wallClick = (e, block) => {
    if(myState.wallPoint && editingFlag){
      console.log("GRID BUTTON CLICKED" + e);
      console.log("IS WALL PROPERTY : " + block.isWall);
      console.log("ROW : " + block.r);
      if(block.isStart===false && block.isEnd===false){
        block.isWall = true;
        document.getElementById(e).style.backgroundColor="gray";
        document.getElementById(e).innerText="W";
      }
    }
  }

  return (
    <div className="visuals">
      <div className='map-container'>
          {generateMap()}        
            <GraphWorking/>
      </div>
    </div>
  )
};

export default GraphVisuals;