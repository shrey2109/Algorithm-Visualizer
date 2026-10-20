import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './AppNavbar.css';

const AppNavbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="app-navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="brand-logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
              <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
              <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
              <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
              <path d="M10 6.5h4"></path>
              <path d="M17.5 10v4"></path>
              <path d="M14 17.5h-4"></path>
            </svg>
          </div>
          <div className="brand-titles">
            <span className="brand-main">Algo Canvas</span>
            <span className="brand-tag">Visualizer</span>
          </div>
        </Link>

        <nav className="navbar-links">
          <NavLink to="/sort" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Sorting
          </NavLink>
          <NavLink to="/search" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Searching
          </NavLink>
          <NavLink to="/graph" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Graph
          </NavLink>
          <NavLink to="/stack" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Stack
          </NavLink>
          <NavLink to="/queue" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Queue
          </NavLink>
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? (
              <>
                <svg className="theme-icon sun-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                <span className="theme-label">Light</span>
              </>
            ) : (
              <>
                <svg className="theme-icon moon-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
                <span className="theme-label">Dark</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppNavbar;
