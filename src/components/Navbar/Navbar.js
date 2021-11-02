import React from "react";

import SearchBar from "../SearchBar/SearchBar";
import firebase, {
	auth,
	signOut,
	signInWithGoogle,
} from "../../firebase/firebase.utils";
import "./Navbar.css";
import YoutubeIcon from "../../assets/icons/YoutubeIcon.svg";

class Navbar extends React.Component {
	state = { user: null };

	componentDidMount = () => {
		firebase.auth().onAuthStateChanged((user) => {
			this.setState({ user: user });
			console.log(user);
		});
	};

	render() {
		return (
			<div class="navbar">
				<a href="/" class="logo">
					<img src={YoutubeIcon} alt="youtube-logo" class="youtube-logo" />
				</a>
				<div class="search-bar">
					<SearchBar onSubmit={this.props.onSubmit} />
				</div>
				{this.state.user ? (
					<div class="login">
						<div class="google-login" onClick={signOut}>
							<a href="#" class="google btn">
								<i class="fa fa-google fa-fw"></i>
								Sign Out
							</a>
						</div>
						<div>Hello {this.state.user.displayName}</div>
					</div>
				) : (
					<div class="google-login" onClick={signInWithGoogle}>
						<a href="#" class="google btn">
							<i class="fa fa-google fa-fw"></i>
							Login with Google+
						</a>
					</div>
				)}
			</div>
		);
	}
}

export default Navbar;
