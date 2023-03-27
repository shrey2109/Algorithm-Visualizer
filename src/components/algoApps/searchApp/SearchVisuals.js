import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import './SearchVisuals.css';
import LinearSearch from "./LinearSearch";
import BinarySearch from "./BinarySearch";
import SearchCode from './SearchCode'

const SearchVisuals = () => {
  const myState = useSelector(state => state.updateProps);
  const dispatch = useDispatch();
  const color = myState.searchingColor;
  const speed = myState.searchingSpeed;


  return (
   <div className="visuals">
   <div className="visualizer"  style={{width:'50%',justifyContent :'left',alignItems:'center'}} >
  
      <div className="visual__items"  style={{justifyContent :'left',alignItems:'center'}}>
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
      {/* {myState.isfound===true && <h1 style={{color:'orange'}}> Number Found </h1> }
      {myState.isnotfound===true && <h1 style={{color:'orange'}}> Number not Found </h1>} */}


      <div className="code">
                 {/* <BinarySearch/> */}
                 {/* <LinearSearch/> */}

                {myState.searchingAlgorithm==='linear' && <LinearSearch />}
                {myState.searchingAlgorithm==='binary' && <BinarySearch />}


                <div className='searchcodeContainer'>
                  <SearchCode/>
               </div>
    
       
      </div>
    </div>
  );
};
export default SearchVisuals;

// 90 80 70  60 50 40 30 20 10 