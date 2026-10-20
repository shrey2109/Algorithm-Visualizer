import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './AlgorithmDetails.css';

const AlgorithmDetails = ({
  title,
  bestTime = 'O(N)',
  avgTime = 'O(N²)',
  worstTime = 'O(N²)',
  space = 'O(1)',
  properties = [],
  cppCode = '',
  javaCode = '',
  pythonCode = '',
}) => {
  const [activeLang, setActiveLang] = useState('cpp');
  const [copied, setCopied] = useState(false);

  const getCode = () => {
    if (activeLang === 'java' && javaCode) return javaCode;
    if (activeLang === 'python' && pythonCode) return pythonCode;
    return cppCode;
  };

  const handleCopy = () => {
    const text = getCode();
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="algo-details-container">
      {/* Complexity Matrix Section */}
      <div className="details-section complexity-section">
        <div className="section-header">
          <span className="section-title">Time & Space Complexity</span>
          <span className="section-subtitle">Asymptotic Big-O Analysis</span>
        </div>

        <div className="complexity-cards-grid">
          <div className="complexity-card">
            <span className="comp-label">Best Case Time</span>
            <span className="comp-value comp-best">{bestTime}</span>
            <span className="comp-note">Optimal input arrangement</span>
          </div>

          <div className="complexity-card">
            <span className="comp-label">Average Case Time</span>
            <span className="comp-value comp-avg">{avgTime}</span>
            <span className="comp-note">Typical random distribution</span>
          </div>

          <div className="complexity-card">
            <span className="comp-label">Worst Case Time</span>
            <span className="comp-value comp-worst">{worstTime}</span>
            <span className="comp-note">Most unfavorable arrangement</span>
          </div>

          <div className="complexity-card">
            <span className="comp-label">Auxiliary Space</span>
            <span className="comp-value comp-space">{space}</span>
            <span className="comp-note">Additional memory overhead</span>
          </div>
        </div>

        {properties && properties.length > 0 && (
          <div className="algo-properties-row">
            {properties.map((prop, idx) => (
              <div className="property-pill" key={idx}>
                <span className="property-name">{prop.name}:</span>
                <span className="property-val">{prop.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Implementation Code Section */}
      <div className="details-section code-section">
        <div className="code-card-top-bar">
          <div className="code-card-title-group">
            <span className="section-title">{title} Implementation</span>
            <span className="code-lang-tag">{activeLang.toUpperCase()}</span>
          </div>

          <div className="code-card-actions">
            <div className="lang-switcher">
              {cppCode && (
                <button
                  type="button"
                  className={`lang-btn ${activeLang === 'cpp' ? 'active' : ''}`}
                  onClick={() => setActiveLang('cpp')}
                >
                  C++
                </button>
              )}
              {javaCode && (
                <button
                  type="button"
                  className={`lang-btn ${activeLang === 'java' ? 'active' : ''}`}
                  onClick={() => setActiveLang('java')}
                >
                  Java
                </button>
              )}
              {pythonCode && (
                <button
                  type="button"
                  className={`lang-btn ${activeLang === 'python' ? 'active' : ''}`}
                  onClick={() => setActiveLang('python')}
                >
                  Python
                </button>
              )}
            </div>

            <button
              type="button"
              className="copy-code-btn"
              onClick={handleCopy}
              title="Copy code to clipboard"
            >
              {copied ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="syntax-code-display">
          <SyntaxHighlighter
            language={activeLang === 'python' ? 'python' : activeLang === 'java' ? 'java' : 'cpp'}
            style={atomOneDark}
            customStyle={{
              margin: 0,
              padding: '1.25rem',
              borderRadius: '0 0 12px 12px',
              fontSize: '0.86rem',
              lineHeight: 1.6,
              fontFamily: "'JetBrains Mono', Consolas, monospace",
            }}
          >
            {getCode().trim()}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmDetails;
