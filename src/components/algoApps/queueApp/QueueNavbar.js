import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./QueueNavbar.css";

const QueueNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [arr, setArr] = useState([]);
  const [val, setVal] = useState("");

  const handlePush = () => {
    const inputElem = document.getElementById("textfield");
    const inputVal = inputElem ? inputElem.value.trim() : val.trim();
    if (!inputVal) return;
    const num = [...arr, inputVal];
    if (inputElem) inputElem.value = "";
    setVal("");
    setArr(num);

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
  };

  const handlePop = () => {
    if (arr.length === 0) return;
    const nextArr = [...arr];
    nextArr.shift();
    setArr(nextArr);

    dispatch({
      type: "UPDATE_ARRAY_QUEUE",
      arrValQueue: nextArr,
    });

    dispatch({
      type: "UPDATE_PUSH_QUEUE",
      pushqueue: false,
    });

    dispatch({
      type: "UPDATE_POP_QUEUE",
      popqueue: true,
    });
  };

  const handlePopAll = () => {
    if (arr.length === 0) return;
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
  };

  const handleClick = () => {
    navigate("/queue-info");
  };

  return (
    <div className="navDiv queueNavDiv">
      <div className="queue-controls-row">
        <div className="input-group-wrapper" style={{ flex: 1, minWidth: "220px" }}>
          <label className="input-field-label">Value to Enqueue</label>
          <input
            id="textfield"
            data-testid="queueInput"
            type="text"
            placeholder="Enter a number (e.g. 15)"
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
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            PUSH
          </button>
          <button id="popBtn" className="btn btn-pop" onClick={() => handlePop()}>
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '6px' }}>
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            POP
          </button>
          <button id="popAllBtn" className="btn btn-pop-all" onClick={() => handlePopAll()}>
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}>
              <polyline points="11 17 6 12 11 7"></polyline>
              <polyline points="18 17 13 12 18 7"></polyline>
            </svg>
            POP ALL
          </button>
          <button id="learnMoreQueueBtn" className="info-learn-btn" onClick={() => handleClick()}>
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}>
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            LEARN MORE ABOUT QUEUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default QueueNavbar;
