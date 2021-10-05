import React from "react";

import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";

class Navbar extends React.Component {
	render() {
		return (
			<div class="navbar">
				<div class="logo">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
						alt="youtube-logo"
						class="youtube-logo"
					/>
				</div>
				<div class="search-bar">
					<SearchBar onSubmit={this.props.onSubmit} />
				</div>
				<div class="google-login">
					<a href="#" class="google btn">
						<i class="fa fa-google fa-fw"></i> 
                        Login with Google+
					</a>
				</div>
			</div>
		);
	}
}

export default Navbar;
