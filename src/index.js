import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from 'react-redux'
import reducer from './reducers'
import { rootEpic } from './epics'
import {createEpicMiddleware} from 'redux-observable'

const epicMiddleware = createEpicMiddleware(rootEpic)


// https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(reducer, composeWithDevTools(applyMiddleware(epicMiddleware)));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
