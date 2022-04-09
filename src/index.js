import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './contexts/theme-context';

import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
