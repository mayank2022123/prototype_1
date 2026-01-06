export function Sidebar({ onNavigate }) {
  const el = document.createElement('aside');
  el.className = 'sidebar glass-panel';

  // Sidebar styling via CSS to ensure specific layout:
  // We'll add a class 'nav-menu' to the functional bits

  el.innerHTML = `
    <div class="logo-area">
      <i class="fa-solid fa-cube text-accent"></i>
      <span>Lumina</span>
    </div>
    
    <nav class="nav-menu">
      <a href="#" class="nav-item active" data-view="home">
        <i class="fa-solid fa-house"></i>
        <span>Home</span>
      </a>
      <a href="#" class="nav-item">
        <i class="fa-solid fa-users"></i>
        <span>Communities</span>
      </a>
      <a href="#" class="nav-item">
        <i class="fa-solid fa-compass"></i>
        <span>Explore</span>
      </a>
      <a href="#" class="nav-item">
        <i class="fa-solid fa-bookmark"></i>
        <span>Saved</span>
      </a>
    </nav>

    <div class="community-section">
      <h3>My Communities</h3>
      <div class="comm-row">
        <div class="comm-img" style="background: #ff5500"></div>
        <span>JS Masters</span>
      </div>
      <div class="comm-row">
        <div class="comm-img" style="background: #007bff"></div>
        <span>UI Design</span>
      </div>
       <div class="comm-row">
        <div class="comm-img" style="background: #00ffaa"></div>
        <span>Web3 Devs</span>
      </div>
    </div>
    
    <div class="settings-area">
      <button id="theme-toggle" class="nav-item icon-only">
        <i class="fa-solid fa-moon"></i>
      </button>
      <a href="#" class="nav-item icon-only">
        <i class="fa-solid fa-gear"></i>
      </a>
    </div>
  `;

  // Init Theme Toggle Logic
  setTimeout(() => {
    const toggle = el.querySelector('#theme-toggle');
    const icon = toggle.querySelector('i');

    toggle.addEventListener('click', () => {
      const body = document.body;
      const isDark = !body.hasAttribute('data-theme'); // default is dark

      if (isDark) {
        body.setAttribute('data-theme', 'light');
        icon.className = 'fa-solid fa-sun';
      } else {
        body.removeAttribute('data-theme');
        icon.className = 'fa-solid fa-moon';
      }
    });

    // Handle Navigation
    const homeBtn = el.querySelector('[data-view="home"]');
    if (homeBtn) {
      homeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('home');
      });
    }

  }, 0);

  return el;
}
