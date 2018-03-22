import express from 'express';
import mongoose from 'mongoose';
import posts from './dbTmp';

mongoose.connect('mongodb://localhost/blitz')

mongoose.connection.on('error', (e) => console.log('ERROR', e))
mongoose.connection.on('open', () => console.log('SUCCESS'))

const userSchema = mongoose.Schema({
  slug: String,
  firstName: String,
  lastName: String,
  job: String,
  age: Number,
})

const postSchema = mongoose.Schema({
  title: String,
  date: String,
  slug: String,
  excerpt: String,
  userId: String,
  text: String,
})

const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post', postSchema)



// User.find({}, (err, users) => {
//   if (err) return handleError(err);
//   // Prints "Space Ghost is a talk show host".
//   users.forEach(u => console.log(u.job + ': ' + u.id))
// });





const app = express();


const findPosts = async (req, res) => {
  const posts = await Post.find()
  res.json(posts)
}

const findPost = async (req, res) => {
  const { slug } = req.params
  const post = await Post.findOne({ slug })
  res.json(post)
}

const findUsers = async (req, res) => {
  const users = await User.find()
  res.json(users)
}

const findPostByUserSlug = async (req, res) => {
  const { slug } = req.params
  const user = await User.findOne({ slug })
  const posts = await Post.find({ userId: user.id })

  console.log(user.id)

  res.json(posts)
  console.log(posts)
}

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api/users/', findUsers)
app.get('/api/users/:slug', findPostByUserSlug)
app.get('/api/posts/', findPosts)
app.get('/api/posts/:slug', findPost)


app.listen(8080, () => console.log('Yo! I\'m Blitz!\'s first blog! '));
