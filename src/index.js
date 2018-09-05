import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
// import App from './components/App';
import Router from './components/Router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();