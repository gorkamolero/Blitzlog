import React from 'react'

export default class Post extends React.Component {
  state = {}

  componentDidMount() {
    console.log('MOUNT', this.props)
    if (!this.props.title) {
      this.fetchPostBySlug(this.props.slug)
    }
  }

  async fetchPostBySlug(slug) {
    console.log('FETCHING AGAIN!! -- good!!')
    const response = await fetch(`/api/posts/${slug}`)
    const post = await response.json()
    console.log("HELP", post)
    this.setState({ post })
  }

  render() {
    const post = this.state.post || this.props

    if (post) {
      const { title, date, author, excerpt } = post
      const authorName = author && author.firstName ? author.firstName : 'n/a'

      return (
        <article>
          <time>{date}</time>
          <h2>{title}</h2>
          <small>by {authorName}</small>
          <br/>
          <div className="content">
            <p>{excerpt}</p>
          </div>
        </article>
      )
    }

    return null
  }
}
