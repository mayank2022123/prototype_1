'use client';

import React, { useState } from 'react';
import { FriendsTab } from '@/components/FriendsTab';
import { DMsTab } from '@/components/DMsTab';
import { MessagePanel } from '@/components/MessagePanel';

interface Friend {
  name: string;
  avatar: string;
}

export default function Home() {
  const [currentTab, setCurrentTab] = useState<'friends' | 'dms'>('friends');
  const [currentConversation, setCurrentConversation] = useState<Friend | null>(null);

  const openMessagePanel = (friend: Friend) => {
    setCurrentConversation(friend);
  };

  const closeMessagePanel = () => {
    setCurrentConversation(null);
  };

  return (
    <main className="main-content glass-panel">
      {currentConversation ? (
        <MessagePanel friend={currentConversation} onClose={closeMessagePanel} />
      ) : (
        <>
          <div className="content-tabs">
            <button
              className={`tab-btn ${currentTab === 'friends' ? 'active' : ''}`}
              onClick={() => setCurrentTab('friends')}
            >
              <i className="fa-solid fa-user-group"></i>
              Friends
            </button>
            <button
              className={`tab-btn ${currentTab === 'dms' ? 'active' : ''}`}
              onClick={() => setCurrentTab('dms')}
            >
              <i className="fa-solid fa-message"></i>
              Direct Messages
              <span className="tab-badge">3</span>
            </button>
          </div>

          <div className="tab-content">
            {currentTab === 'friends' ? (
              <FriendsTab />
            ) : (
              <DMsTab onOpenConversation={openMessagePanel} />
            )}
          </div>
        </>
      )}
    </main>
  );
}
