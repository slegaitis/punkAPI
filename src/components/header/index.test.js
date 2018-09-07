import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './';

test('Header component should render', () => {
	const component = shallow(<Header />);
	const tree = toJson(component);

	expect(tree).toMatchSnapshot();
});
