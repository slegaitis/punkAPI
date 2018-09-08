import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// middleware
// thunk allows us to dispatch function directly so async calls can be made
const middleware = [ thunk ];

// If development mode push logger to middleware to get logging of redux actions
if (process.env.NODE_ENV === `development`) {
	const { logger } = require(`redux-logger`);

	middleware.push(logger);
}

// create store and pass in middleware
const reduxStore = createStore(rootReducer, {}, applyMiddleware(...middleware));

export default reduxStore;
