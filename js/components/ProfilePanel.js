export function ProfilePanel({ onNavigate }) {
  const el = document.createElement('aside');
  el.className = 'profile-panel glass-panel';

  el.innerHTML = `
    <div class="profile-header compact clickable">
      <div class="avatar-md">
        <img src="https://ui-avatars.com/api/?name=Alex+D&background=ff9900&color=fff" alt="User" />
      </div>
      <div class="header-info">
        <h3>Alex Dev</h3>
        <span class="handle">View Profile <i class="fa-solid fa-chevron-right"></i></span>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card xp-card compact">
        <div class="stat-row">
            <span class="label">XP</span>
            <span class="value">12.5k</span>
        </div>
        <div class="progress-bar small">
          <div class="fill" style="width: 75%"></div>
        </div>
      </div>

      <div class="stat-card credits-card compact">
        <div class="stat-row">
             <span class="label">Credits</span>
             <span class="value">840</span>
        </div>
      </div>
    </div>

    <div class="community-list compact">
      <h3>Active Now</h3>
      <div class="community-item small">
        <div class="comm-icon">JS</div>
        <span>JavaScript Daily</span>
      </div>
    </div>
  `;

  // Add Click Handler
  setTimeout(() => {
    const header = el.querySelector('.profile-header');
    header.addEventListener('click', () => {
      onNavigate('profile');
    });
  }, 0);

  return el;
}
