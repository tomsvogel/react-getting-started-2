import React from 'react';
import ReactDOM from 'react-dom';
import Giphy from './Giphy';
import './index.css';

import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {Provider} from 'react-redux';

import rootReducer from './reducer';

import {Router, Route, hashHistory} from 'react-router';

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunkMiddleware, createLogger())
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={ hashHistory }>
            <Route path='/' component={ Giphy}/>
            <Route path="favs" component={ Giphy }/>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);
