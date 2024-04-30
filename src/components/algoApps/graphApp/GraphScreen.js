import React from 'react';

import './GraphScreen.css';

import GraphNavbar from './GraphNavbar';
import GraphVisuals from './GraphVisuals';

const GraphScreen = () => {
  return (
    <>
      <div className="graphAppContainer">
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
          Graph Visualizer
        </div>
        <GraphNavbar />
        <GraphVisuals />
      </div>
    </>
  );
}

export default GraphScreen;
