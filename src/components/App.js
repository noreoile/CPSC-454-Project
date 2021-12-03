import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Youtube from "../apis/youtube";
import VideoList from "./VideoList/VideoList";
import VideoDetail from "./VideoDetail/VideoDetail";
import Navbar from "./Navbar/Navbar";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import firebase, { firestore, auth } from "../firebase/firebase.utils";

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onTermSubmit("dog");
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
		this.setDatabaseData(video);
	};

	setDatabaseData = async (video) => {
		firebase.auth().onAuthStateChanged(async (user) => {
			if (user) {
				const dataRef = await firestore
					.collection("history")
					.doc(user.uid)
					.get();
				let data = dataRef.data();

				if (data === undefined || data === null) {
					data = {
						videos: [],
					};
				}

				const ob = {
					title: video.snippet.title,
					description: video.snippet.description,
					thumbnail: video.snippet.thumbnails.medium.url,
				};

				data.videos?.push(ob);

				await firestore
					.collection("history")
					.doc(user.uid)
					.set(data)
					.then(() => {
						console.log("Document successfully written!");
					})
					.catch((error) => {
						console.error("Error writing document: ", error);
					});
			}
		});
	};

	render() {
		return (
			<div className="app">
				<Navbar onSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="three wide column">
							<LeftSidebar />
						</div>
						<div className="nine wide column">
							<VideoDetail video={this.state.selectedVideo}/>
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
