import React, { useState } from "react";
import BookShelf from "./BookShelf";
import { Container, Row, Col, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Hunger Games", author: "Suzanne Collins" },
    { id: 2, title: "Harry Potter and the Order of the Phoenix", author: "J.K. Rowling" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
    { id: 5, title: "Twilight", author: "Stephenie Meyer" },
  ]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <>
      <Container>
        <h1 className="mt-4">Books</h1>
        <BookShelf books={books} addBook={addBook} />
      </Container>
    </>
  );
}

export default App;