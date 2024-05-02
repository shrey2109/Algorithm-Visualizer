import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { SpeedInsights } from '@vercel/speed-insights/react';

import './index.css';

import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <App />
      <SpeedInsights />
    </Provider>
  </>
);
