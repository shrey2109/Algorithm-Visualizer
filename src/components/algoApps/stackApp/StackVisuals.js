import React from 'react';
import { useSelector } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { paraisoLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './StackVisuals.css';

import StackCode from './StackCode';

const Visuals = () => {
  const myState = useSelector((state) => state.updateProps);

  const PushCode = `push(int num)
  {
    if (top >= (MAX - 1)) {
      cout << "Stack Overflow";
    }
    else {
      a[++top] = x;
      cout << x << " pushed into stack";
    }
  }`;

  const PopCode = `int Stack::pop()
  {
    if (top < 0) {
      cout << "Stack Underflow";
      return -1;
    }
    else {
      int x = a[top--];
      return x;
    }
  }`;

  if (myState.pushstack === true) {
    document.getElementById('pushCode').style.boxShadow =
      '0px 0px 20px rgb(160, 160, 160)';
    document.getElementById('pushCode').style.filter = 'blur(0px)';
  } else if (myState.pushstack === false) {
    document.getElementById('pushCode').style.boxShadow =
      '0px 0px 0px rgb(160, 160, 160)';
    document.getElementById('pushCode').style.filter = 'blur(2px)';
  }
  if (myState.popstack === true) {
    document.getElementById('popCode').style.boxShadow =
      '0px 0px 20px rgb(160, 160, 160)';
    document.getElementById('popCode').style.filter = 'blur(0px)';
  } else if (myState.popstack === false) {
    document.getElementById('popCode').style.boxShadow =
      '0px 0px 0px rgb(160, 160, 160)';
    document.getElementById('popCode').style.filter = 'blur(2px)';
  }

  return (
    <>
      <div className="container">
        <div className="visualContainer">
          <div className="stackContainer">
            {myState.arrValStack.map((item, index) => {
              return <div className="stack" key={index} data-testid="stackBox">{item}</div>;
            })}
          </div>
          <div className="codeVisual">
            <div className="stackcode" id="code">
              <div className="pushCode" id="pushCode">
                <SyntaxHighlighter language="cpp" style={paraisoLight}>
                  {PushCode}
                </SyntaxHighlighter>
              </div>
            </div>

            <div className="stackcode">
              <div className="popCode" id="popCode">
                <SyntaxHighlighter language="cpp" style={paraisoLight}>
                  {PopCode}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>

        <div className="codeContainer">
          <StackCode />
        </div>
      </div>
    </>
  );
};

export default Visuals;
