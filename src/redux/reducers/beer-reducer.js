import { FETCH_RANDOM_BEER, FETCH_BEER_LIST, ERROR } from '../actions/types';
import { toast } from 'react-toastify';

const initialState = {
	randomBeer: null,
	beerList: [],
	pagination: 1
};

export default function(state = initialState, action) {
	// perform something based on action type
	switch (action.type) {
		case FETCH_RANDOM_BEER:
			if (action.payload.length < 1) {
				toast.error('Unfortunately nothing was matching your criteria.');
			}
			return {
				...state,
				randomBeer: action.payload
			};
		case FETCH_BEER_LIST:
			if (action.payload.list.length < 1) {
				toast.warn('Unfortunately no beers matched your criteria');
			}
			return {
				...state,
				pagination: action.payload.page,
				beerList: action.payload.list
			};
		case ERROR:
			toast.error(action.payload);
			return {
				...state
			};
		default:
			console.warn('Default Action Type fired in Beer Reducer');
			return state;
	}
}
