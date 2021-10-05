import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
	state = { term: '' };

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onSubmit(this.state.term);
	}

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<input
						type="text" 
						onChange={(e) => this.setState({term : e.target.value})}
						value={this.state.term}
					/>
				</form>
			</div>
		);
	}
}

export default SearchBar;