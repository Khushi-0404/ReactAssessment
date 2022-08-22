import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './22 Aug Assessment/App'
import store from './store';
import {fetchMovies} from'./userSliceCustomer'
import { fetchMoviesAdmin } from './userSliceAdmin';
store.dispatch(fetchMovies())

store.dispatch(fetchMoviesAdmin())

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
    <App />
    </Provider>
);


