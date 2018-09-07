import React, {Component} from 'react';
import './index.css';
import {connect} from 'react-redux';
import {toast} from 'react-toastify';
import {fetchBeerList, fetchBeerListByDescription} from '../../redux/actions/beer-actions';

import ListItem from '../list-item';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search_term: null
        };

        this.paginationNextPage = this
            .paginationNextPage
            .bind(this);
        this.paginationPreviousPage = this
            .paginationPreviousPage
            .bind(this);
        this.performSearch = this
            .performSearch
            .bind(this);
    }

    componentWillMount() {
        this
            .props
            .fetchBeerList(1, null);
    }

    paginationNextPage() {
        this
            .props
            .fetchBeerList(this.props.pagination + 1, this.state.search_term);
    }

    paginationPreviousPage() {
        this
            .props
            .fetchBeerList(this.props.pagination - 1, this.state.search_term);
    }

    performSearch(e) {
        e.preventDefault();

        let search_term = document
            .getElementById('search_term')
            .value
            .replace(/ /g, '_');
        let filter = document
            .querySelector('input[name="search_by"]:checked')
            .value;

        if (search_term.length < 3) {
            toast.warn('Search term is too short');
            return;
        }
        if (filter === 'name') {
            this
                .props
                .fetchBeerList(1, search_term);
        } else {
            this
                .props
                .fetchBeerListByDescription(1, search_term);
        }
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
                            pattern="^[A-Za-z0-9 -]+$"/>
                        <input
                            type="radio"
                            name="search_by"
                            id="name"
                            value="name"
                            defaultChecked="true"/>
                        <label htmlFor="name">by name</label>
                        <input type="radio" name="search_by" id="description" value="description"/>
                        <label htmlFor="description">by description</label>
                        <button className="btn" type="submit">
                            Search
                        </button>
                    </form>
                </section>

                <section className="wrapper search-results">
                    <h3>Search Results:
                    </h3>
                    <ul>
                        {this.props.beerList && this
                            .props
                            .beerList
                            .map((item, index) => {
                                return <ListItem key={index} item={item}/>;
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

const mapStateToProps = (state) => ({beerList: state.beers.beerList, pagination: state.beers.pagination});

export default connect(mapStateToProps, {fetchBeerList, fetchBeerListByDescription})(Search);
