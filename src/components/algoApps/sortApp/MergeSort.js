import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './SortVisuals.css';

import MergeCode from './MergeCode';

const MergeSort = () => {
  const myState = useSelector((state) => state.updateProps);
  const [isPreviewShown, setPreviewShown] = useState(false);

  let arrVal = myState.arrVal.map((item) => item[0]);
  let ids = myState.arrVal.map((item) => item[1]);

  const mergeSort = (arrVal, ids, timer, l, r) => {
    if (l >= r) return;

    let mid = Math.floor((l + r) / 2);

    mergeSort(arrVal, ids, timer - 1, l, mid);

    mergeSort(arrVal, ids, timer - 1, mid + 1, r);

    setTimeout(() => {
      setTimeout(() => {
        document.getElementById('left').style.backgroundColor =
          'rgb(128, 223, 254)';
        document.getElementById('merge').style.backgroundColor =
          'rgb(255, 255, 255, 0.5)';
      }, 1000);

      let color = [];

      for (let i = 0; i < 3; i++) color.push(Math.floor(Math.random() * 200));

      for (let i = l; i <= r; i++)
        document.getElementById(
          ids[i]
        ).childNodes[1].style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;

      for (let i = l; i <= r; i++) {
        for (let j = i + 1; j <= r; j++) {
          if (arrVal[i] > arrVal[j]) {
            [arrVal[i], arrVal[j]] = [arrVal[j], arrVal[i]];
            [ids[i], ids[j]] = [ids[j], ids[i]];

            let new_ids = [...ids];

            document.getElementById(new_ids[i]).style.transform = `translateX(${
              i * 35
            }px)`;
            document.getElementById(new_ids[j]).style.transform = `translateX(${
              j * 35
            }px)`;

            document.getElementById('left').style.backgroundColor =
              'rgb(255, 255, 255, 0.5)';
            document.getElementById('merge').style.backgroundColor =
              'rgb(128, 223, 254)';
          }
        }
      }
    }, timer * 2000);
  };

  const solve = () => {
    setPreviewShown(true);

    mergeSort(
      arrVal,
      ids,
      Math.ceil(Math.log(arrVal.length + 1)),
      0,
      arrVal.length - 1
    );

    setTimeout(() => {},
    (((myState.arrVal.length - 1) * myState.arrVal.length) / 2) * myState.sortingSpeed + 50);
  };

  useEffect(() => {
    if (myState.sortingAlgorithm === 'merge') {
      if (myState.sortplay) {
        solve();
      }
    }
  }, [myState.sortplay]);

  return (
    <>
      <div id="codePart">
        <div id="left" style={{ marginLeft: '30px' }}>
          <p> mergeSort(arr, low, mid);</p>
          <p> mergeSort(arr, mid + 1, high); </p>
        </div>
        <div id="merge" style={{ marginLeft: '30px' }}>
          <p> merge(arr, low, mid, high); </p>
        </div>
      </div>

      {isPreviewShown && <MergeCode />}
    </>
  );
};

export default MergeSort;
