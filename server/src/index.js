import express from 'express'

const books = [
  {
    title: 'Walden',
    author: 'H. D. Thoreau',
    summary: 'Walden is an account of the two years during which Henry David Thoreau built his own cabin, raised his own food, and lived a life of simplicity in the woods near Concord, Massachusetts. Thoreau\'s idea was that one\'s true self could be lost amid the distractions of ordinary life.'
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    summary: 'Set in a distant future where life in the universe and space travel is dependent upon a spice found only on the planet Dune, this film tracks the rise of young Paul Atreides, son of noble Duke Leto, from the time of his father\'s betrayal and murder by the evil Baron Harkonnen, to his discovery of the great secret...'
  },
  {
    title: 'Flatland',
    author: 'Edwin A. Abbott',
    summary: 'Written pseudonymously by "A Square" the book used the fictional two-dimensional world of Flatland to comment on the hierarchy of Victorian culture, but the novella\'s more enduring contribution is its examination of dimensions.'
  }
]

const app = express()

const getBooks = (req, res) => {
  res.send(books)
}

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/books/', getBooks)


app.listen(8080, () => console.log('Yo! I\'m Blitz!\'s first blog! '))
