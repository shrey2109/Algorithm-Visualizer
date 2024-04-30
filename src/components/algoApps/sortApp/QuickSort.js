import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import QuickCode from './QuickCode';
import './SortVisuals.css';

const QuickSort = () => {
  const myState = useSelector((state) => state.updateProps);
  const [isPreviewShown, setPreviewShown] = useState(false);

  let values = myState.arrVal.map((item) => item[0]);
  let ids = myState.arrVal.map((item) => item[1]);

  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const partition = (values, ids, l, r, timer) => {
    let pivot = values[r];

    let j = l - 1;
    for (let i = l; i < r; i++) {
      if (values[i] < pivot) {
        j++;
        swap(values, i, j);
        swap(ids, i, j);
        document.getElementById(ids[i]).style.transform = `translateX(${
          i * 35
        }px)`;
        document.getElementById(ids[j]).style.transform = `translateX(${
          j * 35
        }px)`;
      }
    }
    swap(values, r, j + 1);
    swap(ids, r, j + 1);

    setTimeout(() => {
      document.getElementById('Partition').style.backgroundColor =
        'rgb(128, 223, 254)';
      document.getElementById('left').style.backgroundColor =
        'rgb(255, 255, 255, 0.5)';
      document.getElementById('right').style.backgroundColor =
        'rgb(255, 255, 255, 0.5)';
      document.getElementById(ids[j + 1]).childNodes[1].style.backgroundColor =
        'black';
      setTimeout(() => {
        document.getElementById('Partition').style.backgroundColor =
          'rgb(255, 255, 255, 0.5)';
        document.getElementById('left').style.backgroundColor =
          'rgb(128, 223, 254)';
        document.getElementById('right').style.backgroundColor =
          'rgb(255, 255, 255, 0.5)';
        document.getElementById(
          ids[j + 1]
        ).childNodes[1].style.backgroundColor = myState.sortingColor;
        document.getElementById('Partition').style.backgroundColor =
          'rgb(255, 255, 255, 0.5)';
        document.getElementById('left').style.backgroundColor =
          'rgb(255, 255, 255, 0.5)';
        document.getElementById('right').style.backgroundColor =
          'rgb(128, 223, 254)';
      }, myState.sortingSpeed * 6 - 10);

      document.getElementById(ids[r]).style.transform = `translateX(${
        r * 35
      }px)`;
      document.getElementById(ids[j + 1]).style.transform = `translateX(${
        (j + 1) * 35
      }px)`;
    }, myState.sortingSpeed * timer * 6);
    return j + 1;
  };

  const quickSort = (values, ids, l, r, timer) => {
    if (l < r) {
      let ind = partition(values, ids, l, r, timer);
      quickSort(values, ids, l, ind - 1, timer - 1);
      quickSort(values, ids, ind + 1, r, timer - 1);
    }
  };

  const solve = () => {
    setPreviewShown(true);

    quickSort(
      values,
      ids,
      0,
      values.length - 1,
      Math.ceil(Math.log(values.length + 1))
    );

    // setTimeout(() => {
    //    dispatch({
    //       type:'PLAY_PAUSE',
    //       play:false
    //    })

    //    dispatch({
    //       type:'UPDATE_COLOR',
    //       sortingColor: 'rgb(0, 182, 0)'
    //    })
    // },6*myState.speed*(1+Math.ceil(Math.log(values.length+1)))+100);
  };

  useEffect(() => {
    if (myState.sortingAlgorithm === 'quick') {
      if (myState.sortplay) solve();
    }
  }, [myState.sortplay]);

  return (
    <>
      <div id="codePart1">
        <div id="Partition" style={{ marginLeft: '30px' }}>
          <p> int pIndex = partition(arr, low, high);</p>
        </div>
        <div id="left" style={{ marginLeft: '30px' }}>
          <p> qs(arr, low, pIndex - 1);</p>
        </div>
        <div id="right" style={{ marginLeft: '30px' }}>
          <p> qs(arr, pIndex + 1, high); </p>
        </div>
      </div>
      {isPreviewShown && <QuickCode />}
    </>
  );
};

export default QuickSort;
