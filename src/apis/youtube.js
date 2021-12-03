import axios from 'axios';

const KEY = 'AIzaSyBYCWAAn3jIpVM6B-11KrEERxV7n3VoUtE';

// AIzaSyBYCWAAn3jIpVM6B-11KrEERxV7n3VoUtE
// AIzaSyBIQcg70chExnBvymYkcezm83-mMhqJmyA

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: '10',
		key: KEY
	}
});
