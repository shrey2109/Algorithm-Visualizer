import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { paraisoLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './QueueVisuals.css';
import QueueCode from './QueueCode';

const QueueVisuals = () => {
  const myState = useSelector((state) => state.updateProps);

  const PushCode = `void Queue::push(int num)
{
  if (capacity == rear) {
    printf("Queue is full");
  }
  else {
    queue[rear] = num;
    rear++;
  }
}`;

  const PopCode = `int Queue::pop()
{
  if (front == rear) {
    printf("Queue is empty");
    return -1;
  }
  else {
    int x = queue[front++];
    return x;
  }
}`;

  useEffect(() => {
    const pushElem = document.getElementById('pushCode');
    const popElem = document.getElementById('popCode');
    if (!pushElem || !popElem) return;

    if (myState.pushqueue === true) {
      pushElem.style.boxShadow = '0px 0px 28px rgba(59, 130, 246, 0.65)';
      pushElem.style.filter = 'blur(0px)';
      pushElem.style.opacity = '1';
      pushElem.style.borderColor = 'var(--accent-color)';

      popElem.style.boxShadow = 'none';
      popElem.style.filter = 'blur(2.5px)';
      popElem.style.opacity = '0.4';
      popElem.style.borderColor = 'var(--code-border)';
    } else if (myState.popqueue === true) {
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
  }, [myState.pushqueue, myState.popqueue]);

  const queueItems = myState.arrValQueue || [];

  return (
    <div className="visuals">
      {/* Side-by-Side Interactive Arena */}
      <div className="side-by-side-arena">
        {/* Left Visualizer Canvas */}
        <div className="arena-pane visualizer-pane">
          <div className="pane-header">
            <div className="stage-title-group">
              <span className="stage-title">Queue Buffer</span>
              <span className="stage-badge">{queueItems.length} items</span>
            </div>

            <div className="queue-pointers-legend">
              {queueItems.length > 0 ? (
                <>
                  <span className="pointer-pill front-pill">FRONT: [{queueItems[0]}]</span>
                  <span className="pointer-pill rear-pill">REAR: [{queueItems[queueItems.length - 1]}]</span>
                </>
              ) : (
                <span className="empty-indicator-badge">EMPTY</span>
              )}
            </div>
          </div>

          <div className="queue-stage-wrapper">
            <div className="queue-channel">
              <div className="channel-guide front-guide">FRONT (Dequeue) ⇦</div>
              <div className="stackContainer queue-items-row">
                {queueItems.map((item, index) => {
                  const isFront = index === 0;
                  const isRear = index === queueItems.length - 1;
                  return (
                    <div
                      className={`stack queue-cell ${isFront ? 'front-cell' : ''} ${isRear ? 'rear-cell' : ''}`}
                      key={index}
                      data-testid="queueBox"
                    >
                      <span className="queue-item-val">{item}</span>
                      <span className="queue-cell-index">idx: {index}</span>
                      {isFront && <span className="cell-role-badge front-badge">HEAD</span>}
                      {isRear && !isFront && <span className="cell-role-badge rear-badge">TAIL</span>}
                    </div>
                  );
                })}

                {queueItems.length === 0 && (
                  <div className="empty-queue-msg">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5, marginBottom: '8px' }}>
                      <path d="M2 18h20"></path>
                      <path d="M5 12h14"></path>
                      <path d="M8 6h8"></path>
                    </svg>
                    <span>Queue is empty.<br />Use <b>PUSH</b> above to enqueue numbers.</span>
                  </div>
                )}
              </div>
              <div className="channel-guide rear-guide">⇦ REAR (Enqueue)</div>
            </div>
          </div>
        </div>

        {/* Right Live Tracing Pane (Side-by-Side!) */}
        <div className="arena-pane trace-pane">
          <div className="pane-header">
            <span className="stage-title">Live Operation Glow & Trace</span>
            <span className="glow-status-pill">
              {myState.pushqueue ? '• ENQUEUE Active' : myState.popqueue ? '• DEQUEUE Active' : 'Idle'}
            </span>
          </div>

          <div className="trace-cards-container">
            <div className="trace-op-card" id="pushCode">
              <div className="trace-card-header">
                <span className="op-tag push-tag">ENQUEUE ROUTINE</span>
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
                <span className="op-tag pop-tag">DEQUEUE ROUTINE</span>
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
        <QueueCode />
      </div>
    </div>
  );
};

export default QueueVisuals;
