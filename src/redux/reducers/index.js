import { combineReducers } from 'redux';
import beerReducer from './beer-reducer';

// combine reducers if we would have more then 1
export default combineReducers({
	beers: beerReducer
});
