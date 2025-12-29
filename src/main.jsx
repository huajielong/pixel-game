import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// pixel.css is imported in App.jsx or here. Let's rely on App.jsx.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
