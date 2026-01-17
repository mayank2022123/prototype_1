'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function Dock() {
    const [isHidden, setIsHidden] = useState(false);
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
        // Check initial theme
        if (document.body.hasAttribute('data-theme')) {
            setIsLightMode(true);
        }
    }, []);

    const toggleTheme = () => {
        if (isLightMode) {
            document.body.removeAttribute('data-theme');
            setIsLightMode(false);
        } else {
            document.body.setAttribute('data-theme', 'light');
            setIsLightMode(true);
        }
    };

    const toggleDock = () => {
        setIsHidden(!isHidden);
    };

    return (
        <div className={`dock-container ${isHidden ? 'dock-collapsed' : ''}`}>
            <button className="dock-toggle-btn" title="Toggle Dock" onClick={toggleDock}>
                <i className="fa-solid fa-grip"></i>
            </button>

            <div className={`dock glass-panel ${isHidden ? 'dock-hidden' : ''}`}>
                {/* Main Nav */}
                <Link href="/" className="dock-item" title="Home" style={{ textDecoration: 'none' }}>
                    <i className="fa-solid fa-house"></i>
                </Link>
                <button className="dock-item" title="Explore">
                    <i className="fa-solid fa-compass"></i>
                </button>
                <button className="dock-item" title="Add Friend">
                    <i className="fa-solid fa-user-plus"></i>
                </button>

                <div className="dock-divider"></div>

                {/* Communities */}
                <button className="dock-item community-icon" title="JS Masters" style={{ color: '#ff9900' }}>
                    <i className="fa-brands fa-js"></i>
                </button>
                <button className="dock-item community-icon" title="UI Design" style={{ color: '#007bff' }}>
                    <i className="fa-solid fa-pen-nib"></i>
                </button>
                <button className="dock-item community-icon" title="Web3 Devs" style={{ color: '#00ffaa' }}>
                    <i className="fa-solid fa-cube"></i>
                </button>

                <div className="dock-divider"></div>

                {/* Settings */}
                <button className="dock-item" id="theme-toggle-dock" title="Theme" onClick={toggleTheme}>
                    <i className={`fa-solid ${isLightMode ? 'fa-sun' : 'fa-moon'}`}></i>
                </button>
                <button className="dock-item" title="Settings">
                    <i className="fa-solid fa-gear"></i>
                </button>
                <button className="dock-item" title="Help">
                    <i className="fa-solid fa-circle-question"></i>
                </button>
            </div>
        </div>
    );
}
