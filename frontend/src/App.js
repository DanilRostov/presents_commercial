import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import PageRouter from './PageRouter';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PageRouter />
      </Provider>
    );
  }
}

export default App;
