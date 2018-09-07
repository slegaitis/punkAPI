import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ListItem from './';

test('List Item component should render', () => {
	let item = {
		image_url: 'https://images.punkapi.com/v2/keg.png',
		name: 'Buzz',
		description:
			'BrewDog vs. Weihenstephan India Pale Weizen kicked off a new direction for our collaborations. We took a simple concept (by our standards) and teamed up with the oldest brewery in the world to brew a mash-up beer using the signature styles of both breweries. '
	};
	const component = shallow(<ListItem item={item} />);
	const tree = toJson(component);

	expect(tree).toMatchSnapshot();
});
