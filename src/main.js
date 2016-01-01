'use strict';

var express = require('express');
var multer = require('multer');
var upload = multer({dest:'temp/'});

var app = express();

app.use('/', express.static('./'));

app.route('/').get(function(req, res) {
  res.sendFile(process.cwd() + '/src/index.html');
});

app.post('/api/fileanalyse', upload.single('thing'), function(req, res) {
  console.log(req.file);
});

app.listen(process.env.PORT || 8080, function() {
  console.log('listening');
});
