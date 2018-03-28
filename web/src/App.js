import React, { Component } from 'react'
import { Route, NavLink, withRouter, matchPath } from 'react-router-dom'
// import { Route, NavLink } from 'react-router-dom'
import Stars from './SciFi'
import Ascii from './Ascii'
import Home from './Home'
import Users from './Users'
import Posts from './Posts'
import Post from './Post'

import './App.css'


class App extends Component {
  state = {
    posts: [],
    users: []
  }

  componentDidMount() {
    this.fetchPosts()
    this.fetchUsers()
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

  async fetchUsers() {
    const response = await fetch('/api/users')
    const users = await response.json()
    this.setState({ users })
  }

  render() {
    const { posts, users, currentPost } = this.state

    return (
      <div className='App'>
        <div className='App-header'>
          <Ascii />
          <br/>
          <h2>The Invasion</h2>
          <nav>
            <NavLink exact to='/' activeClassName='is-active'>Home</NavLink>
            <NavLink to='/posts/' activeClassName='is-active'>Posts</NavLink>
            <NavLink to='/users/' activeClassName='is-active'>Users</NavLink>
          </nav>
        </div>

        <main>
          <Route exact path='/' component={Home} />
          <Route path='/post/:slug' render={({ match }) => {
            const { slug } = match.params
            const currentPost = this.state.posts.find(p => p.slug === slug)
            return <Post {...currentPost} slug={slug} />
          }} />
          <Route path='/posts/' render={({ match }) => (
            <Posts posts={posts} match={match} />
          )} />
          <Route path='/users/' component={Users} />
          <Route path='/user/:slug' render={({ match }) => (
            <Posts posts={posts} match={match} />
          )} />
        </main>

        <Stars />
      </div>
    )
  }
}


export default App
// export default withRouter(App) // HoC -- Higher Order Component
