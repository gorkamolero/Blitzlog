import React from 'react'

function Book(book) {
  return (
    <li key={book.title}>
      <strong>{book.title}</strong> from {book.author}
    </li>
  )
}

export default Book
