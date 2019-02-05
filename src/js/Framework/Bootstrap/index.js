import React, { Component } from 'react';
import App from '../Components/Application';

class Bootstrap extends Component {

    init() {
        console.log('initialized...');
    }

    render() {
        return (
          <App></App>
        );
      }

}

export default Bootstrap;