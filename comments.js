//Create web server and listen on port 3000
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
server.listen(3000);
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var url = 'mongodb://localhost:27017/comments';
var db = mongoose.connect(url);