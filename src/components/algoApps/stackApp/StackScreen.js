import React from 'react'
import './StackScreen.css'
import StackNavbar from './StackNavbar'
import StackVisuals from './StackVisuals'


function StackScreen() {
  return (
    <>
      <div className='stackAppScreen'>
        <div style={{color : 'rgb(67, 104, 255)', textAlign : 'center', fontSize : '50px', textShadow: '3px 1px 3px rgb(100, 100, 100)',fontWeight: 'bold', fontFamily:'Bahnschrift SemiBold'}}>
                    Stack Visualizer
        </div>
        <StackNavbar/>
        <StackVisuals/>
      </div>
    </>
  )
}

export default StackScreen