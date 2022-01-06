const express = require('express');
const app = express();
const os = require('os');

const path = require('path');

const port = 80;


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
	req.sendfile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/currentServer', (req, res) => {
	res.send(os.hostname());
});


app.listen(port, (err) => {
	if (err) return console.log(err);
	console.log('Server running on port: ', port);
})

