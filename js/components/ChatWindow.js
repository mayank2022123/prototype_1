export function ChatWindow({ friendName, avatarUrl, onClose, originX, originY }) {
    const el = document.createElement('div');
    el.className = 'chat-window glass-panel animate-chat-open';

    // Fixed Window Position (calculated for Top-Left anchor to support resize)
    const windowRight = 120;
    const windowBottom = 100;
    const initialWidth = 350;
    const initialHeight = 450;

    // Calculate Top/Left based on the intended position
    const boxLeft = window.innerWidth - windowRight - initialWidth;
    const boxTop = window.innerHeight - windowBottom - initialHeight;

    // Apply positioning
    el.style.left = `${boxLeft}px`;
    el.style.top = `${boxTop}px`;
    el.style.right = 'auto';  // Override CSS
    el.style.bottom = 'auto'; // Override CSS

    const relativeX = originX - boxLeft;
    const relativeY = originY - boxTop;

    el.style.transformOrigin = `${relativeX}px ${relativeY}px`;

    el.innerHTML = `
        <div class="chat-header">
            <div class="chat-user">
                <div class="avatar-sm">
                    <img src="${avatarUrl}" alt="${friendName}" />
                </div>
                <div class="user-info">
                    <span class="name">${friendName}</span>
                    <span class="status">Online</span>
                </div>
            </div>
            <div class="chat-controls">
                <button class="minimize-btn"><i class="fa-solid fa-minus"></i></button>
                <button class="close-btn"><i class="fa-solid fa-xmark"></i></button>
            </div>
        </div>
        
        <div class="chat-messages">
            <div class="message received">
                <p>Hey! How's the new project coming along?</p>
                <span class="msg-time">10:42 AM</span>
            </div>
            <div class="message sent">
                <p>Just finishing up the profile page styles. It's looking great!</p>
                <span class="msg-time">10:45 AM</span>
            </div>
        </div>
        
        <div class="chat-input-area">
            <button class="attach-btn"><i class="fa-solid fa-paperclip"></i></button>
            <input type="text" placeholder="Type a message..." />
            <button class="send-btn"><i class="fa-solid fa-paper-plane"></i></button>
        </div>
        
        <div class="resize-handle"></div>
    `;

    // Drag-to-Move Logic (on header)
    const header = el.querySelector('.chat-header');
    let isDragging = false;
    let dragStartX, dragStartY, windowStartX, windowStartY;

    function onDragStart(e) {
        // Don't drag if clicking buttons
        if (e.target.closest('.chat-controls')) return;

        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        windowStartX = parseInt(el.style.left);
        windowStartY = parseInt(el.style.top);

        document.addEventListener('mousemove', onDragMove);
        document.addEventListener('mouseup', onDragEnd);
        e.preventDefault();
    }

    function onDragMove(e) {
        if (!isDragging) return;

        const deltaX = e.clientX - dragStartX;
        const deltaY = e.clientY - dragStartY;

        el.style.left = `${windowStartX + deltaX}px`;
        el.style.top = `${windowStartY + deltaY}px`;
    }

    function onDragEnd() {
        isDragging = false;
        document.removeEventListener('mousemove', onDragMove);
        document.removeEventListener('mouseup', onDragEnd);
    }

    header.addEventListener('mousedown', onDragStart);

    // Resize Logic (on handle)
    const handle = el.querySelector('.resize-handle');
    let isResizing = false;
    let resizeStartX, resizeStartY, startWidth, startHeight;

    function onResizeStart(e) {
        isResizing = true;
        resizeStartX = e.clientX;
        resizeStartY = e.clientY;
        startWidth = el.offsetWidth;
        startHeight = el.offsetHeight;

        document.addEventListener('mousemove', onResizeMove);
        document.addEventListener('mouseup', onResizeEnd);
        e.preventDefault();
        e.stopPropagation();
    }

    function onResizeMove(e) {
        if (!isResizing) return;

        const deltaX = e.clientX - resizeStartX;
        const deltaY = e.clientY - resizeStartY;

        const newWidth = Math.max(300, startWidth + deltaX);
        const newHeight = Math.max(350, startHeight + deltaY);

        el.style.width = `${newWidth}px`;
        el.style.height = `${newHeight}px`;
    }

    function onResizeEnd() {
        isResizing = false;
        document.removeEventListener('mousemove', onResizeMove);
        document.removeEventListener('mouseup', onResizeEnd);
    }

    handle.addEventListener('mousedown', onResizeStart);

    // Close/Minimize Listeners
    el.querySelector('.close-btn').addEventListener('click', () => {
        el.classList.add('animate-chat-close');
        el.addEventListener('animationend', () => {
            if (el.parentNode) el.parentNode.removeChild(el);
            if (onClose) onClose();
        });
    });

    el.querySelector('.minimize-btn').addEventListener('click', () => {
        el.classList.add('animate-chat-close');
        el.addEventListener('animationend', () => {
            if (el.parentNode) el.parentNode.removeChild(el);
            if (onClose) onClose();
        });
    });

    return el;
}
