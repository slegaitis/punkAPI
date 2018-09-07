import React from 'react';
import './index.css';

const ListItem = (props) => {
	return (
		<li className="list-item">
			<img src={props.item.image_url} alt={props.item.name} />
			<div className="description">
				<h4>{props.item.name}</h4>
				<p>{props.item.description.substring(0, 100)}...</p>
			</div>
		</li>
	);
};

export default ListItem;
