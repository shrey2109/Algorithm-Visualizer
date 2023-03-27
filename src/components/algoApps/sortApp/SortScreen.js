import React from 'react'
import './SortScreen.css'
import SortNavbar from './SortNavbar'
import SortVisuals from './SortVisuals'


function SortScreen() {
  return (
    <>
      <div className='sortAppContainer'>
        <div style={{color : 'rgb(67, 104, 255)', textAlign : 'center', fontSize : '50px', textShadow: '3px 1px 3px rgb(100, 100, 100)',fontWeight: 'bold', fontFamily:'Bahnschrift SemiBold'}}>
                    Sorting Visualizer
        </div>
        <SortNavbar/>
        <SortVisuals/>
      </div>
    </>
  )
}

export default SortScreen