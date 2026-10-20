import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./StackNavbar.css";

const StackNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [arr, setArr] = useState([]);
  const [val, setVal] = useState("");

  const handlePush = () => {
    const inputElem = document.getElementById("textfield");
    const inputVal = inputElem ? inputElem.value.trim() : val.trim();
    if (!inputVal) return;
    const num = [inputVal, ...arr];
    if (inputElem) inputElem.value = "";
    setVal("");
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
    const nextArr = [...arr];
    nextArr.shift();
    setArr(nextArr);

    dispatch({
      type: "UPDATE_ARRAY_STACK",
      arrValStack: nextArr,
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
    <div className="navDiv stackNavDiv">
      <div className="stack-controls-row">
        <div className="input-group-wrapper" style={{ flex: 1, minWidth: "220px" }}>
          <label className="input-field-label">Value to Push</label>
          <input
            id="textfield"
            data-testid="stackInput"
            type="text"
            placeholder="Enter a number (e.g. 42)"
            className="numVal"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handlePush();
            }}
          />
        </div>

        <div className="actions-button-wrapper">
          <button id="pushBtn" className="play btn-push" onClick={() => handlePush()}>
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '6px' }}>
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
            PUSH
          </button>
          <button id="popBtn" className="btn btn-pop" onClick={() => handlePop()}>
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '6px' }}>
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
            POP
          </button>
          <button id="popAllBtn" className="btn btn-pop-all" onClick={() => handlePopAll()}>
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}>
              <polyline points="17 11 12 6 7 11"></polyline>
              <polyline points="17 18 12 13 7 18"></polyline>
            </svg>
            POP ALL
          </button>
          <button id="learnMoreStackBtn" className="info-learn-btn" onClick={() => handleClick()}>
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}>
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            LEARN MORE ABOUT STACK
          </button>
        </div>
      </div>
    </div>
  );
};

export default StackNavbar;
