import React, { Component } from 'react'
import { Route, NavLink, withRouter, matchPath } from 'react-router-dom'
import Stars from './SciFi'
import Ascii from './Ascii'
import Home from './Home'
import Posts from './Posts'
import Post from './Post'

import './App.css'


class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    this.fetchPosts()
  }

  // componentWillReceiveProps(nextProps) {
  //   const match = matchPath(nextProps.location.pathname, { path: '/post/:slug' })
  //   if (!match) return

  //   const { slug } = match.params

  //   const currentPost = this.state.posts.find(p => p.slug === slug)
  //   this.setState({ currentPost })
  // }

  async fetchPosts() {
    const response = await fetch('/api/posts/')
    const posts = await response.json()
    this.setState({ posts })
  }

  render() {
    const { posts, currentPost } = this.state

    return (
      <div className='App'>
        <div className='App-header'>
          <Ascii />
          <br/>
          <h2>The Invasion</h2>
          <nav>
            <NavLink exact to='/' activeClassName='is-active'>Home</NavLink>
            <NavLink to='/posts/' activeClassName='is-active'>Posts</NavLink>
          </nav>
        </div>
    
        <main>
          <Route exact path='/' component={Home} />
          <Route path='/post/:slug' render={({ match }) => {
            const { slug } = match.params
            const currentPost = this.state.posts.find(p => p.slug === slug)
            return <Post {...currentPost} slug={slug} />
          }} />
          <Route path='/posts/' render={() => (
            <Posts posts={posts} />
          )} />
        </main>
    
        <Stars />
      </div>
    )
  }
}
 

export default App
// export default withRouter(App) // HoC -- Higher Order Component

