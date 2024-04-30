import React from 'react';

import './HomeScreen.css';

const TopicCard = (props) => {
  return (
    <div class="outerCard">
      <div class="card" onClick={props.onClick}>
        <div class="imgbox">
          <img src={props.img} alt="topicImg" />
        </div>

        <div class="cardTitle">
          <h2>{props.title}</h2>
        </div>

        <div class="content">
          <h2>{props.title}</h2>
          <p>{props.data}</p>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
