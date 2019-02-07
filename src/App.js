import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDNudA5yq88pgZFCR2wUBBThuFsNq7o9Jk',
            authDomain: 'mango-a9832.firebaseapp.com',
            databaseURL: 'https://mango-a9832.firebaseio.com',
            projectId: 'mango-a9832',
            storageBucket: 'mango-a9832.appspot.com',
            messagingSenderId: '198518848084'
        };

        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;