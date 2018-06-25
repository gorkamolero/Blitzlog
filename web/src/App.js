import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
// import { Route, NavLink } from 'react-router-dom'
import Stars from './SciFi'
import Ascii from './Ascii'
import Home from './Home'
import Editor from './Editor'
import Password from './Password'
import Users from './Users'
import User from './User'
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
    //const { posts, users, currentPost } = this.state
    const { posts } = this.state

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
            <NavLink to='/admin/' activeClassName='is-active'>Write</NavLink>
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
          <Route path='/user/:slug' component={User} />

          <Route path="/users" render={() => <Users admin={false}/>}/>
          <Route path="/admin" render={() => <Users admin={true}/>}/>

          <Route path='/login/:slug' component={Password} />

          <Route path='/edit/:slug' render={({ match }) => {
            const { slug } = match.params
            const currentPost = this.state.posts.find(p => p.slug === slug)

            return <Editor currentPost={currentPost} postSlug={slug} />
          }} />

          <Route path='/create/:slug/' render={({ match }) => {
            const { slug } = match.params
            return <Editor create={true} slug={slug} />
          }} />
        </main>

        <Stars />
      </div>
    )
  }
}


export default App
// export default withRouter(App) // HoC -- Higher Order Component
