import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import getTheme from './Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = getTheme('light');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
