import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function Linker(book) {
  return (
    <li key={book.title}>
      <Link to={`/books/${book.title}`}><strong>{book.title}</strong> from {book.author}</Link>
    </li>
  )
}

export default class Books extends Component {

  componentDidMount() {
    this.props.getBooks()
  }

  render() {
    if (!this.props.books) return null
    return <ul>{this.props.books.map(Linker)}</ul>
  }
}

//
//
