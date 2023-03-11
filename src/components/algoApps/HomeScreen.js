import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeScreen.css";

const HomeScreen = () => {
  const navigate = useNavigate();

  const sortApp = () => {
    console.log("SORTING BUTTON CLICKED");
  };
  const graphApp = () => {
    console.log("GRAPH BUTTON CLICKED");
    navigate("/graph");
  };
  const searchApp = () => {
    console.log("SEARCHING BUTTON CLICKED");
  };
  const stackApp = () => {
    console.log("STACK BUTTON CLICKED");
    navigate("/stack");
  };
  const queueApp = () => {
    console.log("QUEUE BUTTON CLICKED");
    navigate("/queue");
  };

  return (
    <>
      <div className="abc">
        <h1> ALGORITHM VISUALIZER </h1>

        <div className="cardContainer">
          <div class="card" onClick={sortApp}>
            <div class="imgbox">
              <img src="https://i.postimg.cc/MpQXXjFY/sorting.png" />
            </div>

            <div class="content">
              <h2>Sorting Visualizer</h2>
              <p>
                Lets you explore different sorting algorithms and how they work
                on different types of data. You can also compare the performance
                and efficiency of different algorithms on various inputs.
              </p>
            </div>
          </div>

          <div class="card" onClick={graphApp}>
            <div class="imgbox">
              <img src="https://i.postimg.cc/BQDGKcJt/graph.png" />
            </div>

            <div class="content">
              <h2>Graph Visualizer</h2>
              <p>
                The app that helps you visualize BFS and DFS algorithms. With
                Graph Visualer, choose between BFS and DFS, and watch how the
                algorithms traverse the nodes step by step.
              </p>
            </div>
          </div>

          <div class="card" onClick={searchApp}>
            <div class="imgbox">
              <img src="https://i.postimg.cc/dtSThFtJ/searching.jpg" />
            </div>

            <div class="content">
              <h2>Searching Visualizer</h2>
              <p>
                The app that helps you visualize linear and binary search. You
                can generate your own arrays, choose between linear and binary
                search, and watch how the algorithms find the target element
                step by step.
              </p>
            </div>
          </div>

          <div class="card" onClick={stackApp}>
            <div class="imgbox">
              <img src="https://i.postimg.cc/VkgsJBFn/stack.png" />
            </div>

            <div class="content">
              <h2>Stack Visualizer</h2>
              <p>
                The app that helps you visualize stack operations. With Stack
                Visualizer, you can create your own stack, push and pop
                elements, and watch how the stack changes step by step.
              </p>
            </div>
          </div>

          <div class="card" onClick={queueApp}>
            <div class="imgbox">
              <img src="https://i.postimg.cc/VvgnGb8t/queue.png" />
            </div>

            <div class="content">
              <h2>Queue Visualizer</h2>
              <p>
                The app that helps you visualize queue operations. With Queue
                Visualizer, you can create your own queue, push and pop
                elements, and watch how the queue changes step by step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
