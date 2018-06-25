import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { uploadUsers } from './dbTmp';

mongoose.connect('mongodb://localhost/blitz')

mongoose.connection.on('error', (err) => console.log('ERROR', err))
mongoose.connection.on('open', () => console.log('⚡️'))


const postSchema = new mongoose.Schema({
  title: String,
  date: String,
  slug: String,
  excerpt: String,
  author: mongoose.Schema.Types.ObjectId,
  text: String,
}, { strict: false })

const userSchema = new mongoose.Schema({
  slug: String,
  firstName: String,
  lastName: String,
  job: String,
  age: Number,
  password: String,
  posts: [postSchema]
})


const Post = mongoose.model('Post', postSchema)
const User = mongoose.model('User', userSchema)

// uploadUsers(User)


/* Starting app */
const app = express();
app.use(bodyParser.json());

const findPosts = async (req, res) => {
  let posts = await Post.find()
                        .populate({ path: 'author', model: User })
                        .sort('date')

  // Send response
  res.json(posts)

  // Promise-all way
    // posts = await Promise.all(posts.map(async post => {
    //   post.author = post.userId
    //     ? await User.findById(post.userId)
    //     : { firstName: post.author } // temporary workaround until you update your database
    //
    //   return post
    // }))
}

const findPost = async (req, res) => {
  const { slug } = req.params
  const post = await Post.findOne({ slug }).populate({ path: 'author', model: User })
  res.json(post)
}

const findUsers = async (req, res) => {
  const users = await User.find()
  res.json(users)
}

const findPostByUserSlug = async (req, res) => {
  const { slug } = req.params
  console.log(slug)
  const author = await User.findOne({ slug })

  author.posts = await Post.find({ author: author.id }).sort('date')

  res.json(author)
}

const findLastDate = async (req, res) => {
  //const { date } = req.params
  const post = await Post.findOne().sort({ field: 'asc', _id: -1 }).limit(1)
  res.json(post.date)
}

const getPass = async (req, res) => {
  const { slug } = req.params
  const user = await User.findOne({ slug })
  console.log(user.password)
  res.send(user.password)
}

const submitPost = async (req, res) => {
  const { authorSlug } = req.params
  const author = await User.findOne({ authorSlug })
  const authorId = author._id
  console.log(authorId)

  const post = {
    'title': req.body.title,
    'date': req.body.date,
    'slug': req.body.slug,
    'author': authorId,
    'text': req.body.text
  }

  const newPost = new Post(post)

  newPost.save(err => {
    if (err) return handleError(err);
    console.log('Saved post: ' + newPost.title)

    res.json(newPost)
  })
}


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api/users/', findUsers)
app.get('/api/users/:slug', findPostByUserSlug)
app.get('/api/login/:slug', getPass)
app.get('/api/posts/', findPosts)
app.get('/api/posts/:slug', findPost)
app.get('/api/lastPost/', findLastDate)

app.post('/api/posts/', submitPost)


app.listen(8080, () => console.log('Yo! I\'m Blitz!\'s first blog! '));
