export function DMsTab({ onOpenConversation }) {
    const el = document.createElement('div');
    el.className = 'dms-tab';

    // Mock data
    const messageRequests = [
        {
            id: 1,
            from: { name: 'Alex P', avatar: 'https://ui-avatars.com/api/?name=Alex+P&background=random' },
            preview: 'Hey! I saw your profile and wanted to connect...',
            timestamp: '3h ago'
        }
    ];

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

    el.innerHTML = `
        <div class="dms-header">
            <div class="search-container">
                <i class="fa-solid fa-search"></i>
                <input type="text" placeholder="Search conversations..." class="dm-search" />
            </div>
            <button class="btn-message-requests">
                <i class="fa-solid fa-envelope-open-text"></i>
                Requests${messageRequests.length > 0 ? ` (${messageRequests.length})` : ''}
            </button>
        </div>

        <div class="dm-section">
            <div class="section-header">
                <h3>Direct Messages</h3>
            </div>
            ${dms.map(dm => `
                <div class="dm-card ${dm.unread > 0 ? 'unread' : ''}" data-dm-id="${dm.id}" data-friend='${JSON.stringify(dm.friend)}'>
                    <div class="avatar-md">
                        <img src="${dm.friend.avatar}" alt="${dm.friend.name}" />
                    </div>
                    <div class="dm-details">
                        <div class="dm-header-row">
                            <span class="dm-name">${dm.friend.name}</span>
                            <span class="dm-time">${dm.timestamp}</span>
                        </div>
                        <div class="dm-message-row">
                            <span class="dm-preview">${dm.lastMessage}</span>
                            ${dm.unread > 0 ? `<span class="unread-badge">${dm.unread}</span>` : ''}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Add click listeners to open message panel
    setTimeout(() => {
        // Message requests button handler
        const messageRequestsBtn = el.querySelector('.btn-message-requests');
        if (messageRequestsBtn) {
            messageRequestsBtn.addEventListener('click', () => {
                // Remove existing modal if any
                const existingModal = document.querySelector('.message-requests-modal');
                if (existingModal) existingModal.remove();

                // Create modal
                const modal = createMessageRequestsModal(messageRequests, onOpenConversation);
                document.body.appendChild(modal);
            });
        }

        const dmCards = el.querySelectorAll('.dm-card[data-dm-id]');
        dmCards.forEach(card => {
            card.addEventListener('click', () => {
                const friendData = JSON.parse(card.dataset.friend);

                // Remove unread styling
                card.classList.remove('unread');
                const badge = card.querySelector('.unread-badge');
                if (badge) badge.remove();

                // Open message panel
                if (onOpenConversation) {
                    onOpenConversation(friendData);
                }
            });
        });
    }, 0);

    return el;
}

// Helper function to create message requests modal
function createMessageRequestsModal(requests, onOpenConversation) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay message-requests-modal';

    modal.innerHTML = `
        <div class="modal glass-panel" style="max-width: 600px;">
            <div class="modal-header">
                <h3><i class="fa-solid fa-envelope-open-text"></i> Message Requests (${requests.length})</h3>
                <button class="close-btn"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="modal-body" style="max-height: 500px; overflow-y: auto;">
                ${requests.length > 0 ? requests.map((req, idx) => `
                    <div class="dm-card message-request glass-panel" data-req-id="${req.id}" style="margin-bottom: 12px;">
                        <div class="dm-info" style="flex: 1;">
                            <div class="avatar-md">
                                <img src="${req.from.avatar}" alt="${req.from.name}" />
                            </div>
                            <div class="dm-details">
                                <div class="dm-header-row">
                                    <span class="dm-name">${req.from.name}</span>
                                    <span class="dm-time">${req.timestamp}</span>
                                </div>
                                <span class="dm-preview">${req.preview}</span>
                            </div>
                        </div>
                        <div class="request-actions">
                            <button class="btn-accept"><i class="fa-solid fa-check"></i> Accept</button>
                            <button class="btn-decline"><i class="fa-solid fa-xmark"></i> Decline</button>
                        </div>
                    </div>
                `).join('') : `
                    <div style="text-align: center; padding: 40px; color: var(--text-secondary);">
                        <i class="fa-solid fa-inbox" style="font-size: 3rem; margin-bottom: 16px; opacity: 0.5;"></i>
                        <p>No pending message requests</p>
                    </div>
                `}
            </div>
        </div>
    `;

    // Close handlers
    setTimeout(() => {
        const closeBtn = modal.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => modal.remove());

        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });

        // Accept/Decline handlers
        modal.querySelectorAll('.btn-accept').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = e.target.closest('.dm-card');
                const reqData = requests.find(r => r.id == card.dataset.reqId);

                // Open conversation on accept
                if (onOpenConversation && reqData) {
                    onOpenConversation(reqData.from);
                    modal.remove();
                } else {
                    card.style.opacity = '0.5';
                    setTimeout(() => card.remove(), 300);
                }
            });
        });

        modal.querySelectorAll('.btn-decline').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = e.target.closest('.dm-card');
                card.style.opacity = '0.5';
                setTimeout(() => card.remove(), 300);
            });
        });
    }, 0);

    return modal;
}
