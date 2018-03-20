import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/blitz')

mongoose.connection.on('error', (e) => console.log('ERROR', e))
mongoose.connection.on('open', () => console.log('SUCCESS'))

const postSchema = mongoose.Schema({
  title: String,
  date: String,
  slug: String,
  excerpt: String,
  author: String,
  text: String,
})

const Post = mongoose.model('Post', postSchema)

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

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api/posts/', findPosts)
app.get('/api/posts/:slug', findPost)


app.listen(8080, () => console.log('Yo! I\'m Blitz!\'s first blog! '));
