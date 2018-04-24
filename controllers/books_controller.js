const express = require('express');
const BooksData = require('../data/books_data.js');
const booksData = new BooksData();

const booksRouter = new express.Router();

//INDEX
booksRouter.get('/', function (req, res) {
  const allBooks = booksData.all();
  res.json({books: allBooks});
});

// CREATE
booksRouter.post('/', function (req, res) {
  booksData.add(req.body.book);
  const allBooks = booksData.all();
  res.json({books: allBooks});
});

//SHOW
booksRouter.get('/:id', function (req, res) {
  const book = booksData.find(req.params.id);
  res.json({books: book});
});


// UPDATE
booksRouter.put('/:id', function (req, res) {
  booksData.update(req.params.id, req.body.book);
  const allBooks = booksData.all();
  res.json({books: allBooks});
});

//DESTROY
booksRouter.delete('/:id', function (req, res) {
  booksData.delete(req.params.id);
  const allBooks = booksData.all();
  res.json({books: allBooks});
});


module.exports = booksRouter;
