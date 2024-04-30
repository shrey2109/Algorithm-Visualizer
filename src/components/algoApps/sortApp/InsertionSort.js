import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import './SortVisuals.css';

import InsertionCode from './InsertionCode';

const InsertionSort = () => {
  const myState = useSelector((state) => state.updateProps);
  const [isPreviewShown, setPreviewShown] = useState(false);

  let arrVal = myState.arrVal.map((item) => item[0]);
  let ids = myState.arrVal.map((item) => item[1]);
  let timer = 0;
  let timing_map = new Map();

  for (let i = 0; i < arrVal.length; i++) {
    let j = i + 1;
    while (j > 0 && arrVal[j] < arrVal[j - 1]) {
      let temp = arrVal[j];
      arrVal[j] = arrVal[j - 1];
      arrVal[j - 1] = temp;
      j--;
    }
    timing_map.set(i + 1, i + 1 - j);
  }

  arrVal = myState.arrVal.map((item) => item[0]);

  const solve = () => {
    setPreviewShown(true);

    for (let i = 0; i < arrVal.length - 1; i++) {
      let ind = i + 1;

      while (ind > 0 && arrVal[ind] < arrVal[ind - 1]) {
        let j = ind;

        let temp = arrVal[j];
        arrVal[j] = arrVal[j - 1];
        arrVal[j - 1] = temp;

        temp = ids[j];
        ids[j] = ids[j - 1];
        ids[j - 1] = temp;

        let new_ids = [...ids];

        setTimeout(() => {
          document.getElementById(new_ids[j]).style.transform = `translateX(${
            j * 35
          }px)`;
          document.getElementById(
            new_ids[j]
          ).childNodes[1].style.backgroundColor = 'black';
          document.getElementById(
            new_ids[j - 1]
          ).childNodes[1].style.backgroundColor = 'black';
          document.getElementById('forPart').style.backgroundColor =
            'rgb(255, 255, 255, 0.5)';
          document.getElementById('whilePart').style.backgroundColor =
            'rgb(255, 255, 255, 0.5)';
          document.getElementById('swapPart').style.backgroundColor =
            'rgb(128, 223, 254)';
          setTimeout(() => {
            document.getElementById(
              new_ids[j]
            ).childNodes[1].style.backgroundColor = myState.sortingColor;
            document.getElementById(
              new_ids[j - 1]
            ).childNodes[1].style.backgroundColor = myState.sortingColor;
            document.getElementById('forPart').style.backgroundColor =
              'rgb(255, 255, 255, 0.5)';
            document.getElementById('whilePart').style.backgroundColor =
              'rgb(128, 223, 254)';
            document.getElementById('swapPart').style.backgroundColor =
              'rgb(255, 255, 255, 0.5)';
          }, myState.sortingSpeed - 10);

          document.getElementById(
            new_ids[j - 1]
          ).style.transform = `translateX(${(j - 1) * 35}px)`;
        }, timer * 2 * myState.sortingSpeed);
        document.getElementById('forPart').style.backgroundColor =
          'rgb(128, 223, 254)';
        document.getElementById('whilePart').style.backgroundColor =
          'rgb(255, 255, 255, 0.5)';
        document.getElementById('swapPart').style.backgroundColor =
          'rgb(255, 255, 255, 0.5)';

        timer++;
        ind--;
      }
    }
  };
  useEffect(() => {
    if (myState.sortingAlgorithm === 'insertion') {
      if (myState.sortplay) {
        solve();
      }
    }
  }, [myState.sortplay]);

  return (
    <>
      <div id="codePart">
        <div id="forPart">
          <p> for (int i = 0; i &lt;= n - 1; i++) </p>
        </div>

        <div id="whilePart" style={{ marginLeft: '30px' }}>
          <p> while (j &gt; 0 && arr[j - 1] &gt; arr[j]) </p>
        </div>

        <div id="swapPart" style={{ marginLeft: '60px' }}>
          <p> swap(arr[j], arr[j + 1]); </p>
        </div>
      </div>

      {isPreviewShown && <InsertionCode />}
    </>
  );
};

export default InsertionSort;
