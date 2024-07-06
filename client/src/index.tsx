import { createRoot } from 'react-dom/client';

import App from './App';
import Providers from './Providers';

import './styles/global.css';

const rootElement = document.querySelector('#root') as Element;

const root = createRoot(rootElement);

root.render(
    <Providers>
        <App />
    </Providers>,
);
