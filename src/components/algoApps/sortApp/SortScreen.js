import React from 'react';

import SortNavbar from './SortNavbar';
import SortVisuals from './SortVisuals';

import './SortScreen.css';

const SortScreen = () => {
  return (
    <>
      <div className="sortAppContainer">
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
          Sorting Visualizer
        </div>
        <SortNavbar />
        <SortVisuals />
      </div>
    </>
  );
};

export default SortScreen;
