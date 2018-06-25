import React from 'react'
import slugify from 'slugify'

export default class Editor extends React.Component {
  state = {
    create: '',
    currentPost: null,
    postDate: '',
    postTitle: '',
    postBody: '',
    postAuthor: '',
    authors: ''
  }

  componentDidMount() {
    const createInterface = this.props.create;
    if(createInterface) {
      console.log('Creating post')
      this.setState({create: true})
      this.getNextDate()
    }
    else {
      console.log('Editing post')

      if(this.props.currentPost) this.setState({
        currentPost: this.props.currentPost,
        create: false
      })
      else this.fetchPostBySlug(this.props.postSlug);
      this.getAllAuthors();
    }
  }

  async getNextDate() {
    const res = await fetch('/api/lastPost'),
          fullDate = await res.json(),
          dateNumber = parseInt(fullDate.toLowerCase().replace('week ', ''), 10),
          nextDate = dateNumber + 1;

    this.setState({postDate: 'Week ' + nextDate.toString()})
  }

  async fetchPostBySlug(slug) {
    const response = await fetch(`/api/posts/${slug}`)
    const currentPost = await response.json()
    this.setState({
      currentPost,
      postDate: currentPost.date,
      postTitle: currentPost.title,
      postExcerpt: currentPost.excerpt,
      postBody: currentPost.text,
      postAuthor: currentPost.author.slug,
    })
  }

  async getAllAuthors() {
    const response = await fetch('/api/users/')
    const authors = await response.json()
    this.setState({ authors: authors })
  }

  onTitleChange = e => { this.setState({postTitle: e.target.value}); }
  onExcerptChange = e => { this.setState({postExcerpt: e.target.value}); }
  onBodyChange = e => { this.setState({postBody: e.target.value}); }
  onAuthorChange = e => { this.setState({postAuthor: e.target.value}); }


  handleSubmit = e => {
    e.preventDefault();

    const { postTitle, postExcerpt, postBody, postDate } = this.state;
    const data = {
      authorSlug: this.props.slug || this.state.postAuthor,
      author: '',
      date: postDate,
      slug: slugify(postDate).toLowerCase(),
      title: postTitle,
      excerpt: postExcerpt,
      text: postBody
    }
    let method = ''

    if(this.state.create) method = 'POST'
    else method = 'PUT'


    if(this.state.authors) data.author = this.state.authors.filter(author => author.slug === data.authorSlug)[0];
    fetch('/api/posts/', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(() => {
      if(this.state.create) this.props.history.push('/posts/')
      else { console.log('Updated!') }
    }).catch(err => console.log(err))
    console.log(data)
  }


  userDropdown() {
    const {authors} = this.state
    // If we don’t find any we return null
    if (!authors) return null;

    //console.log(authors)

    return(
      <select name="authors" id="authors" onChange={this.onAuthorChange}>
        {authors.map((author, i) => <option key={i} value={author.slug}>{author.firstName} {author.lastName}</option>)}
      </select>
    )
  }

  render() {
    const isCreate = this.state.create;
    let dater, authorer;
    const {postDate, postAuthor, postTitle, postExcerpt, postBody } = this.state,
          currentPost = this.state.currentPost ? this.state.currentPost : ''

    if (isCreate) {
      dater = <h1>{postDate.toString()}: what happened?</h1>;
      authorer = ''
    } else {
      dater = <h1>{postDate.toString()}: this happened</h1>;
      authorer = ''
    }

    return(
      <form onSubmit={this.handleSubmit}>

        {dater}
        {authorer}
        {this.userDropdown()}

        <input required onChange={this.onTitleChange} type="text" placeholder='What happened?' value={postTitle} style={{fontSize: '110%'}} />
        <input required onChange={this.onExcerptChange} name="excerpt" type="text" placeholder='Explain further' value={postExcerpt}/>
        <textarea required onChange={this.onBodyChange} placeholder='Tell us the whole story' value={postBody}/>
        <input type="submit" value="Post it!"/>

      </form>
    )
  }
}
