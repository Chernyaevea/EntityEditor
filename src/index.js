import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import reducers from '/reducers';


ReactDOM.render(
  <App />
, document.querySelector('.container'));
