import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./QueueNavbar.css";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";

function  QueueNavbar() {
    const myState = useSelector((state) => state.updateProps);
    const dispatch = useDispatch();

    const [arr, setArr] = useState([]);
    const navigate = useNavigate();


    const handlePush = () => {
      console.log("push clicked");
        var num = [...arr, document.getElementById("textfield").value] 
        document.getElementById("textfield").value = "";
        setArr(num);
        console.log(arr);

        dispatch({
          type: "UPDATE_ARRAY_QUEUE",
          arrValQueue: num,
        });

        dispatch({
          type: "UPDATE_PUSH_QUEUE",
          pushqueue: true,
        });

        dispatch({
          type: "UPDATE_POP_QUEUE",
          popqueue: false,
        });
      }
        
        const handlePop = () => {
          console.log("pop clicked");
          // var num = arr;
          // num.shift();
          // setArr(num);
          arr.shift();
          console.log(arr.length);

          dispatch({
            type: "UPDATE_ARRAY_QUEUE",
            arrValQueue: arr,
          });
          
          dispatch({
            type: "UPDATE_PUSH_QUEUE",
            pushqueue: false,
          });

          dispatch({
            type: "UPDATE_POP_QUEUE",
            popqueue: true,
          });

    }

    const handlePopAll = () => {
      console.log("PA clicked");
      setArr([]);

      dispatch({
        type: "UPDATE_ARRAY_QUEUE",
        arrValQueue: [],
      });

      dispatch({
        type: "UPDATE_PUSH_QUEUE",
        pushqueue: false,
      });

      dispatch({
        type: "UPDATE_POP_QUEUE",
        popqueue: false,
      });
    }
    const handleClick = () => {
      navigate("/queueinfo");
    }
    return (
        <div className="navDiv">

          {/* <button id='play' className="play" onClick={() => handlePlayPause(true)} > PLAY </button> */}
          <button id='play' className="play" onClick={() => handlePush(true)} > PUSH </button>
          <button id='play' className="play" onClick={() => handlePop(true)} > POP </button>
          <button id='play' className="play" onClick={() => handlePopAll(true)} > POP ALL </button>
          <button id='play' className="play" onClick={() => handleClick()} > LEARN MORE ABOUT QUEUE </button>
          <div>
            <input
              id='textfield'
              type="text"
              placeholder="Enter The Numbers"
            //   onChange={(e) => handleARRAY_QUEUE(e.target.value)}
            //   value={arr}
              className="numVal"
            />
          </div>
        </div>
      );
    };
    
    export default QueueNavbar;
    