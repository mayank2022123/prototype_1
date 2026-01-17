'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { EditProfileModal } from '@/components/EditProfileModal';

export default function ProfilePage() {
    const [showEditModal, setShowEditModal] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'Alex Developer',
        bio: 'Passionate about building scalable web apps and community learning. Level 12 Contributor.'
    });

    const handleSaveProfile = (data: { name: string, bio: string }) => {
        setProfileData(data);
        setShowEditModal(false);
    };

    return (
        <main className="main-content glass-panel profile-page">
            <div className="profile-hero animate-fade-in">
                <Link href="/" className="back-btn" title="Back to Home"><i className="fa-solid fa-arrow-left"></i></Link>
                <div className="hero-cover"></div>
                <div className="hero-content">
                    <div className="avatar-xl">
                        <img src="https://ui-avatars.com/api/?name=Alex+Dev&background=ff9900&color=fff&size=128" alt="User" />
                    </div>
                    <h1>{profileData.name}</h1>
                    <div className="user-meta">
                        <span className="handle">@alex_builder</span>
                        <span className="user-id-badge"><i className="fa-solid fa-id-badge"></i> #8291</span>
                    </div>
                    <p className="bio">{profileData.bio}</p>

                    <div className="hero-stats">
                        <div className="hero-stat xp-stat-container">
                            <div className="stat-header">
                                <span className="val">12,450 XP</span>
                                <span className="lbl">Level 12</span>
                            </div>
                            <div className="hero-stat-progress">
                                <div className="fill" style={{ width: '75%' }}></div>
                            </div>
                            <span className="progress-lbl">75% to Level 13</span>
                        </div>
                        <div className="hero-stat credits-stat-container">
                            <div className="stat-icon-wrapper credits-icon">
                                <i className="fa-solid fa-dollar-sign"></i>
                            </div>
                            <div className="stat-text">
                                <span className="val">840</span>
                                <span className="lbl">Credits</span>
                            </div>
                        </div>
                        <div className="hero-stat followers-stat-container">
                            <div className="stat-icon-wrapper followers-icon">
                                <i className="fa-solid fa-users"></i>
                            </div>
                            <div className="stat-text">
                                <span className="val">128</span>
                                <span className="lbl">Followers</span>
                            </div>
                        </div>
                    </div>

                    <button
                        className="action-btn"
                        style={{ marginTop: '20px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '8px 24px', borderRadius: '20px', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background 0.2s' }}
                        onClick={() => setShowEditModal(true)}
                    >
                        <i className="fa-solid fa-pen-to-square"></i> Customize Profile
                    </button>
                </div>
            </div>

            <div className="profile-body animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h2 style={{ marginBottom: '20px' }}>Community Contributions</h2>
                <div className="contributions-grid">
                    <div className="contribution-card legendary">
                        <div className="card-glow"></div>
                        <div className="icon-wrapper"><i className="fa-solid fa-code"></i></div>
                        <div className="card-content">
                            <span className="card-title">Code Ninja</span>
                            <span className="card-desc">Top 1% Contributor</span>
                            <div className="card-badge"><i className="fa-solid fa-crown"></i> Legendary</div>
                        </div>
                    </div>
                    <div className="contribution-card epic">
                        <div className="card-glow"></div>
                        <div className="icon-wrapper"><i className="fa-solid fa-fire-flame-curved"></i></div>
                        <div className="card-content">
                            <span className="card-title">7 Day Streak</span>
                            <span className="card-desc">Consistent Activity</span>
                            <div className="card-badge"><i className="fa-solid fa-bolt"></i> Epic</div>
                        </div>
                    </div>
                    <div className="contribution-card rare">
                        <div className="card-glow"></div>
                        <div className="icon-wrapper"><i className="fa-solid fa-hand-holding-heart"></i></div>
                        <div className="card-content">
                            <span className="card-title">Community Pillar</span>
                            <span className="card-desc">Helpful Member</span>
                            <div className="card-badge"><i className="fa-solid fa-star"></i> Rare</div>
                        </div>
                    </div>
                </div>

                <h2 style={{ marginTop: '40px' }}>My Communities</h2>
                <div className="my-communities-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginTop: '20px' }}>
                    <div className="community-card">
                        <div className="comm-img" style={{ background: '#ff5500', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'white' }}><i className="fa-brands fa-js"></i></div>
                        <div className="comm-info">
                            <span style={{ display: 'block', fontWeight: 600 }}>JS Masters</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)' }}>Level 5 Member</span>
                        </div>
                    </div>
                    <div className="community-card">
                        <div className="comm-img" style={{ background: '#007bff', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'white' }}><i className="fa-solid fa-pen-nib"></i></div>
                        <div className="comm-info">
                            <span style={{ display: 'block', fontWeight: 600 }}>UI Design</span>
                            <span style={{ fontSize: '0.8rem', color: '#007bff' }}>Moderator</span>
                        </div>
                    </div>
                    <div className="community-card">
                        <div className="comm-img" style={{ background: '#00ffaa', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#1a1a20' }}><i className="fa-solid fa-cube"></i></div>
                        <div className="comm-info">
                            <span style={{ display: 'block', fontWeight: 600 }}>Web3 Devs</span>
                            <span style={{ fontSize: '0.8rem', color: '#00ffaa' }}>Contributor</span>
                        </div>
                    </div>
                </div>

                <h2 style={{ marginTop: '40px' }}>Recent Activity</h2>
                <div className="activity-feed" style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div className="activity-item">
                        <div className="icon-box" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(0,255,170,0.1)', color: '#00ffaa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fa-solid fa-check"></i></div>
                        <div className="act-info" style={{ flex: 1 }}>
                            <span style={{ display: 'block', fontWeight: 500 }}>Completed &quot;JS Basics&quot; Module</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Earned 50 XP • 2h ago</span>
                        </div>
                    </div>
                    <div className="activity-item">
                        <div className="icon-box" style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,153,0,0.1)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fa-solid fa-comment-dots"></i></div>
                        <div className="act-info" style={{ flex: 1 }}>
                            <span style={{ display: 'block', fontWeight: 500 }}>Replied to @SarahJ</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>In &quot;Web3 Devs&quot; • 5h ago</span>
                        </div>
                    </div>
                </div>

                <h2 style={{ marginTop: '40px' }}>Friends</h2>
                <div className="friends-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))', gap: '15px', marginTop: '20px' }}>
                    <div className="avatar-md" style={{ cursor: 'pointer' }}><img src="https://ui-avatars.com/api/?name=Sarah+J&background=random" /></div>
                    <div className="avatar-md" style={{ cursor: 'pointer' }}><img src="https://ui-avatars.com/api/?name=Mike+T&background=random" /></div>
                    <div className="avatar-md" style={{ cursor: 'pointer' }}><img src="https://ui-avatars.com/api/?name=Anna+B&background=random" /></div>
                    <div className="avatar-md" style={{ cursor: 'pointer', border: '2px dashed rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fa-solid fa-user-plus"></i></div>
                </div>
            </div>

            {showEditModal && (
                <EditProfileModal
                    onSave={handleSaveProfile}
                    onCancel={() => setShowEditModal(false)}
                />
            )}
        </main>
    );
}
