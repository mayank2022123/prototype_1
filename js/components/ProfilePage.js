import { EditProfileModal } from './EditProfileModal.js';

export function ProfilePage({ onBack }) {
    const el = document.createElement('main');
    el.className = 'main-content glass-panel profile-page';

    el.innerHTML = `
    <div class="profile-hero animate-fade-in">
        <button class="back-btn" title="Back to Home"><i class="fa-solid fa-arrow-left"></i></button>
        <div class="hero-cover"></div>
        <div class="hero-content">
            <div class="avatar-xl">
                <img src="https://ui-avatars.com/api/?name=Alex+Dev&background=ff9900&color=fff&size=128" alt="User" />
            </div>
            <h1 id="profile-name">Alex Developer</h1>
            <div class="user-meta">
                <span class="handle">@alex_builder</span>
                <span class="user-id-badge"><i class="fa-solid fa-id-badge"></i> #8291</span>
            </div>
            <p class="bio" id="profile-bio">Passionate about building scalable web apps and community learning. Level 12 Contributor.</p>
            
            <div class="hero-stats">
                <div class="hero-stat xp-stat-container">
                    <div class="stat-header">
                        <span class="val">12,450 XP</span>
                        <span class="lbl">Level 12</span>
                    </div>
                    <div class="hero-stat-progress">
                        <div class="fill" style="width: 75%"></div>
                    </div>
                    <span class="progress-lbl">75% to Level 13</span>
                </div>
                <div class="hero-stat credits-stat-container">
                    <div class="stat-icon-wrapper credits-icon">
                        <i class="fa-solid fa-dollar-sign"></i>
                    </div>
                    <div class="stat-text">
                        <span class="val">840</span>
                        <span class="lbl">Credits</span>
                    </div>
                </div>
                <div class="hero-stat followers-stat-container">
                    <div class="stat-icon-wrapper followers-icon">
                         <i class="fa-solid fa-users"></i>
                    </div>
                    <div class="stat-text">
                        <span class="val">128</span>
                        <span class="lbl">Followers</span>
                    </div>
                </div>
            </div>
            
            <button id="btn-customize-profile" class="action-btn" style="margin-top: 20px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); padding: 8px 24px; border-radius: 20px; color: var(--text-primary); cursor: pointer; display: flex; align-items: center; gap: 8px; transition: background 0.2s;">
                <i class="fa-solid fa-pen-to-square"></i> Customize Profile
            </button>
        </div>
    </div>
    
    <div class="profile-body animate-slide-up" style="animation-delay: 0.1s;">
        <h2 style="margin-bottom: 20px;">Community Contributions</h2>
        <div class="contributions-grid">
            <div class="contribution-card legendary">
                <div class="card-glow"></div>
                <div class="icon-wrapper"><i class="fa-solid fa-code"></i></div>
                <div class="card-content">
                    <span class="card-title">Code Ninja</span>
                    <span class="card-desc">Top 1% Contributor</span>
                    <div class="card-badge"><i class="fa-solid fa-crown"></i> Legendary</div>
                </div>
            </div>
             <div class="contribution-card epic">
                <div class="card-glow"></div>
                 <div class="icon-wrapper"><i class="fa-solid fa-fire-flame-curved"></i></div>
                <div class="card-content">
                    <span class="card-title">7 Day Streak</span>
                    <span class="card-desc">Consistent Activity</span>
                    <div class="card-badge"><i class="fa-solid fa-bolt"></i> Epic</div>
                </div>
            </div>
             <div class="contribution-card rare">
                <div class="card-glow"></div>
                 <div class="icon-wrapper"><i class="fa-solid fa-hand-holding-heart"></i></div>
                <div class="card-content">
                    <span class="card-title">Community Pillar</span>
                    <span class="card-desc">Helpful Member</span>
                    <div class="card-badge"><i class="fa-solid fa-star"></i> Rare</div>
                </div>
            </div>
        </div>

        <h2 style="margin-top: 40px;">My Communities</h2>
        <div class="my-communities-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin-top: 20px;">
            <div class="community-card">
                <div class="comm-img" style="background: #ff5500; width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: white;"><i class="fa-brands fa-js"></i></div>
                <div class="comm-info">
                    <span style="display: block; font-weight: 600;">JS Masters</span>
                    <span style="font-size: 0.8rem; color: var(--accent-primary);">Level 5 Member</span>
                </div>
            </div>
            <div class="community-card">
                <div class="comm-img" style="background: #007bff; width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: white;"><i class="fa-solid fa-pen-nib"></i></div>
                <div class="comm-info">
                    <span style="display: block; font-weight: 600;">UI Design</span>
                    <span style="font-size: 0.8rem; color: #007bff;">Moderator</span>
                </div>
            </div>
            <div class="community-card">
                <div class="comm-img" style="background: #00ffaa; width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: #1a1a20;"><i class="fa-solid fa-cube"></i></div>
                <div class="comm-info">
                    <span style="display: block; font-weight: 600;">Web3 Devs</span>
                    <span style="font-size: 0.8rem; color: #00ffaa;">Contributor</span>
                </div>
            </div>
        </div>
        
        <h2 style="margin-top: 40px;">Recent Activity</h2>
        <div class="activity-feed" style="margin-top: 20px; display: flex; flex-direction: column; gap: 16px;">
            <div class="activity-item">
                <div class="icon-box" style="width: 36px; height: 36px; border-radius: 8px; background: rgba(0,255,170,0.1); color: #00ffaa; display: flex; align-items: center; justify-content: center;"><i class="fa-solid fa-check"></i></div>
                <div class="act-info" style="flex: 1;">
                    <span style="display: block; font-weight: 500;">Completed "JS Basics" Module</span>
                    <span style="font-size: 0.8rem; color: var(--text-secondary);">Earned 50 XP • 2h ago</span>
                </div>
            </div>
             <div class="activity-item">
                <div class="icon-box" style="width: 36px; height: 36px; border-radius: 8px; background: rgba(255,153,0,0.1); color: var(--accent-primary); display: flex; align-items: center; justify-content: center;"><i class="fa-solid fa-comment-dots"></i></div>
                <div class="act-info" style="flex: 1;">
                    <span style="display: block; font-weight: 500;">Replied to @SarahJ</span>
                    <span style="font-size: 0.8rem; color: var(--text-secondary);">In "Web3 Devs" • 5h ago</span>
                </div>
            </div>
        </div>

        <h2 style="margin-top: 40px;">Friends</h2>
        <div class="friends-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(60px, 1fr)); gap: 15px; margin-top: 20px;">
           <div class="avatar-md" style="cursor: pointer;"><img src="https://ui-avatars.com/api/?name=Sarah+J&background=random" /></div>
           <div class="avatar-md" style="cursor: pointer;"><img src="https://ui-avatars.com/api/?name=Mike+T&background=random" /></div>
           <div class="avatar-md" style="cursor: pointer;"><img src="https://ui-avatars.com/api/?name=Anna+B&background=random" /></div>
           <div class="avatar-md" style="cursor: pointer; border: 2px dashed rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center;"><i class="fa-solid fa-user-plus"></i></div>
        </div>
    </div>
  `;

    setTimeout(() => {
        const btnCustomize = el.querySelector('#btn-customize-profile');
        const btnBack = el.querySelector('.back-btn');

        if (btnBack) {
            btnBack.addEventListener('click', () => {
                if (onBack) onBack();
            });
        }

        btnCustomize.addEventListener('click', () => {
            const modal = EditProfileModal({
                onSave: (data) => {
                    // Update DOM for this session
                    el.querySelector('#profile-name').textContent = data.name;
                    el.querySelector('#profile-bio').textContent = data.bio;
                }
            });
            document.body.appendChild(modal);
        });
    }, 0);

    return el;
}

