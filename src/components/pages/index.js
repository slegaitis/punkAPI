import React, { Component } from 'react';
import './index.css';
import { Provider } from 'react-redux';
import reduxStore from '../../redux/store';

// Components
import RandomBeer from '../random-beer';
import Search from '../search';

class Homepage extends Component {
	render() {
		return (
			<Provider store={reduxStore}>
				<div className="glofox-app">
					<RandomBeer />

					<Search />
				</div>
			</Provider>
		);
	}
}

export default Homepage;
