'use client';

import React, { useState, useEffect, useRef } from 'react';
import { EmojiPicker } from './EmojiPicker';

interface Friend {
    name: string;
    avatar: string;
}

interface MessagePanelProps {
    friend: Friend;
    onClose: () => void;
}

export function MessagePanel({ friend, onClose }: MessagePanelProps) {
    const [messages, setMessages] = useState([
        { id: 1, type: 'received', text: 'Hey! How\'s the new project coming along?', time: '10:42 AM' },
        { id: 2, type: 'sent', text: 'Just finishing up the profile page styles. It\'s looking great!', time: '10:45 AM' },
        { id: 3, type: 'received', text: 'That\'s awesome! Can\'t wait to see it', time: '10:47 AM' },
        { id: 4, type: 'sent', text: 'I\'ll send you a screenshot when it\'s done', time: '10:48 AM' },
        { id: 5, type: 'received', text: 'Perfect! Also, did you check the Discord redesign?', time: '10:50 AM' },
        { id: 6, type: 'sent', text: 'Yes! The glassmorphism effects look incredible', time: '10:52 AM' }
    ]);
    const [inputText, setInputText] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const emojiContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (emojiContainerRef.current && !emojiContainerRef.current.contains(event.target as Node)) {
                setShowEmojiPicker(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 3000);
    };

    const addEmoji = (emoji: string) => {
        setInputText(prev => prev + emoji);
    };

    return (
        <div className="message-panel">
            <div className="message-panel-header">
                <div className="panel-user-info">
                    <div className="avatar-md">
                        <img src={friend.avatar} alt={friend.name} />
                        <div className="status-dot status-online"></div>
                    </div>
                    <div>
                        <h3>{friend.name}</h3>
                        <span className="status-text">Online</span>
                    </div>
                </div>
                <div className="panel-actions">
                    <button className="panel-btn" title="Voice Call"><i className="fa-solid fa-phone"></i></button>
                    <button className="panel-btn" title="Video Call"><i className="fa-solid fa-video"></i></button>
                    <button className="panel-btn close-panel-btn" title="Close" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
                </div>
            </div>

            <div className="message-panel-body">
                <div className="messages-container">
                    {messages.map(msg => (
                        <div key={msg.id} className={`message-bubble ${msg.type}`}>
                            {msg.type === 'received' && (
                                <div className="avatar-sm">
                                    <img src={friend.avatar} alt={friend.name} />
                                </div>
                            )}
                            <div className="bubble-content">
                                <p>{msg.text}</p>
                                <span className="bubble-time">{msg.time}</span>
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="typing-indicator" style={{ display: 'flex' }}>
                            <div className="avatar-sm">
                                <img src={friend.avatar} alt={friend.name} />
                            </div>
                            <div className="typing-dots">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="message-panel-input">
                <button className="input-btn attach-btn"><i className="fa-solid fa-circle-plus"></i></button>
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={inputText}
                    onChange={handleInput}
                />
                <div className="emoji-picker-container" ref={emojiContainerRef}>
                    <button
                        className="input-btn emoji-btn-trigger"
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    >
                        <i className="fa-regular fa-face-smile"></i>
                    </button>
                    {showEmojiPicker && (
                        <div style={{ position: 'absolute', bottom: '100%', right: 0, zIndex: 1000 }}>
                            <EmojiPicker onEmojiSelect={addEmoji} />
                        </div>
                    )}
                </div>
                <button className="send-btn"><i className="fa-solid fa-paper-plane"></i></button>
            </div>
        </div>
    );
}
