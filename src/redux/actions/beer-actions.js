import { FETCH_RANDOM_BEER, ERROR, FETCH_BEER_LIST } from './types';
import Api from '../../api/api.service';

// retrieve random beer and dispatch an action to reducer with results
export const fetchRandomBeer = () => (dispatch) => {
	Api.GetRandomBeer()
		.then((beer) => {
			dispatch({ type: FETCH_RANDOM_BEER, payload: beer[0] });
		})
		.catch((err) => {
			dispatch({ type: ERROR, payload: 'Error while retrieving Random Beer' });
		});
};

// fetch non alcoholic random beer and dispatch to redux
export const fetchNonAlcoholicRandomBeer = () => (dispatch) => {
	Api.GetRandomNonAlcoholic()
		.then((beer) => {
			dispatch({ type: FETCH_RANDOM_BEER, payload: beer[0] });
		})
		.catch((err) => {
			dispatch({ type: ERROR, payload: 'Error while retrieving Random Non alcoholic Beer' });
		});
};

// fetch full list of beers
export const fetchBeerList = (page, search_term) => (dispatch) => {
	Api.GetBeerList(page, search_term)
		.then((res) => {
			dispatch({ type: FETCH_BEER_LIST, payload: { page: page, list: res } });
		})
		.catch((err) => {
			dispatch({ type: ERROR, payload: 'Error while retrieving Beer list' });
		});
};

// fetch full list of beers based on description and dispatch to redux
export const fetchBeerListByDescription = (page, search_term) => (dispatch) => {
	Api.GetBeerListByDescription(page, search_term)
		.then((res) => {
			dispatch({ type: FETCH_BEER_LIST, payload: { page: page, list: res } });
		})
		.catch((err) => {
			dispatch({ type: ERROR, payload: 'Error while retrieving Beer list by description' });
		});
};
