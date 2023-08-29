import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import {ThemeProvider} from './ThemeContext'
console.log('React',React);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider value={{ store }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
)
reportWebVitals();
