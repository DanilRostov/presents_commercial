import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes';

class PageRouter extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          {routes.map((route, idx) => <Route 
            key={idx}
            exact={route.exact}
            path={route.path}
            render={route.render}
          />)}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default PageRouter;