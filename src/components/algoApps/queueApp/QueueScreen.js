import React from 'react';
import QueueNavbar from './QueueNavbar';
import QueueVisuals from './QueueVisuals';

import './QueueScreen.css';

const QueueScreen = () => {
  return (
    <>
      <div className="queueAppContainer">
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
          Queue Visualizer
        </div>
        <QueueNavbar />
        <QueueVisuals />
      </div>
    </>
  );
};

export default QueueScreen;
