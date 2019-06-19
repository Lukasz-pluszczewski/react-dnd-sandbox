import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/index.scss';
import App from './components/App/App';

if (process.env.REACT_APP_ENV !== 'production' && process.env.REACT_APP_WHYUPDATE === 'true') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
