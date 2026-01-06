import { MainContent } from './MainContent.js';
import { TopBar } from './TopBar.js';
import { Dock } from './Dock.js';
import { ProfilePage } from './ProfilePage.js';
import { SocialRail } from './SocialRail.js';

export function App() {
    const container = document.createElement('div');
    container.className = 'app-layout';

    // State
    let currentView = 'home';

    // Elements
    const topBar = TopBar({ onNavigate });
    const dock = Dock({ onNavigate });
    const socialRail = SocialRail();

    // Content Wrapper
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'content-wrapper';

    let pageContent = MainContent(); // Initially MainContent

    contentWrapper.appendChild(topBar);
    contentWrapper.appendChild(pageContent);

    container.appendChild(contentWrapper);
    container.appendChild(dock);
    container.appendChild(socialRail);

    function onNavigate(view) {
        if (currentView === view) return;
        currentView = view;

        // Update URL
        const newUrl = view === 'home' ? '/' : `/?view=${view}`;
        if (location.search !== `?view=${view}` && !(view === 'home' && location.search === '')) {
            history.pushState({ view }, '', newUrl);
        }

        // Swap Page Content
        contentWrapper.removeChild(pageContent);

        if (view === 'home') {
            pageContent = MainContent();
        } else if (view === 'profile') {
            pageContent = ProfilePage({ onBack: () => onNavigate('home') });
        }

        contentWrapper.appendChild(pageContent);
    }

    // Handle Browser Back/Forward
    window.onpopstate = (event) => {
        const view = event.state ? event.state.view : 'home';
        // Bypass pushState to strictly render
        if (currentView !== view) {
            currentView = view;
            contentWrapper.removeChild(pageContent);
            if (view === 'home') {
                pageContent = MainContent();
            } else if (view === 'profile') {
                pageContent = ProfilePage({ onBack: () => onNavigate('home') });
            }
            contentWrapper.appendChild(pageContent);
        }
    };

    // Initial Load Routing
    const params = new URLSearchParams(window.location.search);
    const initialView = params.get('view') || 'home';
    if (initialView !== 'home') {
        onNavigate(initialView);
    }

    return container;
}

