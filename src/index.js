import { MuiThemeProvider } from 'material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import SignUpContainer from './components/client/account/SignUpContainer';
import LoginContainer from './components/client/account/LoginContainer';
import { usePromiseTracker } from 'react-promise-tracker';
import { TailSpin } from 'react-loader-spinner';

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();

  return promiseInProgress &&
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(0,0,0,0.6)",
        position: "fixed",
        zIndex: "10002"
      }}
    >
      <TailSpin color="#33ccff" height={100} width={100} />
    </div>
}

const routing = (
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/signup' element={<SignUpContainer />} />
      <Route path='/login' element={<LoginContainer />} />
    </Routes>
  </Router>
);

ReactDOM.render(
  <>
    <LoadingIndicator />
    <MuiThemeProvider>
      {routing}
    </MuiThemeProvider>
  </>
  , document.getElementById('root')
);