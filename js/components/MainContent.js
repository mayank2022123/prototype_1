import { FriendsTab } from './FriendsTab.js';
import { DMsTab } from './DMsTab.js';
import { MessagePanel } from './MessagePanel.js';

export function MainContent() {
  const el = document.createElement('main');
  el.className = 'main-content glass-panel';

  let currentTab = 'friends';
  let currentConversation = null;
  let dmsTabElement = null;
  let dmsSplitView = null;

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
    
    // Find the chat panel in split view
    const chatPanel = dmsSplitView.querySelector('.dms-chat-panel');
    chatPanel.innerHTML = '';
    
    // Add the message panel without close button
    chatPanel.appendChild(MessagePanel({
      friend,
      onClose: null // No close button in split view
    }));

    // Highlight active conversation in sidebar
    if (dmsTabElement) {
      const dmCards = dmsTabElement.querySelectorAll('.dm-card');
      dmCards.forEach(card => {
        const cardFriend = JSON.parse(card.dataset.friend);
        if (cardFriend.name === friend.name) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    }
  }

  function createDMsSplitView() {
    const splitView = document.createElement('div');
    splitView.className = 'dms-split-view';
    
    // Left sidebar with DMs list
    const sidebar = document.createElement('div');
    sidebar.className = 'dms-sidebar';
    dmsTabElement = DMsTab({ onOpenConversation: openMessagePanel });
    sidebar.appendChild(dmsTabElement);
    
    // Right panel for chat
    const chatPanel = document.createElement('div');
    chatPanel.className = 'dms-chat-panel';
    
    // Empty state
    chatPanel.innerHTML = `
      <div class="dms-empty-state">
        <i class="fa-solid fa-comments" style="font-size: 4rem; opacity: 0.3; margin-bottom: 16px;"></i>
        <h3>Select a conversation</h3>
        <p>Choose from your existing conversations or start a new one</p>
      </div>
    `;
    
    splitView.appendChild(sidebar);
    splitView.appendChild(chatPanel);
    
    return splitView;
  }

  function switchTab(tabName) {
    currentConversation = null;
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
      dmsTabElement = null;
      dmsSplitView = null;
    } else if (tabName === 'dms') {
      dmsSplitView = createDMsSplitView();
      tabContent.appendChild(dmsSplitView);
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
