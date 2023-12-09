// BookShelf.js
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Book from './Book';

function BookShelf({ books, addBook }) {
  return (
    <div>
      <h2 className="mt-4">Bookshelf</h2>
      <Row>
        {books.map((book) => (
          <Col key={book.id} md={4} className="mb-4">
            <Book book={book} />
          </Col>
        ))}
      </Row>
      <Button onClick={() => addBook({ id: Date.now(), title: 'New Book', author: 'Unknown' })} variant="primary">
        Add New Book
      </Button>
    </div>
  );
}

export default BookShelf;
