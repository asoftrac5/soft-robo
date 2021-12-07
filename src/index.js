import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons';
import { robots } from './robots';

ReactDOM.render(
  <React.StrictMode>
    {/* for git change */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
