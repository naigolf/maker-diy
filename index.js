var express = require('express');
var app = express();

var port = process.env.PORT || 7777;

app.get('/', function (req, res) {
    res.send('maker-diy');
});



app.get('/:key/:ch/:value', function (req, res) {
    var key = req.params.key;
    var ch = req.params.ch;
   var value = req.params.value;

var msg = {"channel":ch,"value":value}
    res.send(msg);
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});


