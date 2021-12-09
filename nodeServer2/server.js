const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname)));

http.createServer(app).listen(8004);