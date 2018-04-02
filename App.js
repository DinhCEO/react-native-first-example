import React from 'react';
import Router from './src/router';
import {Provider} from 'react-redux';
import store from './src/store';

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        )
    }
}

export default App;
