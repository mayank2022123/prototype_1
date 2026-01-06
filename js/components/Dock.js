export function Dock({ onNavigate }) {
  const el = document.createElement('div');
  el.className = 'dock-container';

  el.innerHTML = `
    <button class="dock-toggle-btn" title="Toggle Dock">
      <i class="fa-solid fa-grip"></i>
    </button>
    <div class="dock glass-panel">
      <!-- Main Nav -->
      <button class="dock-item" data-view="home" title="Home">
        <i class="fa-solid fa-house"></i>
      </button>
      <button class="dock-item" title="Explore">
        <i class="fa-solid fa-compass"></i>
      </button>
      <button class="dock-item" title="Add Friend">
        <i class="fa-solid fa-user-plus"></i>
      </button>
      
      <div class="dock-divider"></div>
      
      <!-- Communities -->
      <button class="dock-item community-icon" title="JS Masters" style="color: #ff9900;">
        <i class="fa-brands fa-js"></i>
      </button>
      <button class="dock-item community-icon" title="UI Design" style="color: #007bff;">
        <i class="fa-solid fa-pen-nib"></i>
      </button>
      <button class="dock-item community-icon" title="Web3 Devs" style="color: #00ffaa;">
        <i class="fa-solid fa-cube"></i>
      </button>

      <div class="dock-divider"></div>

      <!-- Settings -->
      <button class="dock-item" id="theme-toggle-dock" title="Theme">
        <i class="fa-solid fa-moon"></i>
      </button>
      <button class="dock-item" title="Settings">
        <i class="fa-solid fa-gear"></i>
      </button>
       <button class="dock-item" title="Help">
        <i class="fa-solid fa-circle-question"></i>
      </button>
    </div>
  `;

  // Toggle dock visibility
  setTimeout(() => {
    const dockElement = el.querySelector('.dock');
    const toggleBtn = el.querySelector('.dock-toggle-btn');
    let isHidden = false;

    toggleBtn.addEventListener('click', () => {
      isHidden = !isHidden;
      
      if (isHidden) {
        dockElement.classList.add('dock-hidden');
        el.classList.add('dock-collapsed');
      } else {
        dockElement.classList.remove('dock-hidden');
        el.classList.remove('dock-collapsed');
      }
    });
  }, 0);

  // Scale Effect Logic
  const items = el.querySelectorAll('.dock-item');
  items.forEach(item => {
    item.addEventListener('mousemove', (e) => {
      // Simple scale up
      item.style.transform = 'scale(1.2) translateY(-10px)';
      item.style.margin = '0 10px';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1) translateY(0)';
      item.style.margin = '0';
    });
  });

  // Navigation Logic
  const homeBtn = el.querySelector('[data-view="home"]');
  if (homeBtn) {
    homeBtn.addEventListener('click', () => onNavigate('home'));
  }

  // Theme Logic
  setTimeout(() => {
    const toggle = el.querySelector('#theme-toggle-dock');
    const icon = toggle.querySelector('i');

    toggle.addEventListener('click', () => {
      const body = document.body;
      const isDark = !body.hasAttribute('data-theme');

      if (isDark) {
        body.setAttribute('data-theme', 'light');
        icon.className = 'fa-solid fa-sun';
      } else {
        body.removeAttribute('data-theme');
        icon.className = 'fa-solid fa-moon';
      }
    });
  }, 0);

  return el;
}
