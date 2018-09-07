import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Search from './';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});

test('Search component should render', () => {
	const component = shallow(
		<Provider store={store}>
			<Search />
		</Provider>
	);
	const tree = toJson(component);

	expect(tree).toMatchSnapshot();
});
