import React, {Component} from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import logo from './logo.svg';

import './App.css';
import Giphy from './Giphy';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='App-header'>
                    <img src={logo} className='App-logo' alt='logo'/>
                    <h2>Welcome to React</h2>
                </div>
                <Giphy maxResults={10} apiKey={'dc6zaTOxFJmzC'}/>
            </div>
        );
    }
}

export default App;
