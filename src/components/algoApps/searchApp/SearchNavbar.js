import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./SearchNavbar.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

const SearchNavbar = () => {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [arr, setArr] = useState([]);
  const [num,setNum] = useState();

  const handlesearch = (searchAlgo) => {
    console.log(searchAlgo);
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
    var n = no;
    setNum(n);
    dispatch({
      type: "UPDATE_NUM",
      searchVal: n,
    });
  };

  const handleArray = (array) => {
    setArr(array)
    let newArr=[]
    let tokenizer = arr.split(/\W+/);
    if(myState.searchingAlgorithm === 'binary'){
      tokenizer.sort()
    }
    for(let i=0; i<tokenizer.length; i++){
      newArr.push([tokenizer[i], i]);
    }
    // myState.arrVal = newArr;
    dispatch({
      type: "UPDATE_SEARCH_ARRAY",
      arrValSearch: newArr,
    });
    console.log(array);
  };
  
  
  const handlePlayPause = (play) => {
    console.log(myState.searchplay)
    if(!myState.searchplay){
      //  console.log("msa = " + myState.arrVal);
      //  console.log("msa length = " + myState.arrVal.length);
      console.log("PLAY BUTTON CLICKED");
       document.getElementById('play').disabled = true;
       document.getElementById('play').style.backgroundColor = '#999999';
       document.getElementById('play').style.cursor='not-allowed';
       
       document.getElementById('search').disabled = true;
      //  document.getElementById('search').style.backgroundColor = '#999999';
       document.getElementById('search').style.cursor='not-allowed';
       
       document.getElementById('color').disabled = true;
      //  document.getElementById('color').style.backgroundColor = '#999999';
       document.getElementById('color').style.cursor='not-allowed';
       
       document.getElementById('speed').disabled = true;
      //  document.getElementById('speed').style.backgroundColor = '#999999';
       document.getElementById('speed').style.cursor='not-allowed';


       document.getElementById('textfield').disabled = true;
      //  document.getElementById('textfield').style.backgroundColor = '#999999';
       document.getElementById('textfield').style.cursor='not-allowed';
    
    }

    else{
       return;
    }
    dispatch({
       type: 'PLAY',
      //  play: play
       searchplay: true
    })
 }

//  useEffect(() => {
//     if(!myState.play){
//        document.getElementById('play').disabled = false;
//        document.getElementById('play').style.backgroundColor = 'rgb(0, 149, 199)';
//     }
//  },[myState.play]);

const handleClick1 = () => {
  navigate("/linearinfo");
}
const handleClick2 = () => {
  navigate("/binaryinfo");
}

  return (
    <div className="navDiv">

      <FormControl  variant="filled" sx={{ m: 1, minWidth: 190 }}>
        <InputLabel>Searching Algorithm</InputLabel>
        <Select
          className="menuClass"
          id="search"
          value={myState.searchingAlgorithm}
          onChange={(e) => handlesearch(e.target.value)}
        >
          <MenuItem className="itmClass" value="linear">Linear Search</MenuItem>
          <MenuItem className="itmClass" value="binary">Binary Search</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="filled" sx={{ m: 1, minWidth: 140 }}>
        <InputLabel>Color</InputLabel>
        <Select
          className="menuClass"
          id="color"
          value={myState.searchingColor}
          onChange={(e) => handleColor(e.target.value)}
        >
          <MenuItem className="itmClass" value="#76afff" style={{ backgroundColor: "#cefbff" }}>
            Blue
          </MenuItem>
          <MenuItem className="itmClass" value="#51a954" style={{ backgroundColor: "#deffde" }}>
            Green
          </MenuItem>
          <MenuItem className="itmClass" value="#ff7070" style={{ backgroundColor: "#ffe2e7" }}>
            Red
          </MenuItem>
          <MenuItem className="itmClass" value="#e4e263" style={{ backgroundColor: "#ffffd1" }}>
            Yellow
          </MenuItem>
          <MenuItem className="itmClass" value="#6c6c6c" style={{ backgroundColor: "#d4d4d4" }}>
            Black
          </MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="filled" sx={{ m: 1, minWidth: 130 }}>
        <InputLabel>Speed</InputLabel>
        <Select
          className="menuClass"
          id="speed"
          value={myState.searchingSpeed}
          onChange={(e) => handleSpeed(e.target.value)}
        >
          <MenuItem className="itmClass" value={1000}> Slow </MenuItem>
          <MenuItem className="itmClass" value={300}> Medium </MenuItem>
          <MenuItem className="itmClass" value={100}> Fast </MenuItem>
        </Select>
      </FormControl>

      <button id='play' className="play" onClick={() => handlePlayPause(true)} > PLAY </button>

      <div>
        {/* MAX NUMBERS CAN BE ENTERED ARE 42 */}
        <h2> Enter The Values of Numbers Between 1-99 : </h2>
        <input
          id='textfield'
          type="text"
          placeholder="Enter The Values of Numbers"
          onChange={(e) => handleArray(e.target.value)}
          value={arr}
          className="numVal"
        />
      </div>
      <div>
        {/* MAX NUMBERS CAN BE ENTERED ARE 42 */}
        <h2> Enter The Number You Want To Search : </h2>
        <input
          id='tf'
          type="number"
          placeholder="Enter The Number"
          onChange={(e) => handleNum(e.target.value)}
          value={num}
          className="nu"
        />
      </div>
      {myState.searchingAlgorithm==='linear' && <button id='play' className="play" onClick={() => handleClick1()} > LEARN MORE ABOUT LINEAR SEARCH </button>}
      {myState.searchingAlgorithm==='binary' && <button id='play' className="play" onClick={() => handleClick2()} > LEARN MORE ABOUT BINARY SEARCH</button>}
    </div>
  );
};

export default SearchNavbar;
