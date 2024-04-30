import React from 'react';

import './SearchScreen.css';

import SearchNavbar from './SearchNavbar';
import SearchVisuals from './SearchVisuals';

const SearchScreen = () => {
  return (
    <>
      <div className="searchAppScreen">
        <div
          style={{
            fontSize: '45px',
            fontWeight: '600',
            backgroundImage: 'radial-gradient(circle, #ee4b2b, #553c9a)',
            color: 'transparent',
            textAlign: 'center',
            backgroundClip: 'text',
          }}
        >
          Search Visualizer
        </div>
        <SearchNavbar />
        <SearchVisuals />
      </div>
    </>
  );
};

export default SearchScreen;
