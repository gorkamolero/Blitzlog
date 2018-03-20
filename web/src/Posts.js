import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Posts extends Component {
  state = {}

  componentDidMount() {
    this.fetchPosts()
  }

  async fetchPosts() {
    const response = await fetch('/api/posts/')
    const posts = await response.json()
    this.setState({ posts })
  }

  render() {
    const { posts } = this.state

    if (!posts) return null
    return <ul>{posts.map(p => <PostItem {...p} key={p.title} />)}</ul>
  }
}


const postStyle = {
  fontSize: '120%',
  borderBottom: '1px solid rgba(255, 255, 255, .8)',
  padding: '.268em',
  marginBottom: '.218em',
  display: 'inline-block',
  maxWidth: '160px'
}

const PostItem = (post) => {
  const { title, slug, date, author } = post
  
  return (
    <li>
      <Link
        className="postInPostlist"
        to={{ pathname: `/post/${slug}`, state: post }}
      >
        <time style={{opacity: .8}}>{date}</time>
        <div className="title">
          <h3 style={postStyle}>{title}</h3>
        </div>
        <p style={{opacity: .8}}>by {author}</p>
      </Link>
    </li>
  )
}