import React, { Component } from 'react'
import UserItem from './UserItem'

export default class Users extends Component {
  state = {

  }

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
    const { admin } = this.props

    let greeting;
    if(admin) greeting = 'Who\'s accessing the machine?'
    else greeting = 'Our very own aspiring writers'

    if (!users) return null
    return (
      <div>
        <h1 style={{ display: 'inline-block', opacity: '.8', borderBottom: '1px solid' }}>
          {greeting}
        </h1>
        <ul>{users.map(u => <UserItem {...u} loggedIn={admin} key={u._id} />)}</ul>
      </div>
    )
  }
}
