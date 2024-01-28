import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './pages/Home';
import GlobalStyles from './styles'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles/>
        <Index/>
    </React.StrictMode>
);
