import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './QueueNavbar.css';

const QueueNavbar = () => {
  const dispatch = useDispatch();

  const [arr, setArr] = useState([]);
  const navigate = useNavigate();

  const handlePush = () => {
    var num = [...arr, document.getElementById('textfield').value];
    document.getElementById('textfield').value = '';
    setArr(num);

    dispatch({
      type: 'UPDATE_ARRAY_QUEUE',
      arrValQueue: num,
    });

    dispatch({
      type: 'UPDATE_PUSH_QUEUE',
      pushqueue: true,
    });

    dispatch({
      type: 'UPDATE_POP_QUEUE',
      popqueue: false,
    });
  };

  const handlePop = () => {
    arr.shift();

    dispatch({
      type: 'UPDATE_ARRAY_QUEUE',
      arrValQueue: arr,
    });

    dispatch({
      type: 'UPDATE_PUSH_QUEUE',
      pushqueue: false,
    });

    dispatch({
      type: 'UPDATE_POP_QUEUE',
      popqueue: true,
    });
  };

  const handlePopAll = () => {
    setArr([]);

    dispatch({
      type: 'UPDATE_ARRAY_QUEUE',
      arrValQueue: [],
    });

    dispatch({
      type: 'UPDATE_PUSH_QUEUE',
      pushqueue: false,
    });

    dispatch({
      type: 'UPDATE_POP_QUEUE',
      popqueue: false,
    });
  };
  const handleClick = () => {
    navigate('/queue-info');
  };
  return (
    <div className="navDiv">
      {/* <button id='play' className="play" onClick={() => handlePlayPause(true)} > PLAY </button> */}
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
        LEARN MORE ABOUT QUEUE
      </button>
      <div>
        <input
          id="textfield"
          type="text"
          placeholder="Enter a number to push into queue"
          className="numVal"
        />
      </div>
    </div>
  );
};

export default QueueNavbar;
