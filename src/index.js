import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { devToolsEnhancer } from 'redux-devtools-extension';

import {Provider} from 'react-redux'
import reducer from './reducers'


// https://github.com/zalmoxisus/redux-devtools-extension
// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));

const store = createStore(reducer, devToolsEnhancer());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
