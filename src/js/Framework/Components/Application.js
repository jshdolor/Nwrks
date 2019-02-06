import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ModuleRoutes from '../RouteList';
import {Container} from '../Plugins/BootstrapReact'

import { connect } from 'react-redux';

import ConfirmModal from './Widgets/ConfirmModal';

class Application extends Component {

    render() {
        return (
          <>
          <ConfirmModal />
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
          </>
        );
      }

}

const mapStateToProps = function(state){
  return state.confirmModal;
}

export default connect(mapStateToProps)(Application);