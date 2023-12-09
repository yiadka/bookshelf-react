import React, { useState, useEffect } from "react";
import BookShelf from "./BookShelf";
import { Container, Row, Col, Button } from "react-bootstrap";
import Book from "./Book";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Hunger Games", author: "Suzanne Collins" },
    { id: 2, title: "Harry Potter", author: "J.K. Rowling" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
    { id: 5, title: "Twilight", author: "Stephenie Meyer" },
    { id: 6, title: "The Book Thief", author: "Markus Zusak" },
    { id: 7, title: "The Chronicles of Narnia", author: "C.S. Lewis" },
    { id: 8, title: "Animal Farm", author: "George Orwell" },
    { id: 9, title: "Gone with the Wind", author: "Margaret Mitchell" },
    { id: 10, title: "The Fault in Our Stars", author: "John Green" },
  ]);
  const [book, setBook] = useState("");


  


  return (
    <>
      <Container>
        <Row>
          <Col>
            {/* 真ん中に寄せる */}
            <h1 className="text-center">React Bookshelf</h1>
          </Col>
        </Row>
        <BookShelf books={books} addBook={books} />
      
      </Container>
    </>
  );
}

export default App;