import React from 'react'

export default class Post extends React.Component {
  componentDidMount() {
    const {params} = this.props.match
    this.props.getThePost(params)
  }
  render() {
    //const {title, date, author, excerpt} = this.props.post

    if(this.props.post != null) {
      const {title, date, author, excerpt} = this.props.post

      return (
        <article>
          <time>{date}</time>
          <h2>{title}</h2>
          <small>by {author}</small>
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
