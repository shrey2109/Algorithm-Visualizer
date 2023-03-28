import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./StackNavbar.css";

import { useNavigate } from "react-router-dom";


function Navbar() {
    const myState = useSelector((state) => state.updateProps);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [arr, setArr] = useState([]);



    const handlePush = () => {
      console.log("push clicked");
        var num = [document.getElementById("textfield").value, ...arr] 
        document.getElementById("textfield").value = "";
        setArr(num);
        console.log(arr);

        dispatch({
          type: "UPDATE_ARRAY_STACK",
          arrValStack: num,
        });

        dispatch({
          type: "UPDATE_PUSH_STACK",
          pushstack: true,
        });

        dispatch({
          type: "UPDATE_POP_STACK",
          popstack: false,
        });
      }
        
        const handlePop = () => {
          console.log("pop clicked");
          arr.shift();
          console.log(arr.length);

          dispatch({
            type: "UPDATE_ARRAY_STACK",
            arrValStack: arr,
          });
          
          dispatch({
            type: "UPDATE_PUSH_STACK",
            pushstack: false,
          });

          dispatch({
            type: "UPDATE_POP_STACK",
            popstack: true,
          });

    }

    const handlePopAll = () => {
      console.log("PA clicked");
      setArr([]);

      dispatch({
        type: "UPDATE_ARRAY_STACK",
        arrValStack: [],
      });

      dispatch({
        type: "UPDATE_PUSH_STACK",
        pushstack: false,
      });

      dispatch({
        type: "UPDATE_POP_STACK",
        popstack: false,
      });
    }

    const handleClick = () => {
      navigate("/stackinfo");
    }

    return (
        <div className="navDiv">

          <button id='play' className="play" onClick={() => handlePush(true)} > PUSH </button>
          <button id='play' className="play" onClick={() => handlePop(true)} > POP </button>
          <button id='play' className="play" onClick={() => handlePopAll(true)} > POP ALL </button>
          
          <button id='play' className="play" onClick={() => handleClick()} > LEARN MORE ABOUT STACK </button>
          
    
          <div>
            <input
              id='textfield'
              type="text"
              placeholder="Enter The Numbers"
              className="numVal"
            />
          </div>
        </div>
      );
    };
    
    export default Navbar;
    