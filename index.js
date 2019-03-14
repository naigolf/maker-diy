var express = require('express');
var app = express();

const books = require('./db')

const bodyParser = require('body-parser')

var port = process.env.PORT || 7777;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


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

//////////////////////////////////////////////////////////////
app.get('/books', (req, res) => {
  res.json(books)
})

app.get('/books/:id', (req, res) => {
  res.json(books.find(book => book.id === req.params.id))
})

app.post('/books', (req, res) => {
  books.push(req.body)
  res.status(201).json(req.body)
})


app.put('/books/:id', (req, res) => {
  const updateIndex = books.findIndex(book => book.id === req.params.id)
  res.json(Object.assign(books[updateIndex], req.body))
})

app.delete('/books/:id', (req, res) => {
   const deletedIndex = books.findIndex(book => book.id === req.params.id)
   books.splice(deletedIndex, 1)
   res.status(204).send()
})








//////////////////////////////////////////////////////////////
app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});


