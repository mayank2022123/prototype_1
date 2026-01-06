import { ChatWindow } from './ChatWindow.js';

export function SocialRail() {
  const el = document.createElement('aside');
  el.className = 'social-rail';

  const onlineFriends = [
    { name: 'Sarah J', avatar: 'https://ui-avatars.com/api/?name=Sarah+J&background=random' },
    { name: 'Mike T', avatar: 'https://ui-avatars.com/api/?name=Mike+T&background=random' },
    { name: 'Anna B', avatar: 'https://ui-avatars.com/api/?name=Anna+B&background=random' },
    { name: 'Chris L', avatar: 'https://ui-avatars.com/api/?name=Chris+L&background=random' },
    { name: 'Emma W', avatar: 'https://ui-avatars.com/api/?name=Emma+W&background=random' }
  ];

  el.innerHTML = `
    <button class="rail-toggle-btn" title="Toggle Friends">
      <i class="fa-solid fa-users"></i>
    </button>
    <div class="rail-content">
      ${onlineFriends.map((friend, idx) => `
        <div class="friend-item" data-friend-idx="${idx}" title="${friend.name}">
          <div class="avatar-sm">
            <img src="${friend.avatar}" alt="${friend.name}" />
            <div class="status-dot status-online"></div>
          </div>
          <span class="friend-name">${friend.name}</span>
        </div>
      `).join('')}
    </div>
  `;



  // Toggle rail visibility
  const toggleBtn = el.querySelector('.rail-toggle-btn');
  let isHidden = false;

  toggleBtn.addEventListener('click', () => {
    isHidden = !isHidden;

    if (isHidden) {
      el.classList.add('rail-collapsed');
    } else {
      el.classList.remove('rail-collapsed');
    }
  });

  // Chat window functionality
  const friendItems = el.querySelectorAll('.friend-item');

  friendItems.forEach(item => {
    item.addEventListener('click', () => {
      const idx = item.dataset.friendIdx;
      const friend = onlineFriends[idx];

      // Remove existing chat window
      const existingChat = document.querySelector('.chat-window');
      if (existingChat) existingChat.remove();

      // Get position for animation
      const rect = item.getBoundingClientRect();
      const chatWindow = ChatWindow({
        friendName: friend.name,
        avatarUrl: friend.avatar,
        originX: rect.left + rect.width / 2,
        originY: rect.top + rect.height / 2,
        onClose: () => { }
      });

      document.body.appendChild(chatWindow);
    });
  });

  return el;
}



