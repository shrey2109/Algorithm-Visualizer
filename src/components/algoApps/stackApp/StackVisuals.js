import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { paraisoLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './StackVisuals.css';
import StackCode from './StackCode';

const StackVisuals = () => {
  const myState = useSelector((state) => state.updateProps);

  const PushCode = `void push(int num)
{
  if (top >= (MAX - 1)) {
    cout << "Stack Overflow";
  }
  else {
    a[++top] = num;
    cout << num << " pushed into stack";
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

  useEffect(() => {
    const pushElem = document.getElementById('pushCode');
    const popElem = document.getElementById('popCode');
    if (!pushElem || !popElem) return;

    if (myState.pushstack === true) {
      pushElem.style.boxShadow = '0px 0px 28px rgba(59, 130, 246, 0.65)';
      pushElem.style.filter = 'blur(0px)';
      pushElem.style.opacity = '1';
      pushElem.style.borderColor = 'var(--accent-color)';

      popElem.style.boxShadow = 'none';
      popElem.style.filter = 'blur(2.5px)';
      popElem.style.opacity = '0.4';
      popElem.style.borderColor = 'var(--code-border)';
    } else if (myState.popstack === true) {
      popElem.style.boxShadow = '0px 0px 28px rgba(245, 158, 11, 0.65)';
      popElem.style.filter = 'blur(0px)';
      popElem.style.opacity = '1';
      popElem.style.borderColor = '#f59e0b';

      pushElem.style.boxShadow = 'none';
      pushElem.style.filter = 'blur(2.5px)';
      pushElem.style.opacity = '0.4';
      pushElem.style.borderColor = 'var(--code-border)';
    } else {
      pushElem.style.boxShadow = 'none';
      pushElem.style.filter = 'blur(0px)';
      pushElem.style.opacity = '0.9';
      pushElem.style.borderColor = 'var(--code-border)';

      popElem.style.boxShadow = 'none';
      popElem.style.filter = 'blur(0px)';
      popElem.style.opacity = '0.9';
      popElem.style.borderColor = 'var(--code-border)';
    }
  }, [myState.pushstack, myState.popstack]);

  const stackItems = myState.arrValStack || [];

  return (
    <div className="visuals">
      {/* Side-by-Side Interactive Arena */}
      <div className="side-by-side-arena">
        {/* Left Visualizer Canvas */}
        <div className="arena-pane visualizer-pane">
          <div className="pane-header">
            <div className="stage-title-group">
              <span className="stage-title">Stack Memory</span>
              <span className="stage-badge">{stackItems.length} items</span>
            </div>
            {stackItems.length > 0 ? (
              <span className="top-pointer-badge">TOP ➜ [{stackItems[0]}]</span>
            ) : (
              <span className="empty-indicator-badge">EMPTY</span>
            )}
          </div>

          <div className="stack-bucket-stage">
            <div className="stack-bucket">
              <div className="stackContainer">
                {stackItems.map((item, index) => {
                  const isTop = index === 0;
                  return (
                    <div className={`stack ${isTop ? 'top-item' : ''}`} key={index} data-testid="stackBox">
                      <span className="stack-item-val">{item}</span>
                      {isTop && <span className="top-indicator">TOP</span>}
                    </div>
                  );
                })}

                {stackItems.length === 0 && (
                  <div className="empty-stack-msg">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5, marginBottom: '8px' }}>
                      <path d="m2 7 10 5 10-5-10-5Z"></path>
                      <path d="M2 12 12 17 22 12"></path>
                      <path d="M2 17 12 22 22 17"></path>
                    </svg>
                    <span>Stack is empty.<br />Use <b>PUSH</b> above to add numbers.</span>
                  </div>
                )}
              </div>
              <div className="bucket-bottom-plate">BASE</div>
            </div>
          </div>
        </div>

        {/* Right Live Tracing Pane (Side-by-Side!) */}
        <div className="arena-pane trace-pane">
          <div className="pane-header">
            <span className="stage-title">Live Operation Glow & Trace</span>
            <span className="glow-status-pill">
              {myState.pushstack ? '• PUSH Active' : myState.popstack ? '• POP Active' : 'Idle'}
            </span>
          </div>

          <div className="trace-cards-container">
            <div className="trace-op-card" id="pushCode">
              <div className="trace-card-header">
                <span className="op-tag push-tag">PUSH ROUTINE</span>
                <span className="op-complexity">O(1) Time</span>
              </div>
              <div className="trace-syntax-wrapper">
                <SyntaxHighlighter language="cpp" style={paraisoLight} customStyle={{ background: 'transparent', padding: '0.85rem' }}>
                  {PushCode}
                </SyntaxHighlighter>
              </div>
            </div>

            <div className="trace-op-card" id="popCode">
              <div className="trace-card-header">
                <span className="op-tag pop-tag">POP ROUTINE</span>
                <span className="op-complexity">O(1) Time</span>
              </div>
              <div className="trace-syntax-wrapper">
                <SyntaxHighlighter language="cpp" style={paraisoLight} customStyle={{ background: 'transparent', padding: '0.85rem' }}>
                  {PopCode}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full implementation & complexity section */}
      <div className="code-container-card" style={{ marginTop: '2rem' }}>
        <StackCode />
      </div>
    </div>
  );
};

export default StackVisuals;
