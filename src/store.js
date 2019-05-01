import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';

/* eslint-disable no-undercore-dangle */
const composeEnhancers = typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

const configureStore = prevState =>(
    createStore(
        rootReducer,
        prevState,
        composeEnhancers(),
    )
);

const store = configureStore({});

export default store;