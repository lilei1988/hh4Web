import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/router';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import mock from "./mock";
mock();



ReactDOM.render(
  <Provider store={store}>
  <Router/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
