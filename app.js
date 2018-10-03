let restify           = require('restify');
let Mapper            = require("./Utils/MapServer")

function testRes(req, res, next) {
  res.send(req.params);
  next();
}

var server = restify.createServer();
server.use(restify.plugins.bodyParser()); //enable post

Mapper.start(server)

server.listen(8080, function() {
  console.log('MTAPI server listening at %s', server.url);
});
