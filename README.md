# Hub - Social Platform Interface

A modern, glassmorphic social platform interface built with vanilla JavaScript, featuring Discord-like functionality with a clean and premium design aesthetic.

## 🎨 Features

### Core Components

- **Glassmorphism UI** - Beautiful glass-panel effects with backdrop blur
- **Dark/Light Theme Toggle** - Seamless theme switching with background image transitions
- **Responsive Layout** - Optimized for desktop and mobile devices
- **Smooth Animations** - Premium micro-interactions and transitions

### Main Features

#### 1. **Top Bar (HUD)**
- Real-time XP and Credits display
- Scrolling notification ticker
- Notification dropdown with unread indicators
- Profile quick access

#### 2. **Dock (Bottom Navigation)**
- macOS-style dock with hover animations
- Toggle visibility functionality
- Quick access to:
  - Home, Explore, Add Friend
  - Community shortcuts
  - Theme toggle, Settings, Help

#### 3. **Main Content Area**
- **Friends Tab**
  - View online/all friends
  - Search functionality
  - Friend request management
  - Message friends directly

- **Direct Messages Tab**
  - Conversation list with unread badges
  - Message request system
  - Quick access to conversations

#### 4. **Social Rail (Right Panel)**
- Collapsible friend list
- Online status indicators
- Quick chat windows
- Draggable & resizable chat interface

#### 5. **Profile Page**
- Customizable cover image
- XP progress tracking
- Credits and follower statistics
- Community contributions showcase
- Activity feed
- Edit profile functionality

#### 6. **Chat System**
- Floating chat windows
- Drag-to-move functionality
- Resizable interface
- Emoji picker integration
- Typing indicators

## 🏗️ Project Structure

```
prototype_1/
├── assets/
│   ├── bg_dark.png         # Dark theme background
│   └── bg_light.png        # Light theme background
├── css/
│   └── style.css           # Main stylesheet (3000+ lines)
├── js/
│   ├── components/
│   │   ├── App.js                  # Main application component
│   │   ├── ChatWindow.js           # Floating chat window
│   │   ├── DMsTab.js               # Direct messages interface
│   │   ├── Dock.js                 # Bottom navigation dock
│   │   ├── EditProfileModal.js     # Profile editing modal
│   │   ├── EmojiPicker.js          # Emoji selection UI
│   │   ├── FriendsTab.js           # Friends list interface
│   │   ├── MainContent.js          # Main content area
│   │   ├── MessagePanel.js         # Message conversation panel
│   │   ├── MessagesDrawer.js       # Messages sidebar drawer
│   │   ├── NotificationDropdown.js # Notification panel
│   │   ├── ProfilePage.js          # User profile view
│   │   ├── ProfilePanel.js         # Profile quick panel
│   │   ├── Sidebar.js              # Main sidebar navigation
│   │   ├── SocialRail.js           # Right panel friend list
│   │   └── TopBar.js               # Top HUD bar
│   └── main.js             # Application entry point
└── index.html              # Main HTML file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, but recommended)

### Installation

1. **Clone or download the repository**
   ```bash
   cd prototype_1
   ```

2. **Serve the files**
   
   Using Python:
   ```bash
   python -m http.server 8000
   ```
   
   Using Node.js (with `http-server`):
   ```bash
   npx http-server -p 8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 🎯 Usage

### Navigation
- **Dock**: Click the grip icon (bottom-left) to toggle the dock
- **Social Rail**: Click the users icon (top-right) to toggle the friend list
- **Profile**: Click your avatar/name in the top bar to view your profile
- **Theme**: Click the moon/sun icon in the dock to switch themes

### Messaging
- Click any friend in the Friends tab to open a chat
- Click friends in the Social Rail for floating chat windows
- Chat windows can be dragged and resized

### Profile Customization
- Navigate to your profile
- Click "Customize Profile" to edit your name and bio
- Changes are reflected immediately in the session

## 🎨 Design System

### Color Palette
- **Primary Accent**: `#ff9900` (Orange)
- **Secondary Accent**: `#ffad33` (Light Orange)
- **Background Dark**: `#0f0f13`
- **Background Secondary**: `#1a1a20`

### Glass Effect Variables
```css
--glass-bg: rgba(20, 20, 25, 0.6)
--glass-border: rgba(255, 255, 255, 0.08)
--glass-blur: 25px
```

### Typography
- **Font Family**: 'Outfit', sans-serif
- **Weights**: 300, 400, 500, 600, 700

## 🔧 Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with glassmorphism
- **Vanilla JavaScript** - ES6+ modules
- **Font Awesome 6.4.0** - Icon library
- **Google Fonts** - Outfit font family

### Key Features
- Component-based architecture
- Module imports/exports
- Event-driven interactions
- Client-side routing with History API
- Responsive design patterns
- CSS animations & transitions

### Browser Compatibility
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## 📱 Responsive Design

The interface adapts to different screen sizes:
- **Desktop**: Full layout with all panels
- **Tablet**: Optimized spacing and dock size
- **Mobile**: Adjusted HUD and navigation

## 🎓 Component Architecture

### App Component
- Manages global state and routing
- Handles view switching (Home ↔ Profile)
- Integrates TopBar, MainContent, Dock, and SocialRail

### Communication Pattern
- Parent → Child: Props/callbacks
- Events: Native DOM events
- State: Local component state (no framework)

## 🌟 Customization

### Adding Background Images
Place your images in `assets/` and update CSS:
```css
body {
    background-image: url('../assets/your-image.png');
}
```

### Modifying Theme Colors
Edit CSS variables in `:root` (style.css line 1-33)

### Adding New Components
1. Create new component file in `js/components/`
2. Export function following existing pattern
3. Import in parent component
4. Update styling in `style.css`

## 🐛 Known Issues
- Chat windows may overlap on small screens
- Emoji picker requires click-outside to close properly
- Some animations may lag on lower-end devices

## 🔮 Future Enhancements
- [ ] Backend integration for real messaging
- [ ] User authentication system
- [ ] Persistent data storage
- [ ] Voice/video call integration
- [ ] File sharing functionality
- [ ] Advanced search and filtering
- [ ] Community creation and management

## 📄 License
This project is a prototype/demonstration and is available for personal and educational use.

## 👤 Author
Created as a modern social platform UI prototype

---

**Note**: This is a front-end prototype with mock data. All user interactions and data are simulated and not persisted.
