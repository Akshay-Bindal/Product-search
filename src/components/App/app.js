import React from 'react';
import '../../styles/index.scss';
import Header from '../Header';
import AppContainer from '../AppContainer';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			searchTerm:''
		};
	}

	handleSearch = (searchTerm) => {
		this.setState({
			searchTerm
		})
	}

	render() {
    return (
      <div>
				<Header
					onSearchHandler={this.handleSearch}
				/>
				{
					this.state.searchTerm.length > 0 &&
					<AppContainer
						searchTerm={this.state.searchTerm}
					/>
				}
      </div>
    )
  }
}
