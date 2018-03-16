import express from 'express'

const books = [
  { title: 'Walden', author: 'H. D. Thoreau' },
  { title: 'Dune', author: 'Frank Herbert' },
  { title: 'Flatland', author: 'Edwin A. Abbott' }
]

const authors = [
  { name: 'H. D. Thoreau', country: 'USA' },
  { name: 'Frank Herbert', country: 'USA' },
  { name: 'Edwin A. Abbott', country: 'UK' }
]

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api', (req, res) => res.send('Yo yo yooooo'))


app.listen(8080, () => console.log('Yo! I\'m Blitz!\'s first blog! '))
