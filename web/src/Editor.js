import React from 'react'
import slugify from 'slugify'

export default class Editor extends React.Component {
  state = {
    nextDate: '',
    postTitle: '',
    postBody: ''
  }

  componentDidMount() {
    this.getNextDate()
  }

  async getNextDate() {
    const res = await fetch('/api/lastPost'),
          fullDate = await res.json(),
          dateNumber = parseInt(fullDate.toLowerCase().replace('week ', ''), 10),
          nextDate = dateNumber + 1;

    this.setState({nextDate: 'Week ' + nextDate.toString()})
  }

  onTitleChange = e => { this.setState({postTitle: e.target.value}); }
  onBodyChange = e => { this.setState({postBody: e.target.value}); }


  handleSubmit = e => {
    e.preventDefault();

    const { postTitle, postBody, nextDate } = this.state;
    const data = {
      authorSlug: this.props.match.params.slug,
      date: nextDate,
      slug: slugify(nextDate).toLowerCase(),
      title: postTitle,
      text: postBody
    }

    fetch('/api/posts/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(() => this.props.history.push('/posts/')).catch(err => console.log(err))
  }


  render() {
    const {nextDate} = this.state
    return(
        <div>
          <h1 style={{ marginBottom: '1em', fontSize: '100%' }}>{nextDate.toString()}: what happened?</h1>

          <form onSubmit={this.handleSubmit}>

            <input required onChange={this.onTitleChange} type="text" placeholder="What happened?"/>
            <textarea required onChange={this.onBodyChange} placeholder='Tell us the whole story'/>
            <input type="submit" value="Post it!"/>

          </form>
        </div>
      )
  }
}
