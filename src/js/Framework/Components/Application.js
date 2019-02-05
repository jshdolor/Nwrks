import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import MemberList from './MemberList';



class Application extends Component {

    render() {
        return (
          <Router>
          <MemberList></MemberList>
          </Router>
        );
      }

}

export default Application;