import React, { Component } from 'react'

export default class Posts extends Component {
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
    return <ul>{users.map(u => <UserItem {...u} key={u.firstName} />)}</ul>
  }
}

const UserItem = (user) => {
  const { firstName, lastName, job, age } = user

  return (
    <li>
      <article className="user">
        <h2>{firstName} {lastName}</h2>
        <h3>{job}</h3>
        <h3>Age: {age}</h3>
      </article>
    </li>
  )
}
