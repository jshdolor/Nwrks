import React, { Component } from 'react';
import App from '../Components/Application';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../Store/reducers';


class Bootstrap extends Component {

    init() {
        console.log('initialized...');
    }

    render() {
        const store = createStore(rootReducer);
        
        return (
            <Provider store={store}>
                <App></App>
            </Provider>
        );
      }

}

export default Bootstrap;