'use client';

import React, { useState, useEffect } from 'react';

interface NotificationProps {
    onClose?: () => void;
}

interface NotificationItem {
    id: number;
    type: 'badge' | 'friend' | 'message' | 'achievement';
    icon: string;
    text: string;
    time: string;
    read: boolean;
}

export function NotificationDropdown({ onClose }: NotificationProps) {
    const [notifications, setNotifications] = useState<NotificationItem[]>([
        { id: 1, type: 'badge', icon: 'fa-solid fa-star', text: 'New badge unlocked: Community Expert!', time: '5m ago', read: false },
        { id: 2, type: 'friend', icon: 'fa-solid fa-user-plus', text: 'Sarah J accepted your friend request', time: '1h ago', read: false },
        { id: 3, type: 'message', icon: 'fa-solid fa-message', text: '2 new messages from Mike T', time: '2h ago', read: true },
        { id: 4, type: 'achievement', icon: 'fa-solid fa-trophy', text: 'You\'re in the top 10% this week!', time: '3h ago', read: true },
        { id: 5, type: 'friend', icon: 'fa-solid fa-user-plus', text: 'New friend request from Emily R', time: '5h ago', read: false }
    ]);

    const handleMarkAsRead = (id: number) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
    };

    const handleClearAll = () => {
        setNotifications([]);
    };

    return (
        <div className="notification-dropdown glass-panel">
            <div className="dropdown-header">
                <h3>Notifications</h3>
                <button className="btn-clear-all" onClick={handleClearAll}>Clear all</button>
            </div>
            <div className="notifications-list">
                {notifications.map(notif => (
                    <div
                        key={notif.id}
                        className={`notification-item ${notif.read ? 'read' : 'unread'}`}
                        onClick={() => handleMarkAsRead(notif.id)}
                    >
                        <div className={`notif-icon ${notif.type}`}>
                            <i className={notif.icon}></i>
                        </div>
                        <div className="notif-content">
                            <p>{notif.text}</p>
                            <span className="notif-time">{notif.time}</span>
                        </div>
                        {!notif.read && <div className="unread-dot"></div>}
                    </div>
                ))}
            </div>
            <div className="dropdown-footer">
                <button className="btn-view-all">View All Notifications</button>
            </div>
        </div>
    );
}
