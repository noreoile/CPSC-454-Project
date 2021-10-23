const express = require('express');
const app = express();

const path = require('path');

const port = 80;


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
	req.sendfile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, (err) => {
	if (err) return console.log(err);
	console.log('Server running on port: ', port);
})
