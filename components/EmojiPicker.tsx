'use client';

import React from 'react';

interface EmojiPickerProps {
    onEmojiSelect: (emoji: string) => void;
    onClose?: () => void;
}

export function EmojiPicker({ onEmojiSelect }: EmojiPickerProps) {
    const emojiCategories: Record<string, string[]> = {
        'Smileys': ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚'],
        'Gestures': ['👍', '👎', '👏', '🙌', '👐', '🤝', '✌️', '🤞', '🤟', '🤘', '👌', '🤌', '👈', '👉', '👆', '👇', '☝️', '✋', '🤚', '🖐'],
        'Hearts': ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❤️‍🔥', '❤️‍🩹', '💕', '💞', '💓', '💗', '💖', '💘', '💝'],
        'Symbols': ['🔥', '💯', '✨', '⭐', '🌟', '💫', '⚡', '💥', '🎉', '🎊', '🎈', '🎁', '🏆', '🥇', '🥈', '🥉', '🎯', '🎮', '🎲']
    };

    return (
        <div className="emoji-picker glass-panel">
            <div className="emoji-header">
                <h4>Emojis</h4>
            </div>
            <div className="emoji-grid">
                {Object.entries(emojiCategories).map(([category, emojis]) => (
                    <div key={category} className="emoji-category">
                        <div className="category-label">{category}</div>
                        <div className="emoji-row">
                            {emojis.map(emoji => (
                                <button
                                    key={emoji}
                                    className="emoji-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onEmojiSelect(emoji);
                                    }}
                                >
                                    {emoji}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
