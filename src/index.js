import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main';
import GlobalFonts from './Styles/GlobalFonts'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalFonts/>
    <Main />
  </React.StrictMode>
);