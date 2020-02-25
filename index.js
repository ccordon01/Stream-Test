const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname + '/stream-test/css')));
app.use(express.static(path.join(__dirname + '/stream-test/js')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/stream-test', function (req, res) {
    res.sendFile(path.join(__dirname, '/stream-test', '/index.html'));
});

app.get('/download', (req, res) => {
    res.download(path.join(__dirname, '/dummy.mpd'));
});

app.listen(8080);