import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.onload = () => {
  const theme = window.localStorage.getItem('theme');
  if (theme) {
    if (theme === 'light') {
      document.body.className = 'light-theme';
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
