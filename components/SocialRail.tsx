'use client';

import React, { useState } from 'react';
import { ChatWindow } from './ChatWindow';

interface Friend {
    name: string;
    avatar: string;
}

export function SocialRail() {
    const [collapsed, setCollapsed] = useState(false);
    const [activeChat, setActiveChat] = useState<{ friend: Friend, x: number, y: number } | null>(null);

    const onlineFriends = [
        { name: 'Sarah J', avatar: 'https://ui-avatars.com/api/?name=Sarah+J&background=random' },
        { name: 'Mike T', avatar: 'https://ui-avatars.com/api/?name=Mike+T&background=random' },
        { name: 'Anna B', avatar: 'https://ui-avatars.com/api/?name=Anna+B&background=random' },
        { name: 'Chris L', avatar: 'https://ui-avatars.com/api/?name=Chris+L&background=random' },
        { name: 'Emma W', avatar: 'https://ui-avatars.com/api/?name=Emma+W&background=random' }
    ];

    const handleFriendClick = (friend: Friend, e: React.MouseEvent) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setActiveChat({
            friend,
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        });
    };

    return (
        <>
            <aside className={`social-rail ${collapsed ? 'rail-collapsed' : ''}`}>
                <button
                    className="rail-toggle-btn"
                    title="Toggle Friends"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    <i className="fa-solid fa-users"></i>
                </button>
                <div className="rail-content">
                    {onlineFriends.map((friend, idx) => (
                        <div
                            key={idx}
                            className="friend-item"
                            title={friend.name}
                            onClick={(e) => handleFriendClick(friend, e)}
                        >
                            <div className="avatar-sm">
                                <img src={friend.avatar} alt={friend.name} />
                                <div className="status-dot status-online"></div>
                            </div>
                            <span className="friend-name">{friend.name}</span>
                        </div>
                    ))}
                </div>
            </aside>

            {activeChat && (
                <ChatWindow
                    friendName={activeChat.friend.name}
                    avatarUrl={activeChat.friend.avatar}
                    originX={activeChat.x}
                    originY={activeChat.y}
                    onClose={() => setActiveChat(null)}
                />
            )}
        </>
    );
}
