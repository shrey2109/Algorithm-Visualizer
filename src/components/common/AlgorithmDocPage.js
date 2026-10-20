import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './AlgorithmDocPage.css';

const AlgorithmDocPage = ({
  customClass = '',
  category = 'Algorithm',
  title = '',
  subtitle = '',
  backLink = '/',
  backLabel = 'Back to Visualizer',
  complexity = {},
  properties = [],
  steps = [],
  walkthrough = null,
  code = {},
  advantages = [],
  disadvantages = [],
  applications = [],
}) => {
  const navigate = useNavigate();
  const [activeLang, setActiveLang] = useState('cpp');
  const [copied, setCopied] = useState(false);

  const getCode = () => {
    if (activeLang === 'java' && code.java) return code.java;
    if (activeLang === 'python' && code.python) return code.python;
    return code.cpp || '';
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
    <div className={`algo-doc-page ${customClass}`}>
      {/* Top Breadcrumb & Back Action Bar */}
      <div className="doc-top-bar">
        <button
          type="button"
          className="doc-back-btn"
          onClick={() => navigate(backLink)}
          title={backLabel}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>{backLabel}</span>
        </button>

        <div className="doc-breadcrumbs">
          <span className="crumb-root" onClick={() => navigate('/')}>Home</span>
          <span className="crumb-sep">/</span>
          <span className="crumb-cat" onClick={() => navigate(backLink)}>{category}</span>
          <span className="crumb-sep">/</span>
          <span className="crumb-current">{title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <header className="doc-hero-section">
        <div className="doc-category-badge">
          <span className="badge-pulse-dot"></span>
          <span>{category}</span>
        </div>
        <h1 className="doc-hero-title">{title}</h1>
        {subtitle && <p className="doc-hero-subtitle">{subtitle}</p>}

        {properties && properties.length > 0 && (
          <div className="doc-meta-pills">
            {properties.map((p, idx) => (
              <div className="doc-meta-pill" key={idx}>
                <span className="pill-key">{p.label}:</span>
                <span className="pill-val">{p.value}</span>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Complexity Matrix */}
      {complexity && (
        <section className="doc-section doc-complexity-section">
          <div className="doc-section-heading">
            <div className="heading-icon-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <h2 className="doc-section-title">Complexity Analysis</h2>
              <p className="doc-section-desc">Asymptotic computational performance and memory consumption</p>
            </div>
          </div>

          <div className="doc-complexity-grid">
            <div className="doc-comp-card">
              <span className="comp-tag">Best Case Time</span>
              <span className="comp-big-o best-time">{complexity.bestTime || 'O(1)'}</span>
              <span className="comp-explanation">{complexity.bestNote || 'Optimal initial arrangement'}</span>
            </div>

            <div className="doc-comp-card">
              <span className="comp-tag">Average Case Time</span>
              <span className="comp-big-o avg-time">{complexity.avgTime || 'O(N)'}</span>
              <span className="comp-explanation">{complexity.avgNote || 'Typical random input distribution'}</span>
            </div>

            <div className="doc-comp-card">
              <span className="comp-tag">Worst Case Time</span>
              <span className="comp-big-o worst-time">{complexity.worstTime || 'O(N²)'}</span>
              <span className="comp-explanation">{complexity.worstNote || 'Most adversarial input scenario'}</span>
            </div>

            <div className="doc-comp-card">
              <span className="comp-tag">Auxiliary Space</span>
              <span className="comp-big-o space-comp">{complexity.space || 'O(1)'}</span>
              <span className="comp-explanation">{complexity.spaceNote || 'Memory allocated beyond input'}</span>
            </div>
          </div>
        </section>
      )}

      {/* How it Works: Step by Step */}
      {steps && steps.length > 0 && (
        <section className="doc-section doc-steps-section">
          <div className="doc-section-heading">
            <div className="heading-icon-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div>
              <h2 className="doc-section-title">How It Works</h2>
              <p className="doc-section-desc">Algorithmic workflow and procedural progression</p>
            </div>
          </div>

          <div className="doc-steps-list">
            {steps.map((st, idx) => (
              <div className="doc-step-card" key={idx}>
                <div className="step-number-badge">{st.num || idx + 1}</div>
                <div className="step-content">
                  <h3 className="step-title">{st.title}</h3>
                  <p className="step-desc">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Walkthrough / Example */}
      {walkthrough && (
        <section className="doc-section doc-walkthrough-section">
          <div className="doc-section-heading">
            <div className="heading-icon-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
            <div>
              <h2 className="doc-section-title">{walkthrough.title || 'Step-by-Step Trace Example'}</h2>
              <p className="doc-section-desc">Sample iteration walkthrough to solidify conceptual comprehension</p>
            </div>
          </div>

          <div className="walkthrough-passes-container">
            {walkthrough.passes && walkthrough.passes.map((p, idx) => (
              <div className="walkthrough-pass-row" key={idx}>
                <div className="pass-pill">{p.pass}</div>
                <div className="pass-detail-text">{p.detail}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Code Implementation */}
      {code && (code.cpp || code.java || code.python) && (
        <section className="doc-section doc-code-section">
          <div className="doc-section-heading">
            <div className="heading-icon-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <div>
              <h2 className="doc-section-title">Reference Implementation</h2>
              <p className="doc-section-desc">Production-grade implementations across multiple languages</p>
            </div>
          </div>

          <div className="doc-code-card">
            <div className="code-card-header">
              <div className="lang-tab-group">
                {code.cpp && (
                  <button
                    type="button"
                    className={`lang-tab ${activeLang === 'cpp' ? 'active' : ''}`}
                    onClick={() => setActiveLang('cpp')}
                  >
                    C++
                  </button>
                )}
                {code.java && (
                  <button
                    type="button"
                    className={`lang-tab ${activeLang === 'java' ? 'active' : ''}`}
                    onClick={() => setActiveLang('java')}
                  >
                    Java
                  </button>
                )}
                {code.python && (
                  <button
                    type="button"
                    className={`lang-tab ${activeLang === 'python' ? 'active' : ''}`}
                    onClick={() => setActiveLang('python')}
                  >
                    Python
                  </button>
                )}
              </div>

              <button
                type="button"
                className="code-copy-action"
                onClick={handleCopy}
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
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <div className="doc-code-syntax-wrapper">
              <SyntaxHighlighter
                language={activeLang === 'python' ? 'python' : activeLang === 'java' ? 'java' : 'cpp'}
                style={atomOneDark}
                customStyle={{
                  margin: 0,
                  padding: '1.25rem',
                  fontSize: '0.86rem',
                  lineHeight: 1.6,
                  fontFamily: "'JetBrains Mono', Consolas, monospace",
                  backgroundColor: '#0f172a',
                }}
              >
                {getCode().trim()}
              </SyntaxHighlighter>
            </div>
          </div>
        </section>
      )}

      {/* Pros & Cons Comparison */}
      {(advantages.length > 0 || disadvantages.length > 0) && (
        <section className="doc-section doc-pros-cons-section">
          <div className="pros-cons-grid">
            {advantages.length > 0 && (
              <div className="pros-card">
                <div className="card-indicator green-indicator">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Key Advantages & Strengths</span>
                </div>
                <ul className="pros-cons-list">
                  {advantages.map((adv, idx) => (
                    <li key={idx} className="pro-item">
                      <span className="bullet-icon pro-bullet">✓</span>
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {disadvantages.length > 0 && (
              <div className="cons-card">
                <div className="card-indicator amber-indicator">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span>Trade-offs & Limitations</span>
                </div>
                <ul className="pros-cons-list">
                  {disadvantages.map((dis, idx) => (
                    <li key={idx} className="con-item">
                      <span className="bullet-icon con-bullet">!</span>
                      <span>{dis}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Real-World Applications */}
      {applications && applications.length > 0 && (
        <section className="doc-section doc-applications-section">
          <div className="doc-section-heading">
            <div className="heading-icon-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <div>
              <h2 className="doc-section-title">Real-World Applications</h2>
              <p className="doc-section-desc">Practical contexts and system use cases</p>
            </div>
          </div>

          <div className="doc-applications-grid">
            {applications.map((app, idx) => (
              <div className="app-card" key={idx}>
                <div className="app-card-badge">{idx + 1}</div>
                <p className="app-card-text">{app}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Visualizer CTA Callout */}
      <div className="doc-visualizer-cta">
        <div className="cta-content">
          <h3 className="cta-title">Experience {title} in Real Time</h3>
          <p className="cta-subtitle">Watch array elements, recursion paths, and state pointers animate live on the interactive canvas.</p>
        </div>
        <button
          type="button"
          className="cta-launch-btn"
          onClick={() => navigate(backLink)}
        >
          <span>Open Interactive Visualizer</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AlgorithmDocPage;
