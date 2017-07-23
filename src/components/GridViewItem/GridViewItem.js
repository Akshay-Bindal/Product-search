/**
 * Created by akshaybindal on 23/07/17.
 */

import React, { PropTypes, Component } from 'react';
import './GridViewItem.scss';
import _ from 'lodash';

export default class GridViewItem extends React.Component {

	numberWithCommas = (x) => {
		var parts = x.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	}

	render() {
		const {title, price, imgUrl, features, rating, emiPrice} = this.props
		return (
			<div className='gridViewItem'>
				<img className='gridViewImage' src={imgUrl} />
				<div className='gridViewFeatures'>
					<div className='title'>{title}</div>
					{
						features.length > 0 &&
						<ul>
							{
								_.map(features, (feature,id) => {
									return (
										<li key={id}>{feature}</li>
									)
								})
							}
						</ul>
					}
				</div>
				<div className='gridViewInfo'>
					<div className='price'>&#x20b9;{this.numberWithCommas(price)}</div>
					<div className='emiPrice'>EMI starting from &#x20b9;{this.numberWithCommas(emiPrice)}/month</div>
					<div className='rating'>
						<span className={(rating > 3 ? 'greenBG':'orangeBG')}>{rating} &#9733;</span>
					</div>
					<div className='addToCompare'>
						<input type='checkbox' value='compare' onChange={()=>{}} />
						<label>Add To Compare</label>
					</div>
				</div>
			</div>
		)
	}
}

GridViewItem.propTypes = {
	title: PropTypes.string,
	price: PropTypes.number,
	rating: PropTypes.number,
	emiPrice: PropTypes.number,
	features: PropTypes.array,
	imgUrl: PropTypes.string

};

GridViewItem.defaultProps = {
	title: '',
	price: 0,
	rating: 0,
	emiPrice: 0,
	features: [],
	imgUrl: ''
};
