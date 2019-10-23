import React from 'react';
import { render } from 'react-dom';

// redux
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import App from './App';


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
