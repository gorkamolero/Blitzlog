import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Stars from './SciFi'
import Home from './Home'
import Books from './Books'
import Book from './Book'
import './App.css'

function BookButton({books, clicker}) {
  if(!books) return <button onClick={clicker}>Get books from API</button>
  return (null)
}


class App extends Component {
  state = { books: null }

  handleClick = async e => {
    const response = await fetch('books/')
    const books = await response.json()
    this.setState({
      books: books
    });
  };

  render() {
    return (
      <Router>
        <div className='App'>

          <div className='App-header'>
            <h2>Blitz!'s Blog From the Future</h2>
          </div>

          <Route exact path='/' component={Home} />
          <Route path='/books/' component={Books} />
          <Route path='/books/:bookTitle' component={Book} />

          <main>
            <BookButton books={this.state.books} clicker={this.handleClick} />
            <Books books={this.state.books} />
          </main>

          <Stars />
        </div>
      </Router>
    );
  }
}

export default App;
