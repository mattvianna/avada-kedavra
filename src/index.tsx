import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import './styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
