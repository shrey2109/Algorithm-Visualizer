import React from 'react'
import './QueueScreen.css'
import QueueNavbar from './QueueNavbar'
import QueueVisuals from './QueueVisuals'


function QueueScreen() {
  return (
    <>
      <div className='queueAppContainer'>
        <div style={{color : 'rgb(67, 104, 255)', textAlign : 'center', fontSize : '50px', textShadow: '3px 1px 3px rgb(100, 100, 100)',fontWeight: 'bold', fontFamily:'Bahnschrift SemiBold'}}>
                    Queue Visualizer
        </div>
        <QueueNavbar/>
        <QueueVisuals/>
      </div>
    </>
  )
}

export default QueueScreen