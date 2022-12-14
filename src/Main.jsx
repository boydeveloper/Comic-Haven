import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './core/App';
import './index.css';
import { ContextApp } from './context/AppContex';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApp>
      <App />
    </ContextApp>
  </React.StrictMode>
);
