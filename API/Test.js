//Test class
/**
 * Hello world
 * @param {String} name this is request param, not function param
 */
function hello(req, res, next) {
  let data = {
    ret: 200,
    msg: req.params.msg,
    name: req.params.name,
  }
  res.send(data);
  next();
}

module.exports = {
  hello,
}