import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import tagsListReducer from './features/tagsList';
import countersReducer from './features/counters';

const store = configureStore({
    reducer: {
        tagsList: tagsListReducer,
        counters: countersReducer,
    }
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


