export function FriendsTab() {
    const el = document.createElement('div');
    el.className = 'friends-tab';

    // Mock data
    const friends = [
        { id: 1, name: 'Sarah J', avatar: 'https://ui-avatars.com/api/?name=Sarah+J&background=random', status: 'online', userId: '@sarah_j' },
        { id: 2, name: 'Mike T', avatar: 'https://ui-avatars.com/api/?name=Mike+T&background=random', status: 'online', userId: '@mike_t' },
        { id: 3, name: 'Anna B', avatar: 'https://ui-avatars.com/api/?name=Anna+B&background=random', status: 'idle', userId: '@anna_b' },
        { id: 4, name: 'David K', avatar: 'https://ui-avatars.com/api/?name=David+K&background=random', status: 'offline', userId: '@david_k' },
        { id: 5, name: 'Lisa M', avatar: 'https://ui-avatars.com/api/?name=Lisa+M&background=random', status: 'online', userId: '@lisa_m' }
    ];

    const friendRequests = [
        { id: 6, name: 'Emily R', avatar: 'https://ui-avatars.com/api/?name=Emily+R&background=random', mutualFriends: 3 },
        { id: 7, name: 'John S', avatar: 'https://ui-avatars.com/api/?name=John+S&background=random', mutualFriends: 1 }
    ];

    const onlineFriends = friends.filter(f => f.status === 'online');

    el.innerHTML = `
        <div class="friends-header">
            <div class="search-container">
                <i class="fa-solid fa-search"></i>
                <input type="text" placeholder="Search friends..." class="friend-search" />
            </div>
            <button class="btn-add-friend">
                <i class="fa-solid fa-user-plus"></i>
                Add Friend
            </button>
        </div>

        ${friendRequests.length > 0 ? `
            <div class="friend-section">
                <div class="section-header">
                    <h3>Pending — ${friendRequests.length}</h3>
                </div>
                ${friendRequests.map(req => `
                    <div class="friend-request-card glass-panel">
                        <div class="friend-info">
                            <div class="avatar-md">
                                <img src="${req.avatar}" alt="${req.name}" />
                            </div>
                            <div class="friend-details">
                                <span class="friend-name">${req.name}</span>
                                <span class="mutual-friends">${req.mutualFriends} mutual friend${req.mutualFriends > 1 ? 's' : ''}</span>
                            </div>
                        </div>
                        <div class="request-actions">
                            <button class="btn-accept"><i class="fa-solid fa-check"></i></button>
                            <button class="btn-decline"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                    </div>
                `).join('')}
            </div>
        ` : ''}

        <div class="friend-section">
            <div class="section-header">
                <h3>Online — ${onlineFriends.length}</h3>
            </div>
            ${onlineFriends.map(friend => `
                <div class="friend-card" data-friend-id="${friend.id}">
                    <div class="friend-info">
                        <div class="avatar-md">
                            <img src="${friend.avatar}" alt="${friend.name}" />
                            <div class="status-dot status-${friend.status}"></div>
                        </div>
                        <div class="friend-details">
                            <span class="friend-name">${friend.name}</span>
                            <span class="friend-userid">${friend.userId}</span>
                        </div>
                    </div>
                    <div class="friend-actions">
                        <button class="btn-message" title="Message">
                            <i class="fa-solid fa-message"></i>
                        </button>
                        <button class="btn-more" title="More">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="friend-section">
            <div class="section-header">
                <h3>All Friends — ${friends.length}</h3>
            </div>
            ${friends.map(friend => `
                <div class="friend-card" data-friend-id="${friend.id}">
                    <div class="friend-info">
                        <div class="avatar-md">
                            <img src="${friend.avatar}" alt="${friend.name}" />
                            <div class="status-dot status-${friend.status}"></div>
                        </div>
                        <div class="friend-details">
                            <span class="friend-name">${friend.name}</span>
                            <span class="friend-status">${friend.status.charAt(0).toUpperCase() + friend.status.slice(1)}</span>
                        </div>
                    </div>
                    <div class="friend-actions">
                        <button class="btn-message" title="Message">
                            <i class="fa-solid fa-message"></i>
                        </button>
                        <button class="btn-more" title="More">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Add event listeners for message buttons (will open chat window)
    setTimeout(() => {
        const messageButtons = el.querySelectorAll('.btn-message');
        messageButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = e.target.closest('.friend-card, .friend-request-card');
                const friendName = card.querySelector('.friend-name').textContent;
                const friendAvatar = card.querySelector('img').src;

                // Trigger chat window (similar to SocialRail)
                const existing = document.querySelector('.chat-window');
                if (existing) existing.remove();

                // Import and create ChatWindow dynamically
                import('./ChatWindow.js').then(({ ChatWindow }) => {
                    const rect = btn.getBoundingClientRect();
                    const chatWindow = ChatWindow({
                        friendName,
                        avatarUrl: friendAvatar,
                        originX: rect.left + rect.width / 2,
                        originY: rect.top + rect.height / 2,
                        onClose: () => { }
                    });
                    document.body.appendChild(chatWindow);
                });
            });
        });
    }, 0);

    return el;
}
