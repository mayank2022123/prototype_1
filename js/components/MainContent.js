import { FriendsTab } from './FriendsTab.js';
import { DMsTab } from './DMsTab.js';
import { MessagePanel } from './MessagePanel.js';

export function MainContent() {
  const el = document.createElement('main');
  el.className = 'main-content glass-panel';

  let currentTab = 'friends';
  let currentConversation = null;

  el.innerHTML = `
    <div class="content-tabs">
      <button class="tab-btn active" data-tab="friends">
        <i class="fa-solid fa-user-group"></i>
        Friends
      </button>
      <button class="tab-btn" data-tab="dms">
        <i class="fa-solid fa-message"></i>
        Direct Messages
        <span class="tab-badge">3</span>
      </button>
    </div>
    
    <div class="tab-content"></div>
  `;

  const tabContent = el.querySelector('.tab-content');
  const tabButtons = el.querySelectorAll('.tab-btn');

  function openMessagePanel(friend) {
    currentConversation = friend;
    tabContent.innerHTML = '';
    tabContent.appendChild(MessagePanel({
      friend,
      onClose: () => {
        currentConversation = null;
        switchTab(currentTab);
      }
    }));
  }

  function switchTab(tabName) {
    if (currentConversation) {
      currentConversation = null;
    }

    currentTab = tabName;

    // Update button states
    tabButtons.forEach(btn => {
      if (btn.dataset.tab === tabName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Clear and render new content
    tabContent.innerHTML = '';

    if (tabName === 'friends') {
      tabContent.appendChild(FriendsTab());
    } else if (tabName === 'dms') {
      tabContent.appendChild(DMsTab({ onOpenConversation: openMessagePanel }));
    }
  }

  // Initial render
  setTimeout(() => {
    switchTab('friends');

    // Add click listeners
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        switchTab(btn.dataset.tab);
      });
    });
  }, 0);

  return el;
}
