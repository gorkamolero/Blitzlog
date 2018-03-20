## ASSIGNMENT #4:

1) INITIAL SETUP

cd Blitzlog

sudo rm -rf node_modules
sudo rm -rf server/node_modules
sudo rm -rf web/node_modules


2) create User + Post schemas and models

3) save 3 user models to the User collection (fields: firstName, lastName, + additional u want)

4) save many post models and for each add a field called `userId`, which has the field of `user._id`

5) make a page at url /users which gets users from /api/users, loop through the users and display
them like you did posts

6) on /user/:slug ping /api/posts/:userSlug and get all posts for the given user.

Then, bi-directionally translate first + last names to/from slugs like this:

"James Gillmore" <=> 'james-gillmore' and search the User collection for:

const user = await User.findOne({ firstName: 'James', lastName: 'Gillmore' })
const posts await Post.find({ userId: user._id })
res.json(posts)


BONUS A: on /post/:slug display the user's name
BONUS B: when visiting /post/:slug directly, also show the user's name, by making /api/post/:slug find the post and the user that created it!




posts: _id | title | excerpt | userId
1123u09123 | Excellent Article | ex.. | 0
1123u09123 | Excellent Article | ex.. | 1
1123u09123 | Excellent Article | ex.. | 2


Users | Blog List | Post



Alfonso
James
Martin

---

My blog Post by Alfonso
Another one by Alonso




PART II)

learn https://emotion.sh

start making your own widget library. Start with these custom designed elements:


<Navbar />
<Sidebar>
<Card> // main content will end up going here
<MainContent />

<Input>
<Select> --> dropdown: published/draft
<Button>

<Header> // this is like h1
<Caption> // this like is like h2, u get the idea, improvise




We'll be working with forms next week. Pretend like you're making your own set of emotion-based React components to build standard web panels (perhaps that will become the basis of your CMS). Styles should look like this:

https://www.google.com/search?q=admin+panel+template&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj91rDojfrZAhUC2GMKHcdjBFcQ_AUICigB&biw=1920&bih=979

or more modern if you're hip to the latest trends.

Try to use the js-version of Emotion, rather than the strings.






# react-express-starter-kit
> Boilerplate containing a front-end using React and a back-end api using Express.

### Motivation
Some developers prefer to have back-end code separated from front-end code to promote separation of concerns.  
Some developers prefer to have back-end code together with front-end code because it is more practical.  
This starter kit aims for a middle ground, trying to preserve the goodness of both approaches.

## Getting Started
Clone the repository and remove the .git folder:  
```
$ git clone https://github.com/hexacta/react-express-starter-kit my-app
$ cd my-app
$ rm -rf .git
$ npm install
```

Start development server:  
```
$ npm start
```

That's all, you can now modify any front or back-end code and everything will be reloaded automatically.

## Under the Hood
### Inspiration
- [express-es6-rest-api](https://github.com/developit/express-es6-rest-api) by [Jason Miller](https://github.com/developit)
- [express-mongoose-es6-rest-api](https://github.com/KunalKapadia/express-mongoose-es6-rest-api) by [Kunal Kapadia](https://github.com/KunalKapadia)
- [create-react-app](https://github.com/facebookincubator/create-react-app) by [Facebook](https://github.com/facebookincubator)

### React
The React application is fully contained inside the `web` folder. It is the bare output of `create-react-app`. The only configuration added is the `proxy` in package.json:
```json
	"proxy": "http://localhost:8080/"
```

Aaaand, an example of how to use fetch to call the API:
```js
  handleClick = async e => {
    const response = await fetch("api/books/");
    const books = await response.json();
    this.setState({
      books: books
    })
  };
```

### Express
The `server` folder includes:
- A REST API shell with Express
- Transpiling with BabelJS

And doesn't include:
- Linting
- Testing
- Database

## License

MIT © [Hexacta](https://www.hexacta.com)