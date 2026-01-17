'use client';

import React, { useState } from 'react';

interface EditProfileModalProps {
    onSave: (data: { name: string, bio: string }) => void;
    onCancel: () => void;
}

export function EditProfileModal({ onSave, onCancel }: EditProfileModalProps) {
    const [name, setName] = useState('Alex Developer');
    const [bio, setBio] = useState('Passionate about building scalable web apps and community learning. Level 12 Contributor.');

    const handleSave = () => {
        onSave({ name, bio });
    };

    return (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onCancel(); }}>
            <div className="modal glass-panel">
                <div className="modal-header">
                    <h3>Edit Profile</h3>
                    <button className="close-btn" onClick={onCancel}><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label>Display Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Handle</label>
                        <input
                            type="text"
                            value="@alex_builder"
                            disabled
                            style={{ opacity: 0.6, cursor: 'not-allowed' }}
                        />
                        <span className="field-hint">Handles cannot be changed.</span>
                    </div>
                    <div className="form-group">
                        <label>Bio</label>
                        <textarea
                            rows={4}
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={onCancel}>Cancel</button>
                    <button className="btn-save" onClick={handleSave}>Save Changes</button>
                </div>
            </div>
        </div>
    );
}
