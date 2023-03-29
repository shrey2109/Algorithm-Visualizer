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
      document.getElementById('for1').style.backgroundColor = 'rgb(128, 223, 254)';
      document.getElementById('mini1').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
      document.getElementById('for2').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
      document.getElementById('if').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
      document.getElementById('mini2').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
      document.getElementById('swapPart').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
      setTimeout(() => {
        document.getElementById('for1').style.backgroundColor = 'rgb(128, 223, 254)';
        document.getElementById('mini1').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
        document.getElementById('for2').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
        document.getElementById('if').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
        document.getElementById('mini2').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
        document.getElementById('swapPart').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
        let ind = i;
        document.getElementById(ids[i]).childNodes[1].style.backgroundColor ="black";
        for (let j = i; j < n; j++) {
          document.getElementById('for1').style.backgroundColor = 'rgb(128, 223, 254)';
          document.getElementById('mini1').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('for2').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('if').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('mini2').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('swapPart').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          setTimeout(() => {
            document.getElementById(ids[j]).childNodes[1].style.backgroundColor = "black";
          }, 2*myState.sortingSpeed);
          document.getElementById('for1').style.backgroundColor = 'rgb(128, 223, 254)';
          document.getElementById('mini1').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('for2').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('if').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('mini2').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          document.getElementById('swapPart').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
          if (arrVal[ind] > arrVal[j]) ind = j;
          setTimeout(() => {
            document.getElementById('for1').style.backgroundColor = 'rgb(128, 223, 254)';
            document.getElementById('mini1').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
            document.getElementById('for2').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
            document.getElementById('if').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
            document.getElementById('mini2').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
            document.getElementById('swapPart').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
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
        <div id='codePart1'> 
      <div id='for1'>
         <p> for (int i = 0; i &lt; n - 1; i++)</p>
      </div>
      <div id='mini1' style={{marginLeft:'30px'}}>
         <p> int mini = i;</p>
      </div>
      <div id='for2' style={{marginLeft:'30px'}}>
         <p>  for (int j = i + 1; j &lt; n; j++)</p>
      </div>
      <div id='if' style={{marginLeft:'60px'}}>
         <p>  if (arr[j] &lt; arr[mini]) </p>
      </div>
      <div id='mini2' style={{marginLeft:'90px'}}>
         <p>   mini = j;</p>
      </div>
      <div id='swapPart' style={{marginLeft:'30px'}}>
         <p> swap(arr[i], arr[mini]); </p>
      </div>
     </div>
     
      {isPreviewShown && <SelectionCode/>}
    </>
  );
};

export default SelectionSort;
