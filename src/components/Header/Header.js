/**
 * Created by akshaybindal on 23/07/17.
 */

import React, { PropTypes, Component } from 'react';
import './header.scss';
import SearchBar from '../SearchBar';
import logo from '../../styles/Mezi_logowebsite-1.jpg';

export default class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}

	onSearchHandler = (str) => {
		this.props.onSearchHandler(str);
	}

	render() {
		return (
			<div className='headerContainer'>
				<div className='headerLogo'>
					<img src={logo} />
				</div>
				<SearchBar
					onSearchHandler={this.onSearchHandler}
				/>
				<div className='headerUserInfo'>
					Log in/Sign up
				</div>
			</div>
		)
	}
}

Header.propTypes = {
	onSearchHandler : PropTypes.func
};

Header.defaultProps = {
	onSearchHandler: () => {},
};
