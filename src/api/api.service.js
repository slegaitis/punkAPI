import axios from 'axios';
import { API } from '../CONFIGS';

const Api = {
	GetRandomBeer: () => {
		return new Promise((resolve, reject) => {
			axios
				.get(API + 'beers/random')
				.then((res) => {
					resolve(res.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
	GetRandomNonAlcoholic: () => {
		return new Promise((resolve, reject) => {
			axios
				.get(API + 'beers?abv_lt=1')
				.then((res) => {
					resolve(res.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
	GetBeerList: (page, search_term) => {
		let term = search_term ? '&beer_name=' + search_term : '';

		return new Promise((resolve, reject) => {
			axios
				.get(API + 'beers?page=' + page + term)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
	GetBeerListByDescription: (page, search_term) => {
		let search_string = 'beers?page=' + page + '&food=' + search_term;

		return new Promise((resolve, reject) => {
			axios
				.get(API + search_string)
				.then((res) => {
					resolve(res.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
};

export default Api;
