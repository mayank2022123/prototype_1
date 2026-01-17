'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ChatWindowProps {
    friendName: string;
    avatarUrl: string;
    onClose: () => void;
    originX: number;
    originY: number;
}

export function ChatWindow({ friendName, avatarUrl, onClose, originX, originY }: ChatWindowProps) {
    const windowRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // Position Stats
    const [position, setPosition] = useState({ left: 0, top: 0 });
    const [size, setSize] = useState({ width: 350, height: 450 });

    useEffect(() => {
        setMounted(true);

        // Initial calculation
        const windowRight = 120;
        const windowBottom = 100;
        const boxLeft = window.innerWidth - windowRight - 350;
        const boxTop = window.innerHeight - windowBottom - 450;

        setPosition({ left: boxLeft, top: boxTop });

        return () => setMounted(false);
    }, []);

    const relativeX = originX - position.left;
    const relativeY = originY - position.top;

    // Dragging Logic
    const [isDragging, setIsDragging] = useState(false);
    const dragStartInfo = useRef<{ x: number, y: number, startLeft: number, startTop: number }>({ x: 0, y: 0, startLeft: 0, startTop: 0 });

    const startDrag = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).closest('.chat-controls')) return;
        setIsDragging(true);
        dragStartInfo.current = {
            x: e.clientX,
            y: e.clientY,
            startLeft: position.left,
            startTop: position.top
        };
    };

    useEffect(() => {
        const handleDragMove = (e: MouseEvent) => {
            if (!isDragging) return;
            const deltaX = e.clientX - dragStartInfo.current.x;
            const deltaY = e.clientY - dragStartInfo.current.y;
            setPosition({
                left: dragStartInfo.current.startLeft + deltaX,
                top: dragStartInfo.current.startTop + deltaY
            });
        };

        const handleDragEnd = () => setIsDragging(false);

        if (isDragging) {
            document.addEventListener('mousemove', handleDragMove);
            document.addEventListener('mouseup', handleDragEnd);
        }
        return () => {
            document.removeEventListener('mousemove', handleDragMove);
            document.removeEventListener('mouseup', handleDragEnd);
        };
    }, [isDragging]);

    // Close Animation
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300); // Match animation duration
    };

    if (!mounted) return null;

    return createPortal(
        <div
            ref={windowRef}
            className={`chat-window glass-panel ${isClosing ? 'animate-chat-close' : 'animate-chat-open'}`}
            style={{
                left: `${position.left}px`,
                top: `${position.top}px`,
                width: `${size.width}px`,
                height: `${size.height}px`,
                right: 'auto',
                bottom: 'auto',
                transformOrigin: `${relativeX}px ${relativeY}px`
            }}
        >
            <div className="chat-header" onMouseDown={startDrag}>
                <div className="chat-user">
                    <div className="avatar-sm">
                        <img src={avatarUrl} alt={friendName} />
                    </div>
                    <div className="user-info">
                        <span className="name" style={{ display: 'block', fontWeight: 600 }}>{friendName}</span>
                        <span className="status" style={{ fontSize: '0.75rem', color: '#00ffaa' }}>Online</span>
                    </div>
                </div>
                <div className="chat-controls">
                    <button className="minimize-btn" onClick={handleClose}><i className="fa-solid fa-minus"></i></button>
                    <button className="close-btn" onClick={handleClose}><i className="fa-solid fa-xmark"></i></button>
                </div>
            </div>

            <div className="chat-messages">
                <div className="message received">
                    <p>Hey! How&apos;s the new project coming along?</p>
                    <span className="msg-time">10:42 AM</span>
                </div>
                <div className="message sent">
                    <p>Just finishing up the profile page styles. It&apos;s looking great!</p>
                    <span className="msg-time">10:45 AM</span>
                </div>
            </div>

            <div className="chat-input-area">
                <button className="attach-btn"><i className="fa-solid fa-paperclip"></i></button>
                <input type="text" placeholder="Type a message..." />
                <button className="send-btn"><i className="fa-solid fa-paper-plane"></i></button>
            </div>

            <div className="resize-handle"></div>
        </div>,
        document.body
    );
}
