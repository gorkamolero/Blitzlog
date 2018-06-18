import express from 'express';
import mongoose from 'mongoose';
import { uploadUsers } from './dbTmp';

mongoose.connect('mongodb://localhost/blitz')

mongoose.connection.on('error', (e) => console.log('ERROR', e))
mongoose.connection.on('open', (ref) => {
  console.log('⚡️');

  mongoose.connection.db.listCollections().toArray(function(err, names) {
    names.forEach((e,i,a) => console.log("--->>", e.name));
  });
})


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
  posts: [postSchema]
})


const Post = mongoose.model('Post', postSchema)
const User = mongoose.model('User', userSchema)

// uploadUsers(User)


/* Starting app */
const app = express();


const findPosts = async (req, res) => {
  let posts = await Post.find()
    .populate({ path: 'author', model: User })

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
  const post = await Post.findOne({ slug })
  post.author = await User.findById(post.userId)
  res.json(post)
}

const findUsers = async (req, res) => {
  const users = await User.find()
  res.json(users)
}

const findPostByUserSlug = async (req, res) => {
  const { slug } = req.params
  const author = await User.findOne({ slug })

  author.posts = await Post.find({ userId: author.id })

  res.json(author)
}


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api/users/', findUsers)
app.get('/api/users/:slug', findPostByUserSlug)
app.get('/api/posts/', findPosts)
app.get('/api/posts/:slug', findPost)


app.listen(8080, () => console.log('Yo! I\'m Blitz!\'s first blog! '));
