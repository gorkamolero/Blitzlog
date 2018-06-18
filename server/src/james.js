// this is the basic way. but for more advanced ways such as automatic joins, checkout mongoose's `populate` method:
//
// - https://alexanderzeitler.com/articles/mongoose-referencing-schema-in-properties-and-arrays/
// - http://mongoosejs.com/docs/populate.html
//
// YOUR ASSIGNMENT: use populate so that `findPosts` brings the author along with it in a single query
// This circumevents having to do `Promise.all` and potentially many slow db requests.
// The way things used to work before Mongo was we would "join" queries in SQL, which results in one
// query from your web server to the database, and all models nested properly in the return.
// Mongo didn't start out with that approach because it's harder to scale, and Mongo as a "NoSQL" solution
// was all about easy scalability. However, they've added various features to accomplish this in recent years.
// Google "mongo joins" -- populate is just one option; there are others.
//
// ALSO: you guys are focused on the top of the stack (the UI). In the old days significant time was put
// into understanding the DB + web server layer. My recommendation is to learn everything about Mongoose
// and therefore Mongo, and therefore DBs in general. Practice queries from RoboMongo; practice mongo from the Node
// console in your terminal; write files just with mongoose code and execute them to learn all you can do. The boilerplate
// you're using uses nodemon so it updates when you change files. Keep editing the file and ping the endpoints directly, eg:
// http://localhost:8080/api/users/sancho-panza. 8080 fyi is the port that the reverse proxy forwards to.
//
// Get a browser JSON explorer for Chrome so you can see the JSON nicely formatted in your browser:
// https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh/related?hl=en-US
//
// Now you can spend time working on traditional "backend" chrome. To build anything significant, you're gonna need
// to be a master of your backend database APIs. And that's usually a web server layer, such as an ORM, such as Mongoose,
// that simplifies queries, connects these 2 bottom layers, etc, etc. IN SHORT, you didn't need to wait a month
// to read the mongoose docs and find the answers to these questions. But you did learn a valuable lesson:
// it's best to thoroughly and holistically learn an entire tool (as well as a stack of adjacent tools), than to
// waste time forcing a workaround to a single problem. This is especially useful at the "learner" stage of any
// given toolset. You will save more time in the long run KNOWING ALL THAT IS AVAILALBE TO YOU. Right now, you don't
// even know what keywords to search for, as you're just getting acquainted with the toolset. That's a problem. That's
// why I always say "LEARN GENERAL TO SPECIFIC." That means it's most efficient to learn generally the terrain; at least
// know the names of everything available to you and have a basic grasp of the given capabilities. Then dive deeper
// and learn generally the next layer in the stack. And so on recursively. Compare this to what employee developers
// do at companies: they show at 9am, they gotta get XYZ done by the time they leave. They find the quickest crappiest
// route to get the job done--because they dont have the time (or at least think they dont) to learn an entire new tool
// or stack of tools. They ship crappy code that will 100% be problematic in the future, but more importantly they LEARNED
// NOTHING. They didn't make leaps in strides in their developer capabilities (which we should always be looking to do).
// Instead they learned some hack they found on stackoverflow that only partially applied to their given scenario.
//
// CASE IN POINT: there is many ways to join models in Mongoose. The way I did is the closest to what you were attempting to do
// while still being clean and idimoatic. The takeaway is: just define correct schema keys. It's also not 100% correct in that
// `post.author` uses the `Object` type because the `userSchema` isn't available yet. I don't love it, but it's fine. It's
// why doing joins through the `populate` technique is a perfect next step for you. ...So anyway, if u dont generally/holistically
// learn a new large API surface, u'll end up doing it the shitty way.
//
// My time unfortunately may continue to be limited coming up. I wanna teach u guys. I've just gotten slammed from all angles lately.
// Email me if you have any questions.
