const server = require("json-server");
const jsonServer = require("json-server");
const serve = jsonServer.create();
const router = jsonServer.router('./db.json');
const middleware = jsonServer.defaults({
    static:'./build'
})
const port = 5000;
server.use(middleware);
serve.use(
    jsonServer.rewriter({
        "/api/*" : "/$1",
    })
);
serve.use(router);
server.listen(port, ()=> (
    console.log(`Server is Running on ${port}`)
));