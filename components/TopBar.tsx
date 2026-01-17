'use client';

import React, { useState, useEffect, useRef } from 'react';
import { NotificationDropdown } from './NotificationDropdown';
import Link from 'next/link';

export function TopBar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
                btnRef.current && !btnRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="top-bar glass-panel">
            <div className="hud-stats">
                <div className="hud-capsule xp-capsule">
                    <div className="hud-icon"><i className="fa-solid fa-bolt"></i></div>
                    <div className="hud-value">
                        <span className="val">12,450</span>
                        <span className="lbl">XP</span>
                    </div>
                    <div className="hud-progress"><div className="fill" style={{ width: '75%' }}></div></div>
                </div>

                <div className="hud-capsule credits-capsule">
                    <div className="hud-icon" style={{ color: '#00ffaa' }}><i className="fa-solid fa-dollar-sign"></i></div>
                    <div className="hud-value">
                        <span className="val">840</span>
                        <span className="lbl">Credits</span>
                    </div>
                </div>
            </div>

            <div className="notification-ticker-container">
                <div className="notification-ticker">
                    <span className="ticker-item">
                        <i className="fa-solid fa-star"></i>
                        New badge unlocked: Community Expert!
                    </span>
                    <span className="ticker-item">
                        <i className="fa-solid fa-user-plus"></i>
                        Sarah J accepted your friend request
                    </span>
                    <span className="ticker-item">
                        <i className="fa-solid fa-message"></i>
                        2 new messages from Mike T
                    </span>
                    <span className="ticker-item">
                        <i className="fa-solid fa-trophy"></i>
                        You&apos;re in the top 10% this week!
                    </span>
                </div>
            </div>

            <div className="hud-right">
                <div className="notification-container" style={{ position: 'relative' }}>
                    <button
                        className="notification-btn"
                        ref={btnRef}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <i className="fa-solid fa-bell"></i>
                        <span className="notification-badge">3</span>
                    </button>

                    {dropdownOpen && (
                        <div ref={dropdownRef}>
                            <NotificationDropdown onClose={() => setDropdownOpen(false)} />
                        </div>
                    )}
                </div>

                <Link href="/profile" className="hud-profile clickable" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <span className="username">Alex Dev</span>
                    <div className="avatar-sm">
                        <img src="https://ui-avatars.com/api/?name=Alex+D&background=ff9900&color=fff" alt="User" />
                    </div>
                </Link>
            </div>
        </header>
    );
}
