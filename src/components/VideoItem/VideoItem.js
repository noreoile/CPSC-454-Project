import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
	return (
		<div className="item video-item" onClick={() => onVideoSelect(video)}>
			<img 
				alt={video.snippet.thumbnails.medium.url} 
				className="ui image" 
				src={video.snippet.thumbnails.medium.url} 
			/>
			<div className="content">
				<div className="header">
					{video.snippet.title}
				</div>
			</div>
		</div>
	);
};

export default VideoItem;