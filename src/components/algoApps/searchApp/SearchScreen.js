import React from 'react'
import './SearchScreen.css'
import SearchNavbar from './SearchNavbar'
import SearchVisuals from './SearchVisuals'


function SearchScreen() {
    return (
        <>
          <div className='searchAppScreen'>
            <div style={{color : 'rgb(67, 104, 255)', textAlign : 'center', fontSize : '50px', textShadow: '3px 1px 3px rgb(100, 100, 100)',fontWeight: 'bold', fontFamily:'Bahnschrift SemiBold'}}>
                        Search Visualizer
            </div>
            <SearchNavbar/>
            <SearchVisuals/>
          </div>
        </>
      )
}

export default SearchScreen;
