import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const postStyle = {
  fontSize: '120%',
  borderBottom: '1px solid rgba(255, 255, 255, .8)',
  padding: '.268em',
  marginBottom: '.218em',
  display: 'inline-block',
  maxWidth: '160px'
}

function Linker(post) {

  return (
    <li key={post.title}>
      <Link className="postInPostlist" to={`/journal/${post.slug}`}>
        <time style={{opacity: .8}}>{post.date}</time>
        <div className="title">
          <h3 style={postStyle}>{post.title}</h3>
        </div>
        <p style={{opacity: .8}}>by {post.author}</p>
      </Link>
    </li>
  )
}

class Posts extends Component {

  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    const postsList = this.props.posts || null

    if (!postsList) return null
    return <ul>{postsList.map(Linker)} </ul>
  }
}

export default Posts
