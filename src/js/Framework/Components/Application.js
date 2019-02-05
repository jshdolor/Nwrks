import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import MemberList from './MemberList';

import ModuleRoutes from '../RouteList';

class Application extends Component {

    render() {
        return (
          <Router>
          <>
          {ModuleRoutes.map((route) => (
            <Route
              exact
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
          </>
          </Router>
        );
      }

}

export default Application;