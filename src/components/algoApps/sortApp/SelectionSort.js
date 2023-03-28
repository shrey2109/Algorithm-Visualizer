import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import SelectionCode from "./SelectionCode";
// import SelectionComplexity from "./SelectionComplexity";
import SelectionCode from './SelectionCode';
import "./SortVisuals.css";

const SelectionSort = () => {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();
  const [isPreviewShown, setPreviewShown] = useState(false);
  let arrVal = myState.arrVal.map((item) => item[0]);
  let ids = myState.arrVal.map((item) => item[1]);

  const solve = () => {
    let n = arrVal.length;
    setPreviewShown(true);
    for (let i = 0; i < n; i++) {
      setTimeout(() => {
        let ind = i;
        document.getElementById(ids[i]).childNodes[1].style.backgroundColor ="black";
        for (let j = i; j < n; j++) {
          setTimeout(() => {
            document.getElementById(ids[j]).childNodes[1].style.backgroundColor = "black";
          }, 2*myState.sortingSpeed);
          if (arrVal[ind] > arrVal[j]) ind = j;
          setTimeout(() => {
            document.getElementById(ids[j]).childNodes[1].style.backgroundColor = myState.sortingColor;
          }, 2*myState.sortingSpeed);
        }
        let temp = arrVal[i];
        arrVal[i] = arrVal[ind];
        arrVal[ind] = temp;

        temp = ids[i];
        ids[i] = ids[ind];
        ids[ind] = temp;
        document.getElementById(ids[i]).style.transform = `translateX(${i * 35}px)`;
        document.getElementById(ids[ind]).style.transform = `translateX(${ind * 35}px)`;
        setTimeout(() => {
          document.getElementById(ids[i]).childNodes[1].style.backgroundColor =
            myState.sortingColor;
        }, 3*myState.sortingSpeed);
      }, i * 3 * myState.sortingSpeed);
    }

    setTimeout(() => {
      // dispatch({
      //    type:'PLAY_PAUSE',
      //    _play:false
      // })
      // dispatch({
      //    type:'UPDATE_COLOR',
      //    color: 'rgb(0, 182, 0)'
      // })
    }, (((myState.arrVal.length - 1) * myState.arrVal.length) / 2) * myState.sortingSpeed + 50);
  };

  useEffect(() => {
    if (myState.sortingAlgorithm==='selection') {
      console.log(myState.sortplay);
      if (myState.sortplay) {
        console.log("-----------PLAY IS ON------------");
        solve();
      }
    }
  }, [myState.sortplay]);

  return (
    <>
      <div id="codePart">
        <div id="ifPart">
          <p> if (arr[j] &gt; arr[j + 1]) </p>
        </div>
        <div id="swapPart" style={{ marginLeft: "30px" }}>
          <p> swap(arr[j], arr[j + 1]); </p>
        </div>
      </div>
      {/* {isPreviewShown && <SelectionCode />}
      {isPreviewShown && <SelectionComplexity />} */}
      {isPreviewShown && <SelectionCode/>}
    </>
  );
};

export default SelectionSort;
