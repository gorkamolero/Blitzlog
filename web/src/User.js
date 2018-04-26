import React from 'react'

export default class User extends React.Component {
  state = {}

  componentDidMount() {
    const { slug } = this.props.location.state
    this.fetchPostByUserSlug(slug)
  }

  async fetchPostByUserSlug(slug) {
    const response = await fetch(`/api/users/${slug}`)
    const user = await response.json()
    console.log("HELP", user)
    this.setState({ user })
  }

  render() {
    const { user } = this.state
    const { firstName } = this.props.location.state

    if (user && user.posts.length > 0) {
      return (
        <div>
          <h1 style={{ color: 'pink' }}>Posts by {firstName}:</h1>

          {user.posts.map(({ title, date, excerpt, _id }) => (
            <article key={_id}>
              <time>{date}</time>
              <h2>{title}</h2>
              <br/>
              <div className="content">
                <p>{excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      )
    }

    return <div>{firstName} hasnt posted yet :(</div>
  }
}
