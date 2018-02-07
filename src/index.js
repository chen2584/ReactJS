import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const chenReducer = (state={ name: "chen" }, action) => {
    switch(action.type) {
        case "setName":
            state = { name: action.payload }
            break;
        default:
    }
    return state;
}
  
const store = createStore(chenReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
//registerServiceWorker();