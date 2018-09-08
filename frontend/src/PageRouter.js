import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import GiftsPage from './components/GiftsPage';

class PageRouter extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => <HomePage/>}
          />
          <Route
            exact
            path="/toys"
            render={(props) => <GiftsPage
              page={'toys'}
            />}
          />
          <Route
            exact
            path="/bags"
            render={(props) => <GiftsPage
              page={'bags'}
            />}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default PageRouter;