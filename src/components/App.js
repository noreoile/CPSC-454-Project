import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Youtube from "../apis/youtube";
import VideoList from "./VideoList/VideoList";
import VideoDetail from "./VideoDetail/VideoDetail";
import Navbar from "./Navbar/Navbar";
import LeftSidebar from "./LeftSidebar/LeftSidebar";

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onTermSubmit("cutecat");
	}

	onTermSubmit = async (term) => {
		const responce = await Youtube.get("search", {
			params: {
				q: term,
			},
		});

		this.setState({
			videos: responce.data.items,
			selectedVideo: responce.data.items[1],
		});
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="">
				<Navbar onSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="three wide column">
							<LeftSidebar />
						</div>
						<div className="nine wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="four wide column">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
