import React from 'react';
import './index.css';
import { Provider } from 'react-redux';
import reduxStore from '../../redux/store';

// Components
import RandomBeer from '../random-beer';
import Search from '../search';

const Homepage = () => {
	return (
		<Provider store={reduxStore}>
			<div className="glofox-app">
				<RandomBeer />

				<Search />
			</div>
		</Provider>
	);
};

export default Homepage;
