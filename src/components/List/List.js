/**
 * Created by akshaybindal on 23/07/17.
 */

import React, { PropTypes, Component } from 'react';
import './List.scss';
import _ from 'lodash';
import GridViewItem from '../GridViewItem';

export default class List extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			list: props.list,
			selectedIdx: 0
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			list: nextProps.list
		})
	}

	clickHandler = (e,idx) => {
		this.setState({
			selectedIdx: idx
		})
		this.props.onChange(idx);
	}

	render() {
		return (
			<div className='list'>
				{
					this.props.title.length > 0 &&
						<div className='heading'>
							{this.props.title}
						</div>
				}
				{
					this.state.list.length > 0 &&
					<ul>
						{
							_.map(this.state.list, (list,idx) => {
								return (
									<li
										key={idx}
										className={(this.state.selectedIdx == idx) ? 'active' : ''}
										onClick={(e)=> this.clickHandler(e,idx)}
									>
										{list}
									</li>
								);
							})
						}
					</ul>
				}
			</div>
		)
	}
}

List.propTypes = {
	list: PropTypes.array,
	onChange: PropTypes.func,
	title: PropTypes.string
};

List.defaultProps = {
	list: [],
	title: '',
	onChange: ()=>{}
};
