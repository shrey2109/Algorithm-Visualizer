import React from 'react';
import './HomeScreen.css';

const TopicCard = ({ onClick, title, data, tag, complexity, previewGraphic }) => {
  return (
    <div className="topic-card" onClick={onClick} role="button" tabIndex={0}>
      <div className="card-media-preview">
        {previewGraphic}
        {tag && <span className="card-tag-pill">{tag}</span>}
      </div>

      <div className="card-body">
        <div className="card-header-row">
          <h2 className="card-heading">{title}</h2>
          {complexity && <span className="card-complexity-badge">{complexity}</span>}
        </div>
        <p className="card-text">{data}</p>

        <div className="card-footer-action">
          <span className="action-text">Launch Visualizer</span>
          <svg className="action-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
