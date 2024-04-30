import React from 'react';
import StackNavbar from './StackNavbar';
import StackVisuals from './StackVisuals';

import './StackScreen.css';

const StackScreen = () => {
  return (
    <>
      <div className="stackAppScreen">
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
          Stack Visualizer
        </div>
        <StackNavbar />
        <StackVisuals />
      </div>
    </>
  );
};

export default StackScreen;
