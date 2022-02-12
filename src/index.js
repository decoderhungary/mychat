import { MuiThemeProvider } from 'material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);