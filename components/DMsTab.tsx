'use client';

import React from 'react';

interface Friend {
    name: string;
    avatar: string;
}

interface DMsTabProps {
    onOpenConversation: (friend: Friend) => void;
}

export function DMsTab({ onOpenConversation }: DMsTabProps) {
    const dms = [
        {
            id: 1,
            friend: { name: 'Sarah J', avatar: 'https://ui-avatars.com/api/?name=Sarah+J&background=random' },
            lastMessage: 'See you tomorrow!',
            timestamp: '2m ago',
            unread: 2
        },
        {
            id: 2,
            friend: { name: 'Mike T', avatar: 'https://ui-avatars.com/api/?name=Mike+T&background=random' },
            lastMessage: 'Thanks for the help with the project',
            timestamp: '1h ago',
            unread: 0
        },
        {
            id: 3,
            friend: { name: 'Anna B', avatar: 'https://ui-avatars.com/api/?name=Anna+B&background=random' },
            lastMessage: 'Did you see the new update?',
            timestamp: '5h ago',
            unread: 0
        },
        {
            id: 4,
            friend: { name: 'Lisa M', avatar: 'https://ui-avatars.com/api/?name=Lisa+M&background=random' },
            lastMessage: 'That\'s awesome! 🎉',
            timestamp: 'Yesterday',
            unread: 0
        }
    ];

    return (
        <div className="dms-tab">
            <div className="dms-header">
                <div className="search-container">
                    <i className="fa-solid fa-search"></i>
                    <input type="text" placeholder="Search conversations..." className="dm-search" />
                </div>
                <button className="btn-message-requests">
                    <i className="fa-solid fa-envelope-open-text"></i>
                    Requests (1)
                </button>
            </div>

            <div className="dm-section">
                <div className="section-header">
                    <h3>Direct Messages</h3>
                </div>
                {dms.map(dm => (
                    <div
                        key={dm.id}
                        className={`dm-card ${dm.unread > 0 ? 'unread' : ''}`}
                        onClick={() => onOpenConversation(dm.friend)}
                    >
                        <div className="avatar-md">
                            <img src={dm.friend.avatar} alt={dm.friend.name} />
                        </div>
                        <div className="dm-details">
                            <div className="dm-header-row">
                                <span className="dm-name">{dm.friend.name}</span>
                                <span className="dm-time">{dm.timestamp}</span>
                            </div>
                            <div className="dm-message-row">
                                <span className="dm-preview">{dm.lastMessage}</span>
                                {dm.unread > 0 && <span className="unread-badge">{dm.unread}</span>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
