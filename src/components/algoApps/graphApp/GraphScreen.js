import React from 'react'
import './GraphScreen.css'
import GraphNavbar from './GraphNavbar'
import GraphVisuals from './GraphVisuals'
// import GraphWorking from './GraphWorking'


function GraphScreen() {
  return (
    <>
      <div className='graphAppContainer'>
        <div style={{color : 'rgb(67, 104, 255)', textAlign : 'center', fontSize : '50px', textShadow: '3px 1px 3px rgb(100, 100, 100)',fontWeight: 'bold', fontFamily:'Bahnschrift SemiBold'}}>
                    Graph Visualizer
        </div>
        <GraphNavbar/>
        <GraphVisuals/>
        {/* <GraphWorking/> */}
      </div>
    </>
  )
}

export default GraphScreen