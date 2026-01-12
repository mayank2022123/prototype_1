import { NotificationDropdown } from './NotificationDropdown.js';

export function TopBar({ onNavigate }) {
  // Wrapper that holds both the Fixed Button and the Flow Content (HUD)
  const container = document.createElement('div');
  container.className = 'top-bar-wrapper';

  // 1. The HUD Panel (Collapsible content)
  const hud = document.createElement('header');
  hud.className = 'top-bar glass-panel';
  hud.innerHTML = `
    <div class="topbar-content">
      <div class="hud-stats">
        <div class="hud-capsule xp-capsule">
          <div class="hud-icon"><i class="fa-solid fa-bolt"></i></div>
          <div class="hud-value">
              <span class="val">12,450</span>
              <span class="lbl">XP</span>
          </div>
          <div class="hud-progress"><div class="fill" style="width: 75%"></div></div>
        </div>

        <div class="hud-capsule credits-capsule">
          <div class="hud-icon" style="color: #00ffaa;"><i class="fa-solid fa-dollar-sign"></i></div>
          <div class="hud-value">
              <span class="val">840</span>
              <span class="lbl">Credits</span>
          </div>
        </div>
      </div>

      <div class="notification-ticker-container">
        <div class="notification-ticker">
          <span class="ticker-item">
            <i class="fa-solid fa-star"></i>
            New badge unlocked: Community Expert!
          </span>
          <span class="ticker-item">
            <i class="fa-solid fa-user-plus"></i>
            Sarah J accepted your friend request
          </span>
          <span class="ticker-item">
            <i class="fa-solid fa-message"></i>
            2 new messages from Mike T
          </span>
          <span class="ticker-item">
            <i class="fa-solid fa-trophy"></i>
            You're in the top 10% this week!
          </span>
        </div>
      </div>

      <div class="hud-right">
        <div class="notification-container">
          <button class="notification-btn">
            <i class="fa-solid fa-bell"></i>
            <span class="notification-badge">3</span>
          </button>
        </div>

        <div class="hud-profile clickable">
            <span class="username">Alex Dev</span>
            <div class="avatar-sm">
                <img src="https://ui-avatars.com/api/?name=Alex+D&background=ff9900&color=fff" alt="User" />
            </div>
        </div>
      </div>
    </div>
  `;

  // 2. The Toggle Button (Fixed position)
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'topbar-toggle-btn';
  toggleBtn.title = 'Toggle Top Bar';
  toggleBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';

  container.appendChild(hud);
  container.appendChild(toggleBtn);

  setTimeout(() => {
    // Toggle Logic
    const topbarContent = hud.querySelector('.topbar-content');
    const icon = toggleBtn.querySelector('i');
    let isHidden = false;

    toggleBtn.addEventListener('click', () => {
      isHidden = !isHidden;

      if (isHidden) {
        hud.classList.add('topbar-collapsed');
        container.classList.add('wrapper-collapsed');
        icon.className = 'fa-solid fa-chevron-down';
      } else {
        hud.classList.remove('topbar-collapsed');
        container.classList.remove('wrapper-collapsed');
        icon.className = 'fa-solid fa-chevron-up';
      }
    });

    // Profile navigation
    hud.querySelector('.hud-profile').addEventListener('click', () => {
      onNavigate('profile');
    });

    // Notification dropdown
    const notifContainer = hud.querySelector('.notification-container');
    const notifBtn = hud.querySelector('.notification-btn');
    let dropdownOpen = false;
    let currentDropdown = null;

    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();

      if (dropdownOpen) {
        currentDropdown.remove();
        dropdownOpen = false;
        currentDropdown = null;
      } else {
        currentDropdown = NotificationDropdown({});
        notifContainer.appendChild(currentDropdown);
        dropdownOpen = true;

        // Close on outside click
        setTimeout(() => {
          document.addEventListener('click', function closeDropdown() {
            if (currentDropdown && currentDropdown.parentNode) {
              currentDropdown.remove();
            }
            dropdownOpen = false;
            currentDropdown = null;
            document.removeEventListener('click', closeDropdown);
          });
        }, 0);
      }
    });
  }, 0);

  return container;
}
