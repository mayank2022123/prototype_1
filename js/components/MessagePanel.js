import { EmojiPicker } from './EmojiPicker.js';

export function MessagePanel({ friend, onClose }) {
    const el = document.createElement('div');
    el.className = 'message-panel';

    // Mock conversation data
    const messages = [
        { id: 1, type: 'received', text: 'Hey! How\'s the new project coming along?', time: '10:42 AM' },
        { id: 2, type: 'sent', text: 'Just finishing up the profile page styles. It\'s looking great!', time: '10:45 AM' },
        { id: 3, type: 'received', text: 'That\'s awesome! Can\'t wait to see it', time: '10:47 AM' },
        { id: 4, type: 'sent', text: 'I\'ll send you a screenshot when it\'s done', time: '10:48 AM' },
        { id: 5, type: 'received', text: 'Perfect! Also, did you check the Discord redesign?', time: '10:50 AM' },
        { id: 6, type: 'sent', text: 'Yes! The glassmorphism effects look incredible', time: '10:52 AM' }
    ];

    el.innerHTML = `
        <div class="message-panel-header">
            <div class="panel-user-info">
                <div class="avatar-md">
                    <img src="${friend.avatar}" alt="${friend.name}" />
                    <div class="status-dot status-online"></div>
                </div>
                <div>
                    <h3>${friend.name}</h3>
                    <span class="status-text">Online</span>
                </div>
            </div>
            <div class="panel-actions">
                <button class="panel-btn" title="Voice Call"><i class="fa-solid fa-phone"></i></button>
                <button class="panel-btn" title="Video Call"><i class="fa-solid fa-video"></i></button>
                ${onClose ? '<button class="panel-btn close-panel-btn" title="Close"><i class="fa-solid fa-xmark"></i></button>' : ''}
            </div>
        </div>

        <div class="message-panel-body">
            <div class="messages-container">
                ${messages.map(msg => `
                    <div class="message-bubble ${msg.type}">
                        ${msg.type === 'received' ? `
                            <div class="avatar-sm">
                                <img src="${friend.avatar}" alt="${friend.name}" />
                            </div>
                        ` : ''}
                        <div class="bubble-content">
                            <p>${msg.text}</p>
                            <span class="bubble-time">${msg.time}</span>
                        </div>
                    </div>
                `).join('')}
                <div class="typing-indicator" style="display: none;">
                    <div class="avatar-sm">
                        <img src="${friend.avatar}" alt="${friend.name}" />
                    </div>
                    <div class="typing-dots">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="message-panel-input">
            <button class="input-btn attach-btn"><i class="fa-solid fa-circle-plus"></i></button>
            <input type="text" placeholder="Type a message..." />
            <div class="emoji-picker-container">
                <button class="input-btn emoji-btn-trigger"><i class="fa-regular fa-face-smile"></i></button>
            </div>
            <button class="send-btn"><i class="fa-solid fa-paper-plane"></i></button>
        </div>
    `;

    setTimeout(() => {
        // Close button (only if provided)
        if (onClose) {
            const closeBtn = el.querySelector('.close-panel-btn');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    if (onClose) onClose();
                });
            }
        }

        // Emoji picker
        const emojiContainer = el.querySelector('.emoji-picker-container');
        const emojiTrigger = el.querySelector('.emoji-btn-trigger');
        const messageInput = el.querySelector('input');
        let emojiPickerOpen = false;
        let currentPicker = null;

        emojiTrigger.addEventListener('click', (e) => {
            e.stopPropagation();

            if (emojiPickerOpen) {
                currentPicker.remove();
                emojiPickerOpen = false;
                currentPicker = null;
            } else {
                currentPicker = EmojiPicker({
                    onEmojiSelect: (emoji) => {
                        messageInput.value += emoji;
                        messageInput.focus();
                    }
                });
                emojiContainer.appendChild(currentPicker);
                emojiPickerOpen = true;

                // Close on outside click
                setTimeout(() => {
                    document.addEventListener('click', function closePicker(e) {
                        if (currentPicker && !emojiContainer.contains(e.target)) {
                            currentPicker.remove();
                            emojiPickerOpen = false;
                            currentPicker = null;
                            document.removeEventListener('click', closePicker);
                        }
                    });
                }, 0);
            }
        });

        // Typing indicator simulation
        const typingIndicator = el.querySelector('.typing-indicator');
        messageInput.addEventListener('input', () => {
            // Simulate showing typing indicator after typing
            typingIndicator.style.display = 'flex';
            setTimeout(() => {
                typingIndicator.style.display = 'none';
            }, 3000);
        });
    }, 0);

    return el;
}
