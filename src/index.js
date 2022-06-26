import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import getTheme from './Theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';

const container = document.getElementById('root');
const root = createRoot(container);
const theme = getTheme('dark');

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
        <ThemeProvider theme={theme}>
          <App tab="home" />
        </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
