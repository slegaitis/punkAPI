import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { fetchRandomBeer, fetchNonAlcoholicRandomBeer } from '../../redux/actions/beer-actions';

class RandomBeer extends Component {
	componentDidMount() {
		this.props.fetchRandomBeer();
	}

	render() {
		return (
			// Only show beers if they are loaded
			this.props.beers && (
				<section className="featured-beer wrapper">
					<h3>{this.props.beers.name}</h3>
					<img src={this.props.beers.image_url} alt={this.props.beers.name} />
					<p>{this.props.beers.description}</p>
					<button
						className="btn blue"
						onClick={() => {
							this.props.fetchRandomBeer();
						}}
					>
						Another beer
					</button>
					<button
						className="btn green"
						onClick={() => {
							this.props.fetchNonAlcoholicRandomBeer();
						}}
					>
						Non-Alcoholic beer
					</button>
				</section>
			)
		);
	}
}

const mapStateToProps = (state) => ({
	beers: state.beers.randomBeer
});

export default connect(mapStateToProps, { fetchRandomBeer, fetchNonAlcoholicRandomBeer })(RandomBeer);
