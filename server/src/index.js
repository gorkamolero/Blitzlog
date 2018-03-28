import express from 'express';
import mongoose from 'mongoose';
import posts from './dbTmp';

mongoose.connect('mongodb://localhost/blitz')

mongoose.connection.on('error', (e) => console.log('ERROR', e))
mongoose.connection.on('open', (ref) => {
  console.log('SUCCESS');

  mongoose.connection.db.listCollections().toArray(function(err, names) {
    names.forEach((e,i,a) => console.log("--->>", e.name));
  });
})


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
  //author: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
}, { strict: false })


const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post', postSchema)





const app = express();


const findPosts = async (req, res) => {
  const posts = await Post.find(
    //   {}, (err, posts) => {
    //   posts.forEach((post) => {
    //     let author = User.findOne({ id: post.userId })
    //     post.author = author
    //   })
    // }
  )

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
  const author = await User.findOne({ slug })

  let posts = await Post.find({'userId': author.id})
  posts = posts.map(post => Object.assign({}, post._doc, {author}))


  res.json(posts)
}






app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api/users/', findUsers)
app.get('/api/users/:slug', findPostByUserSlug)
app.get('/api/posts/', findPosts)
app.get('/api/posts/:slug', findPost)


app.listen(8080, () => console.log('Yo! I\'m Blitz!\'s first blog! '));
