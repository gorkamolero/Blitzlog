const Users = [
  {
    'slug': 'chadwick-lockley',
    'firstName': 'Chadwick',
    'lastName': 'Lockley',
    'job': 'Field commander',
    'age': 52
  },
  {
    'slug': 'sancho-panza',
    'firstName': 'Sancho',
    'lastName': 'Panza',
    'job': 'Second in command',
    'age': 38
  },
  {
    'slug': 'annelle-zavaleta',
    'firstName': 'Annelle',
    'lastName': 'Zavaleta',
    'job': 'Woman in charge',
    'age': 31
  }
]

const uploadUsers = (Users) => {
  Users.forEach(u => {
    const user = new User(u)
    user.save(function (err) {
      if (err) return handleError(err);
      console.log('Saved user: ' + u.firstName)
    })
  })
}



const posts = [
    {
      'title': 'The invasion',
      'date': 'Day One',
      'slug': 'day-one',
      'excerpt': 'We saw they were small, but they came after us anyway',
      'userId': '5ab215eb8a01ed66da8ae5dd',
      'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada fames ac. Aliquam ultrices sagittis orci a. Vitae tempus quam pellentesque nec nam aliquam. In tellus integer feugiat scelerisque. Mattis enim ut tellus elementum sagittis. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Nunc lobortis mattis aliquam faucibus. Amet consectetur adipiscing elit ut aliquam purus. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin.'
    },
    {
      'title': 'Running away',
      'date': 'Day Two',
      'slug': 'day-two',
      'excerpt': 'They send their little robots, we\'re roaming through the forest!',
      'userId': '5ab215eb8a01ed66da8ae5dd',
      'text': 'Non blandit massa enim nec dui nunc mattis enim ut. Nunc non blandit massa enim nec dui nunc. Sodales ut etiam sit amet nisl purus in. Vulputate ut pharetra sit amet aliquam id. Sit amet cursus sit amet. Nisi est sit amet facilisis magna etiam. Mauris ultrices eros in cursus turpis massa tincidunt dui. Tincidunt lobortis feugiat vivamus at augue eget arcu. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Nulla facilisi nullam vehicula ipsum a arcu cursus.'
    },
    {
      'title': 'We found shelter',
      'date': 'Day Three',
      'slug': 'day-three',
      'excerpt': 'We\'re run down, but we finally found shelter! Food is running scarce...',
      'userId': '5ab215eb8a01ed66da8ae5dd',
      'text': 'Enim sed faucibus turpis in eu mi bibendum. Aliquet nibh praesent tristique magna sit amet purus. Facilisi cras fermentum odio eu feugiat. Bibendum enim facilisis gravida neque convallis a cras semper. Est lorem ipsum dolor sit amet consectetur. Ante metus dictum at tempor commodo ullamcorper a. Fermentum et sollicitudin ac orci phasellus egestas tellus. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Lacus luctus accumsan tortor posuere ac. Auctor eu augue ut lectus arcu bibendum.'
    },
    {
      'title': 'This field commander is a complete hack',
      'date': 'Day Four',
      'slug': 'day-four',
      'excerpt': 'He keeps saying there\'s no food, but I seen him hit the tuna cans. Also, we all sleep in a carton box now',
      'userId': '5ab215eb8a01ed66da8ae5de',
      'text': 'Nunc congue nisi vitae suscipit. Tortor pretium viverra suspendisse potenti nullam ac. Amet massa vitae tortor condimentum lacinia quis. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Leo duis ut diam quam. Lacinia quis vel eros donec. Consectetur lorem donec massa sapien faucibus et molestie. At auctor urna nunc id cursus metus. Imperdiet proin fermentum leo vel. At ultrices mi tempus imperdiet nulla malesuada pellentesque.'
    },
    {
      'title': 'Our first hunting trip',
      'date': 'Day Five',
      'slug': 'day-five',
      'excerpt': 'Very succesful field scouting, we now have a chance',
      'userId': '5ab215eb8a01ed66da8ae5dd',
      'text': 'Mauris a diam maecenas sed enim ut sem. Amet cursus sit amet dictum sit amet justo donec enim. Quisque egestas diam in arcu. Elit at imperdiet dui accumsan. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Accumsan lacus vel facilisis volutpat. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Cras ornare arcu dui vivamus arcu. Est velit egestas dui id ornare arcu odio. Nisl tincidunt eget nullam non.'
    },
    {
      'title': 'The field commander is turning delusional now',
      'date': 'Day Six',
      'slug': 'day-six',
      'excerpt': 'He says he\'ll bring us moose, he comes back empty handed',
      'userId': '5ab215eb8a01ed66da8ae5de',
      'text': 'In hendrerit gravida rutrum quisque non. Nibh tellus molestie nunc non blandit massa. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Blandit libero volutpat sed cras ornare arcu dui. Est ullamcorper eget nulla facilisi etiam. Lacus luctus accumsan tortor posuere ac ut consequat. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sem integer vitae justo eget magna fermentum iaculis eu. Tortor consequat id porta nibh venenatis. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Amet tellus cras adipiscing enim eu turpis. Non quam lacus suspendisse faucibus interdum posuere lorem. Malesuada fames ac turpis egestas. Congue eu consequat ac felis donec et odio pellentesque diam. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Faucibus pulvinar elementum integer enim neque volutpat. Id cursus metus aliquam eleifend mi in nulla posuere.'
    },
    {
      'title': 'They found us!',
      'date': 'Day Seven',
      'slug': 'day-seven',
      'excerpt': 'We had to leave the palace! God help us!',
      'userId': '5ab215eb8a01ed66da8ae5df',
      'text': 'Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Diam phasellus vestibulum lorem sed risus ultricies tristique. Aenean euismod elementum nisi quis. At quis risus sed vulputate odio. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Massa placerat duis ultricies lacus. Sed sed risus pretium quam. Rhoncus urna neque viverra justo nec ultrices dui sapien. Mauris pellentesque pulvinar pellentesque habitant. Erat nam at lectus urna. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Sed tempus urna et pharetra pharetra. Est ante in nibh mauris cursus mattis molestie. Suscipit tellus mauris a diam maecenas sed enim ut. Feugiat in ante metus dictum at tempor. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices.'
    }
]

const uploadPosts = (posts) => {
  posts.forEach(post => {
    const newPost = new Post(post)

    newPost.save(err => {
      if (err) return handleError(err);
      console.log('Saved post: ' + newPost.title)
    })

  })
}

export default posts
