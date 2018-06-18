import React, { Component } from 'react'

export default class Password extends Component {
  state = {
    password: 'admin12345'
  }

  async fetchPass() {
    const {slug} = this.props.match.params
    const res = await fetch(`/api/login/${slug}`)
    const password = await res.text()

    this.setState({ password: password })
  }

  handleSubmit = e => {
    e.preventDefault();
    const {slug} = this.props.match.params

    if(this.refs.pass.value === this.state.password) {
      this.props.history.push(`/editor/${slug}`)
    } else {
      alert('Wrong password, mister')
    }
  }

  componentDidMount() {
    this.fetchPass()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ display: 'inline-block', maxWidth: '50%' }}>
        <h1>Please type your assigned password</h1>
        <input ref="pass" placeholder="Password" type="password" required/>
        <input type="submit" value="Submit!"/>
      </form>
    )
  }
}
