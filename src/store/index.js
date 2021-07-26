//menghubungkan store dgn devtools

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

const middleWare = [thunk];

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middleWare)));

//off redux devtools
// const middleware = [thunk];

// const store = createStore(rootReducers, process.env.NODE_ENV === 'production' ? applyMiddleware(...middleware) : composeWithDevTools(applyMiddleware(...middleware)));

export default store;
