import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainRouter from './main_router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
);

