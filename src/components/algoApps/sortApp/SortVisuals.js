import React from 'react';
import { useSelector } from 'react-redux';

import './SortVisuals.css';

import BubbleSort from './BubbleSort';
import InsertionSort from './InsertionSort';
import SelectionSort from './SelectionSort';
import MergeSort from './MergeSort';
import QuickSort from './QuickSort';

const SortVisuals = () => {
  const myState = useSelector((state) => state.updateProps);
  const color = myState.sortingColor;
  const speed = myState.sortingSpeed;

  return (
    <div className="visuals">
      <div className="visualizer">
        {
          //FOR BLACK BORDER LINE BELOW BARS
          // Main
          <div
            className="visual_items"
            style={{ width: `${myState.arrVal.length * 35}px` }}
          >
            {myState.arrVal.map((item) => {
              // SPACE B/W BARS
              //Main
              return (
                <div
                  className="visual_item"
                  data-testid="sortBar"
                  key={item[1]}
                  id={item[1]}
                  style={{
                    transition: `${speed / 1200}s linear all`,
                    transform: `translateX(${item[1] * 35}px)`,
                  }}
                >
                  {/* BAR HEIGHT ABOVE BAR */}
                  <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                    {item[0]}
                  </div>
                  {/* BAR VISUALS */}
                  {/* Main */}
                  <div
                    className="visual"
                    style={{
                      width: '25px',
                      height: `${item[0] * 3}px`,
                      backgroundColor: color,
                      boxShadow: '2px 1px 2px',
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        }
      </div>

      <div className="code">
        {myState.sortingAlgorithm === 'bubble' && <BubbleSort />}
        {myState.sortingAlgorithm === 'insertion' && <InsertionSort />}
        {myState.sortingAlgorithm === 'selection' && <SelectionSort />}
        {myState.sortingAlgorithm === 'merge' && <MergeSort />}
        {myState.sortingAlgorithm === 'quick' && <QuickSort />}
      </div>
    </div>
  );
};
export default SortVisuals;
