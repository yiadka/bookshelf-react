import React from "react";
import { Card } from "react-bootstrap";

function Book({ book }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          <strong>Author:</strong> {book.author}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Book;