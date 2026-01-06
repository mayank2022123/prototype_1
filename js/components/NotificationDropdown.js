export function NotificationDropdown({ onClose }) {
    const el = document.createElement('div');
    el.className = 'notification-dropdown glass-panel';

    const notifications = [
        { id: 1, type: 'badge', icon: 'fa-solid fa-star', text: 'New badge unlocked: Community Expert!', time: '5m ago', read: false },
        { id: 2, type: 'friend', icon: 'fa-solid fa-user-plus', text: 'Sarah J accepted your friend request', time: '1h ago', read: false },
        { id: 3, type: 'message', icon: 'fa-solid fa-message', text: '2 new messages from Mike T', time: '2h ago', read: true },
        { id: 4, type: 'achievement', icon: 'fa-solid fa-trophy', text: 'You\'re in the top 10% this week!', time: '3h ago', read: true },
        { id: 5, type: 'friend', icon: 'fa-solid fa-user-plus', text: 'New friend request from Emily R', time: '5h ago', read: false }
    ];

    el.innerHTML = `
        <div class="dropdown-header">
            <h3>Notifications</h3>
            <button class="btn-clear-all">Clear all</button>
        </div>
        <div class="notifications-list">
            ${notifications.map(notif => `
                <div class="notification-item ${notif.read ? 'read' : 'unread'}" data-id="${notif.id}">
                    <div class="notif-icon ${notif.type}">
                        <i class="${notif.icon}"></i>
                    </div>
                    <div class="notif-content">
                        <p>${notif.text}</p>
                        <span class="notif-time">${notif.time}</span>
                    </div>
                    ${!notif.read ? '<div class="unread-dot"></div>' : ''}
                </div>
            `).join('')}
        </div>
        <div class="dropdown-footer">
            <button class="btn-view-all">View All Notifications</button>
        </div>
    `;

    // Mark as read on click
    setTimeout(() => {
        const items = el.querySelectorAll('.notification-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.remove('unread');
                item.classList.add('read');
                const dot = item.querySelector('.unread-dot');
                if (dot) dot.remove();
            });
        });

        // Clear all
        el.querySelector('.btn-clear-all').addEventListener('click', () => {
            el.querySelectorAll('.notification-item').forEach(item => item.remove());
        });

        // Close on outside click handled by parent
    }, 0);

    return el;
}
