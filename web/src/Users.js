import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Users extends Component {
  state = {}

  componentDidMount() {
    this.fetchUsers()
  }

  async fetchUsers() {
    const response = await fetch('/api/users/')
    const users = await response.json()
    this.setState({ users })
  }

  render() {
    const { users } = this.state

    if (!users) return null
    return <ul>{users.map(u => <UserItem {...u} key={u._id} />)}</ul>
  }
}

const UserItem = (user) => {
  const { firstName, lastName, job, age, slug } = user

  return (
    <li>
      <article className="user">
        <Link
          className="postInPostlist"
          to={{ pathname: `/user/${slug}`, state: user }}
          style={{ textDecoration: 'underline' }}
        >
          <h2>{firstName} {lastName}</h2>
        </Link>

        <h3>{job}</h3>
        <h3 style={{ opacity: .8}}>Age: {age}</h3>
      </article>
    </li>
  )
}
