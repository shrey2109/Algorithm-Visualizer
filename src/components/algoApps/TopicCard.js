import React from 'react';

import './HomeScreen.css';

const TopicCard = (props) => {
  return (
    <div className="outerCard">
      <div className="card" onClick={props.onClick}>
        <div className="imgbox">
          <img src={props.img} alt="topicImg" />
        </div>

        <div className="cardTitle">
          <h2>{props.title}</h2>
        </div>

        <div className="content">
          <h2>{props.title}</h2>
          <p>{props.data}</p>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
