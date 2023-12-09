// BookShelf.js
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Book from './Book';

function BookShelf({ books, addBook }) {
  return (
    <div>
      <Row>
        {books.map((book) => (
          <Col key={book.id} md={4} className="mb-4">
            <Book book={book} />
          </Col>
        ))}
      </Row>

      <Card>
      <Button onClick={() => addBook({ id: Date.now(), title: 'New Book', author: 'Unknown' })} variant="primary">
        Add New Book
      </Button>
      </Card>

      <Card>
      {/* booksの数を表示*/}
      <p className='mt-3'>Number of books: {books.length}</p>
      </Card>
    </div>
  );
}

export default BookShelf;
