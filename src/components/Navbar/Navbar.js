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
		});
	};

	render() {
		return (
			<div className="navbar">
				<a href="/" className="logo">
					<img src={YoutubeIcon} alt="youtube-logo" className="youtube-logo" />
				</a>
				<div className="search-bar">
					<SearchBar onSubmit={this.props.onSubmit} />
				</div>
				{this.state.user ? (
					<div className="login">
						<div className="google-login" onClick={signOut}>
							<a href="#" className="google btn">
								<i className="fa fa-google fa-fw"></i>
								Sign Out
							</a>
						</div>
						<div>Hello {this.state.user.displayName}</div>
					</div>
				) : (
					<div className="google-login" onClick={signInWithGoogle}>
						<a href="#" className="google btn">
							<i className="fa fa-google fa-fw"></i>
							Login with Google+
						</a>
					</div>
				)}
			</div>
		);
	}
}

export default Navbar;
