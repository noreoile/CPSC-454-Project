import React from "react";
import axios from "axios";

import "./VideoDetail.css";

class VideoDetail extends React.Component {
	state = { comments: null };

	fetchComments = async () => {
		const KEY = "AIzaSyBYCWAAn3jIpVM6B-11KrEERxV7n3VoUtE";

		const apiRef = await axios.get(
			"https://www.googleapis.com/youtube/v3/commentThreads",
			{
				params: {
					textFormat: "plainText",
					part: "snippet",
					videoId: this.props.video?.id.videoId,
					maxResults: "15",
					key: KEY,
				},
			}
		);

		const comments = apiRef.data.items?.map((comment) => {
			return (
				<div className="ui comments">
					<div className="comment">
						<a className="avatar">
							<img
								src={
									comment.snippet.topLevelComment.snippet.authorProfileImageUrl
								}
							/>
						</a>
						<div className="content">
							<a className="author">
								{comment.snippet.topLevelComment.snippet.authorDisplayName}
							</a>
							<div className="metadata">
								<span className="date">
									{comment.snippet.topLevelComment.snippet.publishedAt}
								</span>
							</div>
							<div className="text">
								{comment.snippet.topLevelComment.snippet.textDisplay}
							</div>
							<div className="actions">
								<a className="reply">Reply</a>
							</div>
						</div>
					</div>
				</div>
			);
		});

		this.setState({ comments: comments });
	};

	componentDidMount() {
		this.fetchComments();
	}

	componentDidUpdate(prevProps) {
		if (prevProps != this.props) {
			this.fetchComments();
		}
	}

	render() {
		if (!this.props.video) {
			return <div>Loading</div>;
		}

		const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;

		return (
			<div className="video-detail">
				<div className="ui embed">
					<iframe title="video clip" src={videoSrc} />
				</div>
				<div className="ui segment">
					<h4 className="ui header">{this.props.video.snippet.title}</h4>
					<p>{this.props.video.snippet.description}</p>
				</div>
				<div className="ui comments">
					<h2 class="ui dividing header">Comments</h2>
					{this.state.comments}
				</div>
			</div>
		);
	}
}

export default VideoDetail;
