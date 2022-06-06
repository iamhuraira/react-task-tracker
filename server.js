const server = require("json-server");
const jsonServer = require("json-server");
const serve = jsonServer.create();
const router = jsonServer.router('./db.json');
const cors = require("cors")
const middleware = jsonServer.defaults({
    static:'./build'
})
const port = process.env.PORT || 5000;
server.use(middleware);
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
);
// server.use(cors())
server.use(router);
server.listen(port, ()=> (
    console.log(`Server is Running on ${port}`)
));