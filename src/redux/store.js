import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger';
import RootReducer from './reducers'
// import userReducer from './reducers/userReducer';
// import todoReducer from './reducers/todoReducer';
// const initialState = {};

//const middleware = [thunk];

// const store = createStore(RootReducer, initialState, compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ))

// const store = createStore(RootReducer, applyMiddleware(logger))


const store = createStore(RootReducer, applyMiddleware(thunkMiddleware));

export default store;