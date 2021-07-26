import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const logo = process.env.PUBLIC_URL + '/assets/logo/logo.svg';

ReactDOM.render(
  <React.StrictMode>
      <img src={logo} alt={'logo'} className="logo"/>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
