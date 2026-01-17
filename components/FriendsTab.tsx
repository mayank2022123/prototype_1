'use client';

import React, { useState } from 'react';
import { ChatWindow } from './ChatWindow';

export function FriendsTab() {
    const [activeChat, setActiveChat] = useState<{ friend: any, x: number, y: number } | null>(null);

    const friends = [
        { id: 1, name: 'Sarah J', avatar: 'https://ui-avatars.com/api/?name=Sarah+J&background=random', status: 'online', userId: '@sarah_j' },
        { id: 2, name: 'Mike T', avatar: 'https://ui-avatars.com/api/?name=Mike+T&background=random', status: 'online', userId: '@mike_t' },
        { id: 3, name: 'Anna B', avatar: 'https://ui-avatars.com/api/?name=Anna+B&background=random', status: 'idle', userId: '@anna_b' },
        { id: 4, name: 'David K', avatar: 'https://ui-avatars.com/api/?name=David+K&background=random', status: 'offline', userId: '@david_k' },
        { id: 5, name: 'Lisa M', avatar: 'https://ui-avatars.com/api/?name=Lisa+M&background=random', status: 'online', userId: '@lisa_m' }
    ];

    const onlineFriends = friends.filter(f => f.status === 'online');

    const handleMessageClick = (friend: any, e: React.MouseEvent) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setActiveChat({
            friend: { name: friend.name, avatar: friend.avatar },
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        });
    };

    return (
        <div className="friends-tab">
            <div className="friends-header">
                <div className="search-container">
                    <i className="fa-solid fa-search"></i>
                    <input type="text" placeholder="Search friends..." className="friend-search" />
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button className="btn-friend-requests">
                        <i className="fa-solid fa-user-clock"></i>
                        {/* Logic for pending count would go here */}
                        Pending (2)
                    </button>
                    <button className="btn-add-friend">
                        <i className="fa-solid fa-user-plus"></i>
                        Add Friend
                    </button>
                </div>
            </div>

            <div className="friend-section">
                <div className="section-header">
                    <h3>Online — {onlineFriends.length}</h3>
                </div>
                {onlineFriends.map(friend => (
                    <div key={friend.id} className="friend-card">
                        <div className="friend-info">
                            <div className="avatar-md">
                                <img src={friend.avatar} alt={friend.name} />
                                <div className={`status-dot status-${friend.status}`}></div>
                            </div>
                            <div className="friend-details">
                                <span className="friend-name">{friend.name}</span>
                                <span className="friend-userid">{friend.userId}</span>
                            </div>
                        </div>
                        <div className="friend-actions">
                            <button className="btn-message" title="Message" onClick={(e) => handleMessageClick(friend, e)}>
                                <i className="fa-solid fa-message"></i>
                            </button>
                            <button className="btn-more" title="More">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="friend-section">
                <div className="section-header">
                    <h3>All Friends — {friends.length}</h3>
                </div>
                {friends.map(friend => (
                    <div key={friend.id} className="friend-card">
                        <div className="friend-info">
                            <div className="avatar-md">
                                <img src={friend.avatar} alt={friend.name} />
                                <div className={`status-dot status-${friend.status}`}></div>
                            </div>
                            <div className="friend-details">
                                <span className="friend-name">{friend.name}</span>
                                <span className="friend-status">{friend.status.charAt(0).toUpperCase() + friend.status.slice(1)}</span>
                            </div>
                        </div>
                        <div className="friend-actions">
                            <button className="btn-message" title="Message" onClick={(e) => handleMessageClick(friend, e)}>
                                <i className="fa-solid fa-message"></i>
                            </button>
                            <button className="btn-more" title="More">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {activeChat && (
                <ChatWindow
                    friendName={activeChat.friend.name}
                    avatarUrl={activeChat.friend.avatar}
                    originX={activeChat.x}
                    originY={activeChat.y}
                    onClose={() => setActiveChat(null)}
                />
            )}
        </div>
    );
}
