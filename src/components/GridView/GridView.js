/**
 * Created by akshaybindal on 23/07/17.
 */


import React, { PropTypes, Component } from 'react';
import './GridView.scss';
import _ from 'lodash';
import GridViewItem from '../GridViewItem';

export default class GridView extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: props.items
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			items: nextProps.items
		})
	}

	render() {
		return (
			<div className='gridView'>
				{
					_.map(this.state.items, (item,idx) => {
						const {itemTitle,price, itemImage, features, rating,itemId,emiPrice} = item;
						return (
							<GridViewItem
								key={itemId}
								title={itemTitle}
								price={price}
								imgUrl={itemImage}
								features={features}
								rating={rating}
								emiPrice={emiPrice}
								index={idx}
							/>
						);
					})
				}
			</div>
		)
	}
}

GridView.propTypes = {
	items: PropTypes.array
};

GridView.defaultProps = {
	searchTerm: '',
};
