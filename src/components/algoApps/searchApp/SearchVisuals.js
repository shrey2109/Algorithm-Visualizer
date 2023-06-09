import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import './SearchVisuals.css';
import LinearSearch from "./LinearSearch";
import BinarySearch from "./BinarySearch";

const SearchVisuals = () => {
  const myState = useSelector(state => state.updateProps);
  const dispatch = useDispatch();
  const color = myState.searchingColor;
  const speed = myState.searchingSpeed;


  return (
   <div className="visuals">
   {/* <div className="visualizer"  style={{justifyContent :'left',alignItems:'center'}} > */}
   <div className="visualizer"  style={{justifyContent :'center', alignItems:'center'}} >
   {/* <div className="visualizer"> */}
  
      {/* <div className="visual__items"  style={{justifyContent :'left',alignItems:'center'}}> */}
      <div className="visual__items" style={{width:`${myState.arrValSearch.length*90}px`}}>
         {
            myState.arrValSearch.map((item) => {
               

               return <div className="visual__item" key={item[1]} id={item[1]} style={{transition:`${speed/1200}s linear all`, transform:`translateX(${item[1]*90}px)`}}>

                        <div className="visual" style={{width:'75px' , height:`75px`, backgroundColor:color, boxShadow:'2px 1px 2px', display:'flex',justifyContent :'center',textAlign:'center',alignItems:'center'}}>
                        <div style= {{ fontSize: '15px', fontWeight:'bold' ,textAlign:'center'}}> {item[0]} </div>
                        </div>

                     </div>

            })
         }   
      </div>
      
</div>
      {myState.isfound===true &&  <h1 style={{color:'orange'}}> Number Found </h1>}
      {myState.isnotfound===true && <h1 style={{color:'orange'}}> Number not Found </h1>}


      <div className="code">
      {/* <div> */}
                 {/* <BinarySearch/> */}
                 {/* <LinearSearch/> */}

                {myState.searchingAlgorithm==='linear' && <LinearSearch />}
                {myState.searchingAlgorithm==='binary' && <BinarySearch />}

       
      </div>
    </div>
  );
};
export default SearchVisuals;

// 90 80 70  60 50 40 30 20 10 