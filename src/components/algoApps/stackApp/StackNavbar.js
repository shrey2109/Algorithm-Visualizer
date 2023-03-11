import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./StackNavbar.css";


function Navbar() {
    const myState = useSelector((state) => state.updateProps);
    const dispatch = useDispatch();

    const [arr, setArr] = useState([]);



    const handlePush = () => {
      console.log("push clicked");
        var num = [document.getElementById("textfield").value, ...arr] 
        document.getElementById("textfield").value = "";
        setArr(num);
        console.log(arr);

        dispatch({
          type: "UPDATE_ARRAY",
          arrVal: num,
        });

        dispatch({
          type: "UPDATE_PUSH",
          pushbtn: true,
        });

        dispatch({
          type: "UPDATE_POP",
          popbtn: false,
        });
      }
        
        const handlePop = () => {
          console.log("pop clicked");
          arr.shift();
          console.log(arr.length);

          dispatch({
            type: "UPDATE_ARRAY",
            arrVal: arr,
          });
          
          dispatch({
            type: "UPDATE_PUSH",
            pushbtn: false,
          });

          dispatch({
            type: "UPDATE_POP",
            popbtn: true,
          });

    }

    const handlePopAll = () => {
      console.log("PA clicked");
      setArr([]);

      dispatch({
        type: "UPDATE_ARRAY",
        arrVal: [],
      });

      dispatch({
        type: "UPDATE_PUSH",
        pushbtn: false,
      });

      dispatch({
        type: "UPDATE_POP",
        popbtn: false,
      });
    }

    return (
        <div className="navDiv">

          <button id='play' className="play" onClick={() => handlePush(true)} > PUSH </button>
          <button id='play' className="play" onClick={() => handlePop(true)} > POP </button>
          <button id='play' className="play" onClick={() => handlePopAll(true)} > POP ALL </button>
    
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
    