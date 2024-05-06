import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './HomeScreen.css';

import TopicCard from './TopicCard';

const HomeScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'RESET_STATE',
    });
  }, []);

  const sortApp = () => {
    navigate('/sort');
  };
  const graphApp = () => {
    navigate('/graph');
  };
  const searchApp = () => {
    navigate('/search');
  };
  const stackApp = () => {
    navigate('/stack');
  };
  const queueApp = () => {
    navigate('/queue');
  };

  return (
    <>
      <div className="mainContainer">
        <h1> ALGO CANVAS </h1>
        <div className="cardContainer">
          <TopicCard
            onClick={sortApp}
            img="https://i.postimg.cc/MpQXXjFY/sorting.png"
            title="Sorting Visualizer"
            data="Lets you explore different sorting algorithms and how they work on different types of data. You can also compare the performance and efficiency of different algorithms on various inputs."
          />
          <TopicCard
            onClick={graphApp}
            img="https://i.postimg.cc/BQDGKcJt/graph.png"
            title="Graph Visualizer"
            data="The app that helps you visualize BFS and DFS algorithms. With Graph Visualizer, choose between BFS and DFS, and watch how the algorithms traverse the nodes step by step."
          />
          <TopicCard
            onClick={searchApp}
            img="https://i.postimg.cc/dtSThFtJ/searching.jpg"
            title="Search Visualizer"
            data="The app that helps you visualize linear and binary search. You can generate your own arrays, choose between linear and binary search, and watch how the algorithms find the target element step by step."
          />
          <TopicCard
            onClick={stackApp}
            img="https://i.postimg.cc/VkgsJBFn/stack.png"
            title="Stack Visualizer"
            data="The app that helps you visualize stack operations. With Stack Visualizer, you can create your own stack, push and pop elements, and watch how the stack changes step by step."
          />
          <TopicCard
            onClick={queueApp}
            img="https://i.postimg.cc/VvgnGb8t/queue.png"
            title="Queue Visualizer"
            data="The app that helps you visualize queue operations. With Queue Visualizer, you can create your own queue, push and pop elements, and watch how the queue changes step by step."
          />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
