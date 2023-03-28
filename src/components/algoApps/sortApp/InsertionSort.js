import { red } from '@mui/material/colors';
import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InsertionCode from './InsertionCode';
import './SortVisuals.css';

const InsertionSort = () =>{
   const myState = useSelector(state => state.updateProps);
   const dispatch = useDispatch();
   const [isPreviewShown, setPreviewShown] = useState(false);

   let arrVal = myState.arrVal.map((item) => item[0]);
   let ids = myState.arrVal.map((item) => item[1]);
   let timer = 0;
   let total_time = 0;
   let timing_map = new Map();
   
   for(let i = 0; i < arrVal.length; i++){
       let j = i+1;
       while(j>0 && arrVal[j]<arrVal[j-1]){
           let temp = arrVal[j];
           arrVal[j] = arrVal[j-1];
           arrVal[j-1] = temp;
           total_time++;
           j--;
        }
        timing_map.set(i+1,i+1-j);
    }
    
    arrVal = myState.arrVal.map((item) => item[0]);
   //let count = 0, flag = 0;

   const solve = () => {
    //   {<div> HELLO HI BYE </div>}
       setPreviewShown(true);
      console.log("INTO SOLVE");

    
      for(let i = 0; i < arrVal.length-1; i++){
         let ind = i+1;

         while(ind>0 && arrVal[ind]<arrVal[ind-1]){

            let j = ind;

            let temp = arrVal[j];
            arrVal[j] = arrVal[j-1];
            arrVal[j-1] = temp;

            temp = ids[j];
            ids[j] = ids[j-1];
            ids[j-1] = temp;

            let new_ids = [...ids];
            
            setTimeout(() => {
               
               document.getElementById(new_ids[j]).style.transform = `translateX(${j*35}px)`;
               document.getElementById(new_ids[j]).childNodes[1].style.backgroundColor = 'black';
               document.getElementById(new_ids[j-1]).childNodes[1].style.backgroundColor = 'black';
               
               setTimeout(() => {
                  document.getElementById(new_ids[j]).childNodes[1].style.backgroundColor = myState.sortingColor;
                  document.getElementById(new_ids[j-1]).childNodes[1].style.backgroundColor = myState.sortingColor;
               // },myState.sortingSpeed-10);
               },myState.sortingSpeed-10);
               
               document.getElementById(new_ids[j-1]).style.transform = `translateX(${(j-1)*35}px)`;  
            // },timer*myState.sortingSpeed);
            },timer*2*myState.sortingSpeed);

            timer++;
            ind--;
         
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
         },(((myState.arrVal.length-1)*(myState.arrVal.length))/2)*myState.sortingSpeed+50);
   }
    
   }
useEffect(() => {
    if(myState.sortingAlgorithm==='insertion'){
        console.log(myState.sortplay);
        if(myState.sortplay){
            console.log("-----------PLAY IS ON------------");
            solve();
        }
    }
 },[myState.sortplay]);

   return (
   <>
   
<h1> HELLo from insertion sort</h1>
   {/* CSS code in Visuals.css */}
   <div id='codePart'>
      <div id='ifPart'>
         <p> if (arr[j] &gt; arr[j + 1]) </p>
      </div>
      <div id='swapPart' style={{marginLeft:'30px'}}>
         <p> swap(arr[j], arr[j + 1]); </p>
      </div>
   </div>
      {/* {isPreviewShown && <InsertionCode code={CppCode} language="cpp"/>} */}
      {isPreviewShown && <InsertionCode/>}
      {/* {isPreviewShown && <InsertionComplexity/>} */}
   </>
   );
}


export default InsertionSort;
