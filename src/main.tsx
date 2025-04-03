
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Check if we're running in the browser environment
const isBrowser = typeof window !== 'undefined';

// Only initialize React if we're not in static HTML mode
if (isBrowser && !window.location.pathname.endsWith('.html')) {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    createRoot(rootElement).render(<App />);
  }
}
