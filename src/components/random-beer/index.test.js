import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RandomBeer from './';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});

test('Random Beer component should render', () => {
	const component = shallow(
		<Provider store={store}>
			<RandomBeer />
		</Provider>
	);
	const tree = toJson(component);

	expect(tree).toMatchSnapshot();
});
