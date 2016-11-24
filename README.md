# React.js getting started part 2

In next 2 hours we are going to extend the example of react-getting-started part 1.
Adding a Table with favorites and add an detail view. With react-router and redux.


## checkout expample app

```
git clone https://github.com/tomsvogel/react-getting-started.git
```

## install redux
Redux provides an easy way to centralize the state of your application.

```
yarn add redux
yarn add react-redux
```

##create an reducer
The reducer handles the response from the actions and updates the state.
```
const initialState = {
    gifs: [],
    favs: []
};

export default function giphy(state = initialState, action) {
    switch (action.type) {

    case 'GIFS_FETCHED':
        return Object.assign({}, state, {
                    gifs: action.gifs
                });
    default:
        return state
  }
}

```


## configure the app

```
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {Provider} from 'react-redux';

import rootReducer from './reducer';

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunkMiddleware, createLogger())
)

<Provider store={store}>
   <App />
 </Provider>

```

Redux Thunk middleware allows you to write action creators that return a function instead of an action



## create actions
```
import fetch from 'isomorphic-fetch'

export function search(searchString, apiKey, maxResults) {

    return (dispatch) => {
        try {
            fetch('http://api.giphy.com/v1/gifs/search?api_key=' + apiKey +
                '&q=' + encodeURIComponent(searchString) + '&limit=' + maxResults)
                .then(function(response) {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                })
                .then(function(response) {
                    console.log(response);
                    dispatch({type: 'GIFS_FETCHED', gifs: response.data});
                }.bind(this));

        } catch (e) {
            console.log(e);
        }
    }
}
```

## add to favorites action

## create FavPage

## install react-router

## show favlist 

