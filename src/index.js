import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, bindActionCreators } from 'redux';

let initialState = {
    likes: 0
}
let reducer = (prevState = initialState, action) => {
    switch (action.type) {
        default:
            return prevState
    }
};

let store = createStore(reducer);

console.log(store.getState())


ReactDOM.render(<Router><App /></Router>,
    document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
