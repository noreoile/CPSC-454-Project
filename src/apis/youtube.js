import axios from 'axios';

const KEY = 'AIzaSyBDp7DDOlpYlwb-JrroIti73csTBywTbUk';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: '5',
		key: KEY
	}
});