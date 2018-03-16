import React from 'react'
import Book from './Book'

function Books(props) {
  if (!props || !props.books) return null;
  return <ul>{props.books.map(Book)}</ul>;
}

export default Books;
