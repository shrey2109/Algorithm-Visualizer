import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./HomeScreen.css";
import TopicCard from "./TopicCard";

const HomeScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "RESET_STATE",
    });
  }, [dispatch]);

  const sortApp = () => navigate("/sort");
  const graphApp = () => navigate("/graph");
  const searchApp = () => navigate("/search");
  const stackApp = () => navigate("/stack");
  const queueApp = () => navigate("/queue");

  return (
    <div className="home-container animate-fade-in">
      <section className="hero-section">
        <h1 className="hero-title">ALGO CANVAS</h1>
        <p className="hero-subtitle">
          Interactive visualization of data structures and algorithms with step-by-step execution and code tracing.
        </p>
      </section>

      <section className="topics-section">
        <div className="topics-grid">
          {/* Sorting Visualizer Card */}
          <TopicCard
            onClick={sortApp}
            title="Sorting Visualizer"
            tag="Algorithms"
            complexity="O(N log N)"
            data="Explore Bubble, Insertion, Selection, Merge, and Quick Sort. Watch array element comparisons and swaps in real time with synchronized code tracing."
            previewGraphic={
              <div className="card-custom-preview preview-sorting">
                <div className="preview-bar-chart">
                  <div className="p-bar b1" style={{ height: '35%' }}></div>
                  <div className="p-bar b2 active-compare" style={{ height: '65%' }}></div>
                  <div className="p-bar b3 active-compare" style={{ height: '48%' }}></div>
                  <div className="p-bar b4" style={{ height: '82%' }}></div>
                  <div className="p-bar b5 sorted-p" style={{ height: '95%' }}></div>
                </div>
                <div className="preview-axis"></div>
              </div>
            }
          />

          {/* Graph Visualizer Card */}
          <TopicCard
            onClick={graphApp}
            title="Graph Visualizer"
            tag="Pathfinding"
            complexity="O(V + E)"
            data="Simulate Breadth-First Search (BFS) and Depth-First Search (DFS) traversing a 2D node grid. Place custom start and end points and draw obstacles."
            previewGraphic={
              <div className="card-custom-preview preview-graph">
                <div className="mini-grid">
                  <div className="mg-cell mg-start">S</div>
                  <div className="mg-cell mg-visited"></div>
                  <div className="mg-cell mg-path"></div>
                  <div className="mg-cell mg-end">E</div>
                  <div className="mg-cell"></div>
                  <div className="mg-cell mg-wall">#</div>
                  <div className="mg-cell mg-path"></div>
                  <div className="mg-cell"></div>
                  <div className="mg-cell"></div>
                  <div className="mg-cell mg-wall">#</div>
                  <div className="mg-cell mg-visited"></div>
                  <div className="mg-cell"></div>
                </div>
              </div>
            }
          />

          {/* Search Visualizer Card */}
          <TopicCard
            onClick={searchApp}
            title="Search Visualizer"
            tag="Search"
            complexity="O(log N)"
            data="Compare Linear Search and Binary Search on custom integer arrays. Track index pointers as they inspect elements and locate search targets."
            previewGraphic={
              <div className="card-custom-preview preview-search">
                <div className="mini-search-row">
                  <div className="ms-box">12</div>
                  <div className="ms-box">28</div>
                  <div className="ms-box ms-target">42</div>
                  <div className="ms-box">65</div>
                  <div className="ms-box">89</div>
                </div>
                <div className="search-pointer-indicator">
                  <span className="search-arrow-up">▲</span>
                  <span className="search-target-label">Target: 42</span>
                </div>
              </div>
            }
          />

          {/* Stack Visualizer Card */}
          <TopicCard
            onClick={stackApp}
            title="Stack Visualizer"
            tag="LIFO Structure"
            complexity="O(1) Ops"
            data="Inspect Last-In-First-Out (LIFO) stack operations. Push and pop items with side-by-side memory tracking and live code glow highlight."
            previewGraphic={
              <div className="card-custom-preview preview-stack">
                <div className="mini-stack-bucket">
                  <div className="ms-layer top-layer">
                    <span>Val: 92</span>
                    <span className="ms-top-tag">TOP</span>
                  </div>
                  <div className="ms-layer">
                    <span>Val: 56</span>
                  </div>
                  <div className="ms-layer">
                    <span>Val: 24</span>
                  </div>
                </div>
              </div>
            }
          />

          {/* Queue Visualizer Card */}
          <TopicCard
            onClick={queueApp}
            title="Queue Visualizer"
            tag="FIFO Structure"
            complexity="O(1) Ops"
            data="Examine First-In-First-Out (FIFO) queue mechanisms. Enqueue to the rear and dequeue from the front with real-time pointer indicators."
            previewGraphic={
              <div className="card-custom-preview preview-queue">
                <div className="mini-queue-track">
                  <span className="q-dir-tag">FRONT ⇦</span>
                  <div className="q-item-belt">
                    <div className="mq-item mq-head">31</div>
                    <div className="mq-item">58</div>
                    <div className="mq-item mq-tail">87</div>
                  </div>
                  <span className="q-dir-tag">⇦ REAR</span>
                </div>
              </div>
            }
          />
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
