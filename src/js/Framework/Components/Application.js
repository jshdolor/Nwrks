import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ModuleRoutes from '../RouteList';
import {Container} from '../Plugins/BootstrapReact'

class Application extends Component {

    render() {
        return (
          <Router>
            <>
              <Container>
              {ModuleRoutes.map((route) => (
                <Route
                  exact
                  key={route.path}
                  path={route.path}
                  component={route.component}
                />
              ))}
              </Container>
            </>
          </Router>
        );
      }

}

export default Application;