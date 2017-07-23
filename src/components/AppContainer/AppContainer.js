/**
 * Created by akshaybindal on 23/07/17.
 */

import React, { PropTypes, Component } from 'react';
import './AppContainer.scss';
import GridView from '../GridView';
import List from '../List';

export default class AppContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			searchTerm: props.searchTerm,
			products:[]
		};
	}

	componentDidMount() {
		if(this.state.searchTerm) {
			this.setState({
				products: this.getFilteredProducts(this.state.searchTerm)
			})
		}
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.searchTerm !== nextProps.searchTerm) {
			this.setState({
				products: this.getFilteredProducts(nextProps.searchTerm),
				searchTerm: nextProps.searchTerm
			})
		}
	}

	filterBySorting = (idx) => {
		let products = this.state.products;
		switch(idx){
			case 0:
				products = products.sort((a,b)=>{
					return a.itemId - b.itemId;
				});
				break;
			case 1:
				products = products.sort((a,b)=>{
					return b.rating - a.rating;
				});
				break;
			case 2:
				products = products.sort((a,b)=>{
					return b.price - a.price;
				});
				break;
			case 3:
				products = products.sort((a,b)=>{
					return a.price - b.price;
				});
				break;
			case 4:
				products = products.sort((a,b)=>{
					return a.emiPrice - b.emiPrice;
				});
				break;
		}
		this.setState({
			products
		})
	}

	getFilteredProducts = (searchQuery) => {
		const products = {
			products : [
				{
					itemId:1,
					itemTitle: 'Sony Cyber-shot DSC-W830/BC Point & Shoot Camera(Black)',
					rating: 1.5,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/cam1.png'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:2,
					itemTitle: 'Sony Cyber-shot DSC-W830/BC Point & Shoot Camera(Black)',
					rating: 4,
					price: 7000,
					emiPrice: 352,
					itemImage: require('../../image/cam2.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:3,
					itemTitle: 'Sony Cyber-shot DSC-W830/BC Point & Shoot Camera(Black)',
					rating: 2,
					price: 6800,
					emiPrice: 352,
					itemImage: require('../../image/cam3.png'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:4,
					itemTitle: 'Sony Cyber-shot DSC-W830/BC Point & Shoot Camera(Black)',
					rating: 1.5,
					price: 9000,
					emiPrice: 352,
					itemImage: require('../../image/cam4.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:5,
					itemTitle: 'Sony Cyber-shot DSC-W830/BC Point & Shoot Camera(Black)',
					rating: 4.5,
					price: 8500,
					emiPrice: 352,
					itemImage: require('../../image/cam5.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:6,
					itemTitle: 'Sony Cyber-shot DSC-W830/BC Point & Shoot Camera(Black)',
					rating: 2.5,
					price: 6000,
					emiPrice: 352,
					itemImage: require('../../image/cam6.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:7,
					itemTitle: 'Sony Cyber-shot DSC-W830/BC Point & Shoot Camera(Black)',
					rating: 3.5,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/cam1.png'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:8,
					itemTitle: 'Sony Cyber-shot DSC-W830/BC Point & Shoot Camera(Black)',
					rating: 3,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/cam7.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:9,
					itemTitle: 'Rosra sz0260 Analog Watch  - For Couple',
					rating: 5,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/watch1.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:10,
					itemTitle: 'Timex MF13 Expedition Analog-Digital Watch - For Men, Women',
					rating: 2.5,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/watch2.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:11,
					itemTitle: 'Timex TW002E101 Watch - For Men and Woman',
					rating: 3,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/watch3.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:12,
					itemTitle: 'Timex MF13 Expedition Analog-Digital Watch - For Men, Women',
					rating: 4.5,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/watch4.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:13,
					itemTitle: 'Timex TW002E101 Watch - For Men and woman',
					rating: 2,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/watch5.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:14,
					itemTitle: 'Timex MF13 Expedition Analog-Digital Watch - For Men',
					rating: 1,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/watch6.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:15,
					itemTitle: 'Timex TW002E101 Watch - For Men and woman',
					rating: 3,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/watch7.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:16,
					itemTitle: 'Timex MF13 Expedition Analog-Digital Watch - For Men',
					rating: 2,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/watch5.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:17,
					itemTitle: 'Timex MF13 Expedition Analog-Digital Watch - For Men, Women',
					rating: 1,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/watch6.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:18,
					itemTitle: 'imex TW002E101 Watch - For Men and woman',
					rating: 3,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/watch7.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:19,
					itemTitle: 'Timex MF13 Expedition Analog-Digital Watch - For Men, Women',
					rating: 2,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/watch8.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:20,
					itemTitle: 'Aaishwarya 18K Platinum Plated Dazzling Alloy Zircon Ring',
					rating: 1,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/ring1.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:33,
					itemTitle: 'Jewels Galaxy Alloy Ring',
					rating: 3,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/ring2.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:34,
					itemTitle: 'Aaishwarya 18K Platinum Plated Dazzling Alloy Zircon Ring',
					rating: 2,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/ring3.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:35,
					itemTitle: 'Jewels Galaxy Alloy Ring',
					rating: 1,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/ring4.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:21,
					itemTitle: 'Aaishwarya 18K Platinum Plated Dazzling Alloy Zircon Ring',
					rating: 3,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/ring5.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:22,
					itemTitle: 'Jewels Galaxy Alloy Ring',
					rating: 2,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/ring6.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:23,
					itemTitle: 'Bento Pvp Game 2 GB',
					rating: 1,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/game1.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:24,
					itemTitle: 'Navyamall TV Video Game PVP 2016 1 GB with Mario(Multicolor)',
					rating: 3,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/game2.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:25,
					itemTitle: 'Ptc Mart mega drive 2 na GB with 350 inbuilt Games(Black)',
					rating: 1,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/game3.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:26,
					itemTitle: 'Macca PSP VITA Games 4 GB with 10000(Black, Blue, White)',
					rating: 3,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/game4.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:27,
					itemTitle: 'Dream Deals Game Player With Casatte',
					rating: 1,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/game5.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:28,
					itemTitle: 'Macca PSP VITA Games 4 GB with 10000(Black, Blue, White)',
					rating: 3,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/game6.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:29,
					itemTitle: 'Bs Spy Original White Preloaded Games Psp 2 GB with Contra',
					rating: 1,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/game7.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:30,
					itemTitle: 'GAME ON PSP T880 64 bit Touch Screen 4 GB with 300 Inbuilt Games',
					rating: 3,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/game8.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:31,
					itemTitle: 'GAME ON PSP T880 64 bit Touch Screen 4 GB',
					rating: 1,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/game9.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				},
				{
					itemId:32,
					itemTitle: 'Macca PSP VITA Games 4 GB with 10000(Black, Blue, White)',
					rating: 3,
					price: 7250,
					emiPrice: 352,
					itemImage: require('../../image/game1.jpg'),
					features: ['20.1 MP','Sensor type CCD','LCD size 2.7','Lithium Battery']
				}
			]
		}

		const finalKeyName = 'itemTitle';
		const escapedStr = _.escapeRegExp(searchQuery);
		const regex = new RegExp(escapedStr, 'i');
		const searchItems1 = [];
		const searchItems2 = [];
		const searchItems3 = [];
		_.forEach(products.products, (item) => {
			let finalItem = item[finalKeyName];

			if (regex.test(finalItem.substring(0, searchQuery.length))) {
				searchItems1.push(item);
			} else if (regex.test(finalItem.substring(searchQuery.length))) {
				searchItems2.push(item);
			} else if (finalItem.indexOf(searchQuery) > -1) {
				searchItems3.push(item);
			}
		});
		return [...searchItems1, ...searchItems2, ...searchItems3];
	}

	render() {

		const html = (
			<div className='appContainer'>
				{
					this.state.products.length > 0 &&
					<div>
						<div className='filters'>
							<div className='info'>
								Showing {this.state.products.length} products
							</div>
							{/*<Filters/>*/}
						</div>
						<List
							title={'Sort By'}
							list={['Relevance','Rating', 'High to Low Price', 'Low to High Price','EMI']}
							onChange={this.filterBySorting}
							/>
						<div className='products'>
							<GridView
								items={this.state.products}
								/>
						</div>
					</div>
				}
				{
					this.state.products.length == 0 &&
						<div className='noProduct'>
							No Products Found for {this.state.searchTerm}
						</div>
				}

			</div>
		)

		return html;
	}
}

AppContainer.propTypes = {
	searchTerm: PropTypes.string
};

AppContainer.defaultProps = {
	searchTerm: '',
};
