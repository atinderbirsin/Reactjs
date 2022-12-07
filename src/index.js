// 1) import react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2) selecting the root div element
const el = document.getElementById('root');

// 3) telling react what to do with that div
const root = ReactDOM.createRoot(el);

// 4) telling react to render that component
root.render(<App type="text" />);
