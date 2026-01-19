import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Parse theme from query params
    const queryParams = new URLSearchParams(location.search);
    const currentTheme = queryParams.get('theme') || 'light';

    // Effect to apply theme
    useEffect(() => {
        document.body.className = currentTheme;
        // Also could set data-theme attribute
        document.documentElement.setAttribute('data-theme', currentTheme);
    }, [currentTheme]);

    const toggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        // Navigate to same page with new query param
        navigate(`?theme=${newTheme}`);
    };

    return (
        <div className="page-container centered">
            <h1 className="page-title">Theme Switcher</h1>

            <div className="theme-card">
                <div className="current-theme-display">
                    <h2>Current Theme: <span className="highlight-text">{currentTheme.toUpperCase()}</span></h2>
                    <div className="theme-icon-large">
                        {currentTheme === 'light' ? <FaSun className="icon-sun" /> : <FaMoon className="icon-moon" />}
                    </div>
                </div>

                <div className="action-area">
                    <p>Click the button below to switch themes via URL query parameters.</p>
                    <button className="theme-toggle-btn" onClick={toggleTheme}>
                        Switch to {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
                    </button>
                </div>

                <p className="debug-info">
                    URL: <code>{location.pathname}{location.search}</code>
                </p>
            </div>
        </div>
    );
};

export default ThemeSwitcher;
