import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './SearchVisuals.css';

import LinearCode from './LinearCode';

const LinearSearch = () => {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();
  const [isPreviewShown, setPreviewShown] = useState(false);

  let arrVal = myState.arrValSearch.map((item) => item[0]);
  let ids = myState.arrValSearch.map((item) => item[1]);
  let num = myState.searchVal;
  var i = 0,
    c = 0;

  const solve = () => {
    setPreviewShown(true);

    var intr = setInterval(() => {
      c++;
      document.getElementById('forPart').style.backgroundColor =
        'rgb(128, 223, 254)';
      document.getElementById('ifPart').style.backgroundColor =
        'rgb(255, 255, 255, 0.5)';
      document.getElementById('return').style.backgroundColor =
        'rgb(255, 255, 255, 0.5)';
      document.getElementById(ids[i]).childNodes[0].style.backgroundColor =
        'orange';
      document.getElementById(ids[i]).childNodes[0].style.borderRadius = '50px';

      setTimeout(() => {
        document.getElementById('forPart').style.backgroundColor =
          'rgb(255, 255, 255, 0.5)';
        document.getElementById('ifPart').style.backgroundColor =
          'rgb(128, 223, 254)';
        document.getElementById('return').style.backgroundColor =
          'rgb(255, 255, 255, 0.5)';
        if (arrVal[i] === num) {
          document.getElementById('forPart').style.backgroundColor =
            'rgb(255, 255, 255, 0.5)';
          document.getElementById('ifPart').style.backgroundColor =
            'rgb(255, 255, 255, 0.5)';
          document.getElementById('return').style.backgroundColor =
            'rgb(128, 223, 254)';
          document.getElementById(ids[i]).childNodes[0].style.backgroundColor =
            'pink';
          dispatch({
            type: 'Found',
            isfound: true,
          });
          clearInterval(intr);
        }
      }, 100);
      setTimeout(() => {
        if (arrVal[i] !== num) {
          document.getElementById(ids[i]).childNodes[0].style.backgroundColor =
            myState.searchingColor;
          document.getElementById(ids[i]).childNodes[0].style.borderRadius =
            '0px';
          i++;
        }
      }, 1000);
      if (i >= arrVal.length) {
        clearInterval(intr);
      }
      if (c >= arrVal.length) {
        dispatch({
          type: 'NotFound',
          isnotfound: true,
        });
      }
    }, 2000);
  };

  useEffect(() => {
    if (myState.searchingAlgorithm === 'linear') {
      if (myState.searchplay) {
        solve();
      }
    }
  }, [myState.searchplay]);

  return (
    <>
      <div id="codePart">
        <div id="forPart">
          <p> for (int i = 0; i &lt; N; i++)</p>
        </div>
        <div id="ifPart" style={{ marginLeft: '30px' }}>
          <p> if (arr[i] == num) </p>
        </div>
        <div id="return" style={{ marginLeft: '60px' }}>
          <p>return i;</p>
        </div>
      </div>

      {isPreviewShown && <LinearCode />}
    </>
  );
};

export default LinearSearch;
