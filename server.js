var express = require('express');
var app = express();

// New call to compress content
//app.use(express.compress());

app.use(express.static(__dirname + '/app'));

app.listen(3000);
