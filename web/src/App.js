import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Stars from './SciFi'
import Home from './Home'
import Books from './Books'
import Book from './Book'
import './App.css'


class App extends Component {
  state = {
    books: null,
    currentBook: null
  }

  initBooks = async e => {
    const response = await fetch('/books/')
    const books = await response.json()

    this.setState({books: books})
  }

  getCurrentBook = (book) => {
    this.setState({currentBook: book.bookTitle})
  }

  render() {
    const books = this.state.books
    return (
      <Router>
        <div className='App'>

          <div className='App-header'>
            <h2>Blitz!'s SciFi Blog From the Future</h2>

            <nav>
              <Link to='/'>Home</Link>
              <Link to='/books/'>Books</Link>
            </nav>
          </div>
          <main>
            <Route exact path='/' component={Home} />
            <Route path='/books/' render={() => <Books getBooks={this.initBooks} books={books} />}/>
            <Route path='/books/:bookTitle' render={({ match }) => <Book match={match} getCurrentBook={this.getCurrentBook} currentBook={this.state.currentBook} />}/>
          </main>

          <Stars />
        </div>
      </Router>
    )
  }
}

export default App;
