import { cyan } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import BinaryCode from "./BinaryCode";
// import BinaryComplexity from "./BinaryComplexity";

import BinaryCode from './BinaryCode';
import "./SearchVisuals.css";

const BinarySearch = () => {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();
  const [isPreviewShown, setPreviewShown] = useState(false);
  const [isfound, setisfound] = useState(false);
  const [isnotfound, setisnotfound] = useState(false);
  let arrVal = myState.arrValSearch.map((item) => item[0]);
   let ids = myState.arrValSearch.map((item) => item[1]);
  let num = myState.searchVal;
  var count = -1;

  const solve = () => {
    {
      <div> HELLO HI BYE </div>;
    }
    setPreviewShown(true);
    console.log("INTO SOLVE");
    console.log(arrVal.length);
    let l = 0;
    let r = arrVal.length;
    var mid;

    var intr = setInterval(() => {
      count++;
      mid = Math.floor((l + r) / 2);
      console.log("V", ids[mid]);

      document.getElementById(ids[mid]).childNodes[0].style.backgroundColor ="orange";
      document.getElementById(ids[mid]).childNodes[0].style.borderRadius ="50px";

      setTimeout(() => {
        console.log("AV", arrVal[mid]);
        if (arrVal[mid] === num) {
          console.log(arrVal[mid]);

          document.getElementById(ids[mid]).childNodes[0].style.backgroundColor =  myState.searchingColor;
          console.log("CLEAR INTERVAL");
          setisfound(true);
          clearInterval(intr);
        } else if (arrVal[mid] < num) {
          l = mid + 1;
          console.log("SMALLER");
        } else {
          r = mid - 1;
          console.log("GREATER");
        }
      }, 100);
      setTimeout(() => {
         if(arrVal[mid]!==num){
        document.getElementById(ids[mid]).childNodes[0].style.backgroundColor = "cyan";
        document.getElementById(ids[mid]).childNodes[0].style.borderRadius = '0px';
         }
      }, 1000);

      if (l > r) {
        console.log("CLEAR INTERVAL");
        clearInterval(intr);
      }
      if(count>=arrVal.length/2){
        setisnotfound(true);
      }
    }, 2000);

    setTimeout(() => {
      // dispatch({
      //    type:'PLAY_PAUSE',
      //    play: false
      // })

      //    dispatch({
      //       type:'UPDATE_COLOR',
      //       // GREEN COLOR ON SUCCESS
      //       // color: 'rgb(0, 182, 0)'
      //       color: '#51a954'
      //       // color: 'green'
      //    })
      console.log("KHATAM TATA BYE BYE GOOD BYE GAYA");
    }, (((myState.arrVal.length - 1) * myState.arrVal.length) / 2) * myState.searchingSpeed + 50);
  };

  useEffect(() => {
    if(myState.searchingAlgorithm==='binary'){
       console.log(myState.searchplay);
       if(myState.searchplay){
          console.log("-----------PLAY IS ON------------");
          solve();
         
       }
    }
 },[myState.searchplay]);

  return (
      <>
      {isfound && <h1> NUBER IS FOUND </h1>}
      {isnotfound && <h1>NUMBER IS NOT FOUND</h1>}

      {isPreviewShown && <BinaryCode/>}
    </>
  );
};

export default BinarySearch;
