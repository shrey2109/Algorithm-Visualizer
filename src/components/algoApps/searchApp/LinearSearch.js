import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import LinearCode from './LinearCode';
// import LinearComplexity from './LinearComplexity';
import LinearCode from './LinearCode';

import './SearchVisuals.css';

const LinearSearch = () =>{
   const myState = useSelector(state => state.updateProps);
   const dispatch = useDispatch();
   const [isPreviewShown, setPreviewShown] = useState(false);
   
   // const [isdone,setisdone] = useState(false);
   let arrVal = myState.arrValSearch.map((item) => item[0]);
   let ids = myState.arrValSearch.map((item) => item[1]);
   let num = myState.searchVal;
   var i=0,c=0;







   const solve = () => {
      {<div> HELLO HI BYE </div>}
      setPreviewShown(true);
      console.log("INTO SOLVE");
      console.log(arrVal.length);

            var intr = setInterval(()=>{
               c++;
               console.log(c);
               document.getElementById('forPart').style.backgroundColor = 'rgb(128, 223, 254)';
               document.getElementById('ifPart').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
               document.getElementById('return').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
               document.getElementById(ids[i]).childNodes[0].style.backgroundColor = 'orange';
               document.getElementById(ids[i]).childNodes[0].style.borderRadius = '50px';

               
               //document.getElementById(ids[j-1]).childNodes[1].style.backgroundColor = ' black';
               setTimeout(() => {
                  document.getElementById('forPart').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
                  document.getElementById('ifPart').style.backgroundColor = 'rgb(128, 223, 254)';
                  document.getElementById('return').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
                  if(arrVal[i] === num){
                     document.getElementById('forPart').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
                  document.getElementById('ifPart').style.backgroundColor = 'rgb(255, 255, 255, 0.5)';
                  document.getElementById('return').style.backgroundColor = 'rgb(128, 223, 254)';
                     document.getElementById(ids[i]).childNodes[0].style.backgroundColor = 'pink';
                     dispatch({
                        type: "Found",
                        isfound: true,
                     });
                     clearInterval(intr);
              
                     
                     // document.getElementById(ids[j-1]).style.transform = `translateX(${(j-1)*35}px)`;
                     
                  }
                  // }, (count+flag)*1);
               }, 100);
               setTimeout(() => {
                  if(arrVal[i]!==num){
                  document.getElementById(ids[i]).childNodes[0].style.backgroundColor = myState.searchingColor;
                  document.getElementById(ids[i]).childNodes[0].style.borderRadius = '0px';
                  //document.getElementById(ids[j]).childNodes[1].style.backgroundColor = myState.SearchingColor;
                  // }, (count+flag)*5);
                  i++;
                  }
               }, 1000);
               if(i>=arrVal.length){
                  clearInterval(intr);
                 }
                 if(c>=arrVal.length){
                  dispatch({
                         type: "NotFound",
                         isnotfound: true,
                      });
               }
                  },2000);

          //  }
         
          
    
      
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

      },(((myState.arrVal.length-1)*(myState.arrVal.length))/2)*myState.SearchingSpeed+50);
   
     
      
   }
   
   useEffect(() => {
      if(myState.searchingAlgorithm==='linear'){
         console.log(myState.searchplay);
         if(myState.searchplay){
            console.log("-----------PLAY IS ON------------");
            solve();
           
         }
      }
   },[myState.searchplay]);

   return (
   <>
   
   <div id='codePart'>
      <div id='forPart'>
         <p> for (int i = 0; i &lt; N; i++)</p>
      </div>
      <div id='ifPart' style={{marginLeft:'30px'}}>
         <p> if (arr[i] == num) </p>
      </div>
      <div id='return' style={{marginLeft:'60px'}}>
         <p>return i;</p>
      </div>
   </div>

      {isPreviewShown && <LinearCode/>}
   </>
   );
}

export default LinearSearch;


