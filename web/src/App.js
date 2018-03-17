import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Stars from './SciFi'
import Ascii from './Ascii'
import Home from './Home'
import Posts from './Posts'
import Post from './Post'

import './App.css'


class App extends Component {
  state = {
    posts: null,
    currentPost: null
  }

  initPosts = async e => {
    const response = await fetch('/api/posts/')
    const posts = await response.json()

    this.setState({posts: posts})
  }

  initPost = async ({slug}) => {
    const response = await fetch(`/api/posts/${slug}`)
    console.log(response)
    const post = await response.json()
    this.setState({currentPost: post})
    //
    // const post = await response.json()
    // console.log(response)

  }

  render() {
    const {posts, currentPost} = this.state

    return (
      <Router>
        <div className='App'>

          <div className='App-header'>
            <Ascii />
            <br/>
            <h2>The Invasion</h2>
            <nav>
              <NavLink exact to='/' activeClassName='is-active'>Home</NavLink>
              <NavLink to='/journal/' activeClassName='is-active'>Journal</NavLink>
            </nav>
          </div>
          <main>
            <Route exact path='/' component={Home} />
            <Route path='/journal/:slug' render={({match}) =>
              <Post getThePost={this.initPost} post={currentPost} match={match} />
            }/>
            <Route path='/journal/' render={() =>
              <Posts getPosts={this.initPosts} posts={posts} />
            }/>
          </main>

          <Stars />
        </div>
      </Router>
    )
  }
}

export default App
