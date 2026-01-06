export function EditProfileModal({ onSave, onCancel }) {
    const el = document.createElement('div');
    el.className = 'modal-overlay';

    el.innerHTML = `
    <div class="modal glass-panel">
        <div class="modal-header">
            <h3>Edit Profile</h3>
            <button class="close-btn"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label>Display Name</label>
                <input type="text" id="edit-name" value="Alex Developer" />
            </div>
            <div class="form-group">
                <label>Handle</label>
                <input type="text" id="edit-handle" value="@alex_builder" disabled style="opacity: 0.6; cursor: not-allowed;" />
                <span class="field-hint">Handles cannot be changed.</span>
            </div>
            <div class="form-group">
                <label>Bio</label>
                <textarea id="edit-bio" rows="4">Passionate about building scalable web apps and community learning. Level 12 Contributor.</textarea>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn-cancel">Cancel</button>
            <button class="btn-save">Save Changes</button>
        </div>
    </div>
    `;

    // Event Listeners
    setTimeout(() => {
        const closeBtn = el.querySelector('.close-btn');
        const cancelBtn = el.querySelector('.btn-cancel');
        const saveBtn = el.querySelector('.btn-save');
        const overlay = el;

        const close = () => {
            if (el.parentNode) {
                el.parentNode.removeChild(el);
            }
            if (onCancel) onCancel();
        };

        const save = () => {
            const name = el.querySelector('#edit-name').value;
            const bio = el.querySelector('#edit-bio').value;
            if (onSave) onSave({ name, bio });
            close();
        };

        closeBtn.addEventListener('click', close);
        cancelBtn.addEventListener('click', close);
        saveBtn.addEventListener('click', save);

        // Close on clicking outside
        el.addEventListener('click', (e) => {
            if (e.target === el) close();
        });

    }, 0);

    return el;
}
