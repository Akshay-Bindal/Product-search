/**
 * Created by akshaybindal on 23/07/17.
 */


import React, { Component } from 'react';
import './SearchBar.scss';
import InputBox from '../InputBox';
import searchIcon from '../../styles/search.png';

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			recentSearches: [],
			searchTerm:''
		};
	}

	componentDidMount() {
		this.setState({ recentSearches: // eslint-disable-line react/no-did-mount-set-state
			localStorage.recentSearches ?
				JSON.parse(localStorage.recentSearches) : [] });
	}

	setRecentSearches(query) {
		/* Maximum 3 queries can be saved */

		const recentSearches =
			localStorage.recentSearches ?
				JSON.parse(localStorage.recentSearches) : [];

		/* If query is already present in recentSearches remove it */

		if (recentSearches.includes(query)) {
			recentSearches.splice(recentSearches.indexOf(query), 1);
		}

		/* If query is not present in recentSearches
		 and recentSearches length is >= 3 then remove the last element */
		if (recentSearches.length >= 3 && recentSearches.indexOf(query) === -1) {
			recentSearches.splice(2, 1);
		}
		recentSearches.unshift(query);

		/* Save recentSearches in state also, so that it can reflect back in UI */

		this.setState({ recentSearches });
		localStorage.recentSearches = JSON.stringify(recentSearches);
	}

	removeRecentSearches() {
		localStorage.recentSearches = [];
		this.setState({ recentSearches: [] });
	}

	handleChange = (event) => {
		const searchString = event.target.value;
		this.setState({
			searchTerm: searchString
		})
	}

	handleKeyDown = (e) => {
		const searchString = e.target.value;
		if (e.keyCode === 13 && searchString.trim() !== '') {
			this.setRecentSearches(searchString);
			this.props.onSearchHandler(searchString);
		}
	}

	render() {

		return (
			<div className='searchBar'>
				<img className='search' src={searchIcon}></img>
				<InputBox
					autoComplete={"off"}
					type={"search"}
					placeholderString={"Search for a Product , Brand or Category"}
					onFocusHandler={() => {}}
					onBlurHandler={() => {}}
					onKeyDownHandler={this.handleKeyDown}
					onChangeHandler={this.handleChange}
					value={this.state.searchTerm}
					maxLength={'55'}
				/>

				{
					/*this.state.recentSearches.length > 0 && (
						<div className='searchDropdown'>
							{
									<ul>
										<div className='heading'>Recent Searches</div>
										{
											this.state.recentSearches.map((data, index) => {
												return (
													<li
														key={index}
														onMouseDown={() => {
                                                      this.setRecentSearches(data);
                                                  }}
														>
														{data}
													</li>
												);
											})
										}
									</ul>
							}
							{
								this.state.recentSearches.length > 0 &&
								this.props.searchContent && !this.props.searchContent.qs &&
								(<ul>
									<li>
										<div
											onMouseDown={() =>
					                        this.removeRecentSearches()}
											>
											Remove Search History
										</div>
									</li>
								</ul>)
							}
						</div>
					)*/
				}
			</div>
		);
	}
}

SearchBar.propTypes = {
	onSearchHandler: React.PropTypes.func
};

export default SearchBar;
