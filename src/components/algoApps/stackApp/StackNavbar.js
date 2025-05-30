import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./StackNavbar.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [arr, setArr] = useState([]);

  const handlePush = () => {
    if (!document.getElementById("textfield").value) return;
    var num = [document.getElementById("textfield").value, ...arr];
    document.getElementById("textfield").value = "";
    setArr(num);

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
  };

  const handlePop = () => {
    if (arr.length === 0) return;
    arr.shift();

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
  };

  const handlePopAll = () => {
    if (arr.length === 0) return;
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
  };

  const handleClick = () => {
    navigate("/stack-info");
  };

  return (
    <div className="navDiv">
      <button id="play" className="play" onClick={() => handlePush(true)}>
        PUSH
      </button>
      <button id="play" className="play" onClick={() => handlePop(true)}>
        POP
      </button>
      <button id="play" className="play" onClick={() => handlePopAll(true)}>
        POP ALL
      </button>

      <button id="play" className="play" onClick={() => handleClick()}>
        LEARN MORE ABOUT STACK
      </button>

      <div>
        <input
          id="textfield"
          data-testid="stackInput"
          type="text"
          placeholder="Enter a number to push into stack"
          className="numVal"
        />
      </div>
    </div>
  );
};

export default Navbar;
