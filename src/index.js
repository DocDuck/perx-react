import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
// UI app wrapper
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
