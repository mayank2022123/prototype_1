export function EmojiPicker({ onEmojiSelect }) {
    const el = document.createElement('div');
    el.className = 'emoji-picker glass-panel';

    const emojiCategories = {
        'Smileys': ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚'],
        'Gestures': ['👍', '👎', '👏', '🙌', '👐', '🤝', '✌️', '🤞', '🤟', '🤘', '👌', '🤌', '👈', '👉', '👆', '👇', '☝️', '✋', '🤚', '🖐'],
        'Hearts': ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❤️‍🔥', '❤️‍🩹', '💕', '💞', '💓', '💗', '💖', '💘', '💝'],
        'Symbols': ['🔥', '💯', '✨', '⭐', '🌟', '💫', '⚡', '💥', '🎉', '🎊', '🎈', '🎁', '🏆', '🥇', '🥈', '🥉', '🎯', '🎮', '🎲']
    };

    el.innerHTML = `
        <div class="emoji-header">
            <h4>Emojis</h4>
        </div>
        <div class="emoji-grid">
            ${Object.entries(emojiCategories).map(([category, emojis]) => `
                <div class="emoji-category">
                    <div class="category-label">${category}</div>
                    <div class="emoji-row">
                        ${emojis.map(emoji => `
                            <button class="emoji-btn" data-emoji="${emoji}">${emoji}</button>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    setTimeout(() => {
        const emojiButtons = el.querySelectorAll('.emoji-btn');
        emojiButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (onEmojiSelect) {
                    onEmojiSelect(btn.dataset.emoji);
                }
            });
        });
    }, 0);

    return el;
}
