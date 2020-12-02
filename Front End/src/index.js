import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './sign_up';
import './sign_up_page.css';
import Login from './login';
import './login_page.css';
import SoldierSelection from './soldier_selection';
import './soldier_selection.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <App/> */}
    <hr></hr>
    <SignUp />
    <hr></hr>
    <Login />
    <hr></hr>
    <SoldierSelection/>
    <hr></hr>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
