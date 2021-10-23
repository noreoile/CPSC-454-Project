import React from "react";

import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";
import YoutubeIcon from "../../assets/icons/YoutubeIcon.svg";

class Navbar extends React.Component {
	render() {
		return (
			<div class="navbar">
				<a href="/" class="logo">
					<img src={YoutubeIcon} alt="youtube-logo" class="youtube-logo" />
				</a>
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
