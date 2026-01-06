import { App } from './components/App.js';

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('app');
  const app = App();
  appContainer.appendChild(app);
});
