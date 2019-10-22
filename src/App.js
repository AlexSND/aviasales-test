import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

// components
import PageWrapper from './components/PageWrapper';
import Header from './components/Header';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Header />
      <PageWrapper />
    </div>
  </Provider>
);

export default App;
