import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './utility/style/global.scss'; // Import SCSS global

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}
