export function MessagesDrawer({ onClose }) {
    const el = document.createElement('div');
    el.className = 'messages-drawer glass-panel';

    el.innerHTML = `
    <div class="drawer-header">
      <h2>Social</h2>
      <button class="close-btn"><i class="fa-solid fa-xmark"></i></button>
    </div>
    
    <div class="drawer-tabs">
      <button class="d-tab active" data-tab="chats">Chats</button>
      <button class="d-tab" data-tab="friends">Friends</button>
    </div>
    
    <div class="drawer-content" id="drawer-content">
      <!-- Chat List (Default) -->
      <div class="chat-list">
        <div class="chat-item">
            <div class="avatar-sm"><img src="https://ui-avatars.com/api/?name=Sarah+J&background=random" /></div>
            <div class="chat-info">
                <span class="name">Sarah Jenkins</span>
                <span class="last-msg">Did you see the new update?</span>
            </div>
            <span class="time">2m</span>
        </div>
         <div class="chat-item unread">
            <div class="avatar-sm"><img src="https://ui-avatars.com/api/?name=Mike+T&background=random" /></div>
            <div class="chat-info">
                <span class="name">Mike Tyson</span>
                <span class="last-msg">Let's collab on that project.</span>
            </div>
            <span class="time">1h</span>
        </div>
      </div>
    </div>
  `;

    // Close Logic
    el.querySelector('.close-btn').addEventListener('click', () => {
        onClose();
    });

    return el;
}
