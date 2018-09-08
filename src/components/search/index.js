import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchBeerList, fetchBeerListByDescription } from '../../redux/actions/beer-actions';

import ListItem from '../list-item';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			search_term: null
		};

		this.paginationNextPage = this.paginationNextPage.bind(this);
		this.paginationPreviousPage = this.paginationPreviousPage.bind(this);
		this.performSearch = this.performSearch.bind(this);
	}

	componentWillMount() {
		this.props.fetchBeerList(1, null);
	}

	// Pagination go to next page
	paginationNextPage() {
		this.props.fetchBeerList(this.props.pagination + 1, this.state.search_term);
	}

	// Pagination go to previous page
	paginationPreviousPage() {
		this.props.fetchBeerList(this.props.pagination - 1, this.state.search_term);
	}

	// Perform search, if search term length is less then 3 pull all beers
	performSearch(e) {
		e.preventDefault();

		let filter = document.querySelector('input[name="search_by"]:checked').value;

		// set search term in state so it can be reused
		// Also when setting state, since it can be async pass rest of function logic to when state is set and executed to avoid bugs
		this.setState({ search_term: document.getElementById('search_term').value.replace(/ /g, '_') }, () => {
			if (this.state.search_term.length < 3) {
				toast.warn('Getting all beers');
				this.props.fetchBeerList(1, null);
				return;
			}

			if (filter === 'name') {
				this.props.fetchBeerList(1, this.state.search_term);
			} else {
				this.props.fetchBeerListByDescription(1, this.state.search_term);
			}
		});
	}

	render() {
		return (
			<React.Fragment>
				<section className="search">
					<h2>Search for beer</h2>
					<form onSubmit={this.performSearch}>
						{/* Pattern can either be done in html or javascript "This must only contain letters, numbers, hyphens and spaces" */}
						<input
							type="text"
							id="search_term"
							placeholder="Enter a name or a phrase"
							pattern="^[A-Za-z0-9 -]+$"
						/>
						<input type="radio" name="search_by" id="name" value="name" defaultChecked="true" />
						<label htmlFor="name">by name</label>
						<input type="radio" name="search_by" id="description" value="description" />
						<label htmlFor="description">by description</label>
						<button className="btn" type="submit">
							Search
						</button>
					</form>
				</section>

				<section className="wrapper search-results">
					<h3>Search Results:</h3>
					<ul>
						{this.props.beerList &&
							this.props.beerList.map((item, index) => {
								return <ListItem key={index} item={item} />;
							})}
					</ul>
				</section>

				<ul className="pagination">
					{this.props.pagination !== 1 && (
						<li>
							<button className="btn red" onClick={this.paginationPreviousPage}>
								Previous
							</button>
						</li>
					)}
					{this.props.beerList.length === 25 && (
						<li>
							<button className="btn green" onClick={this.paginationNextPage}>
								Next
							</button>
						</li>
					)}
				</ul>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({ beerList: state.beers.beerList, pagination: state.beers.pagination });

export default connect(mapStateToProps, { fetchBeerList, fetchBeerListByDescription })(Search);
