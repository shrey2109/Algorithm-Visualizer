import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './SortVisuals.css';

import BubbleCode from './BubbleCode';

const BubbleSort = () => {
  const myState = useSelector((state) => state.updateProps);
  const [isPreviewShown, setPreviewShown] = useState(false);
  const [timerIds, setTimerIds] = useState([]);

  let arrVal = myState.arrVal.map((item) => item[0]);
  let ids = myState.arrVal.map((item) => item[1]);

  let count = -1,
    flag = 0;
  const solve = () => {
    const newTimerIds = [];
    setPreviewShown(true);

    for (let i = 0; i < arrVal.length; i++) {
      for (let j = 1; j < arrVal.length - i; j++) {
        count++;
        const outerTimeoutId = setTimeout(() => {
          document.getElementById('ifPart').style.backgroundColor =
            'rgb(128, 223, 254)';
          document.getElementById('swapPart').style.backgroundColor =
            'rgb(255, 255, 255, 0.5)';
          document.getElementById(ids[j]).childNodes[1].style.backgroundColor =
            'black';
          document.getElementById(
            ids[j - 1]
          ).childNodes[1].style.backgroundColor = 'black';

          setTimeout(() => {
            if (arrVal[j] < arrVal[j - 1]) {
              document.getElementById('ifPart').style.backgroundColor =
                'rgb(255, 255, 255, 0.5)';
              document.getElementById('swapPart').style.backgroundColor =
                'rgb(128, 223, 254)';

              // Swap array elements
              [arrVal[j], arrVal[j - 1]] = [arrVal[j - 1], arrVal[j]];

              // Swap corresponding IDs
              [ids[j], ids[j - 1]] = [ids[j - 1], ids[j]];

              // Move elements visually
              document.getElementById(ids[j]).style.transform = `translateX(${
                j * 35
              }px)`;
              document.getElementById(
                ids[j - 1]
              ).style.transform = `translateX(${(j - 1) * 35}px)`;
            }
          }, myState.sortingSpeed / 10);

          // Clear inner timeout after sorting speed
          setTimeout(() => {
            document.getElementById(
              ids[j - 1]
            ).childNodes[1].style.backgroundColor = myState.sortingColor;
            document.getElementById(
              ids[j]
            ).childNodes[1].style.backgroundColor = myState.sortingColor;
          }, myState.sortingSpeed);
        }, (count + flag) * (1000 + myState.sortingSpeed));

        newTimerIds.push(outerTimeoutId);
      }
    }

    return newTimerIds;
  };

  useEffect(() => {
    if (myState.sortingAlgorithm === 'bubble') {
      if (myState.sortplay) {
        const newTimerIds = solve();
        setTimerIds(newTimerIds);

        return () => {
          timerIds.forEach((timerId) => {
            clearTimeout(timerId);
          });
        };
      }
    }
  }, [myState.sortplay]);

  return (
    <>
      <h1> Working of Bubble Sort Algorithm </h1>
      <div id="codePart">
        <div id="ifPart">
          <p> if (arr[j] &gt; arr[j + 1]) </p>
        </div>
        <div id="swapPart" style={{ marginLeft: '30px' }}>
          <p> swap(arr[j], arr[j + 1]); </p>
        </div>
      </div>
      {isPreviewShown && <BubbleCode />}
    </>
  );
};

export default BubbleSort;
