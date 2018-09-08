import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Search from './';

import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({
	beers: {
		randomBeer: null,
		beerList: [],
		pagination: 1
	}
});

test('Search component should render', () => {
	const component = shallow(<Search store={store} />).dive();

	const tree = toJson(component);

	expect(tree).toMatchSnapshot();
});
