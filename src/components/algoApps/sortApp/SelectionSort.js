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
            if (arrVal[ind] > arrVal[j]) ind = j;
            setTimeout(() => {
              document.getElementById(ids[j]).childNodes[1].style.backgroundColor = myState.sortingColor;
              document.getElementById('findSmall').style.backgroundColor = 'rgb(128, 223, 254)';
              document.getElementById('swapPart').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
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
          document.getElementById(ids[i]).childNodes[1].style.backgroundColor = myState.sortingColor;
          document.getElementById('findSmall').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('swapPart').style.backgroundColor = 'rgb(128, 223, 254)';
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
        <div id='codePart1'> 

      <div id='findSmall'>
         <p> //FINDING SMALLEST NUM FROM REMAINIG ARRAY</p>
         <p>int mini = i; </p>
         <p>for (int j = i + 1; j &lt; n; j++)</p> 
         <p style={{marginLeft:'30px'}}>if (arr[j] &lt; arr[mini]) </p>
         <p style={{marginLeft:'60px'}}>mini = j;</p>
      </div>

    <br/>
      <div id='swapPart'>
         <p> swap(arr[i], arr[mini]); </p>
      </div>

     </div>
     
      {isPreviewShown && <SelectionCode/>}
    </>
  );
};

export default SelectionSort;
