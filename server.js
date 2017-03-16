var express = require('express') //application creator
var app = express() // create to handle get and posts
var path = require('path')
var bodyParser = require('body-parser')
var session = require('express-session')
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')))
var session = require('express-session')

require('./server/config/routes.js')(app);

app.listen(8000, function(){
	console.log("In port 8000");
})