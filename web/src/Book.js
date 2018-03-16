import React from 'react'

// export default function Book(props) {
//   console.log(props)
//   return <h1>{props.match.params.bookTitle}</h1>
// }

export default class Book extends React.Component {
  componentDidMount() {
    const { match: { params } } = this.props
    this.props.getCurrentBook(params)
  }

  render() {
    if (!this.props || !this.props.currentBook) return null;
    return <h1>{this.props.currentBook}</h1>
  }
}


// <article key={book.title}>
//   <h1>{book.title}</h1>
//   <h2>By {book.author}</h2>
//   <p>{book.summary}</p>
// </article>
