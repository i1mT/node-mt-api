

function getUserByToken(req, res, next) {
  let token = req.params.token
  console.log(req.body)
  //let oracleDB = require("./oracle")

  let test_res = {
    ret: "200",
    message: "请求成功！",
    data: {
      token: token,
      login_name: "yaoxiaogang",
      platform_id: "yaoxiaogang",
      server_time: "201805091528",
    }
  }

  res.send(test_res);
  next();

  //TODO: 将res 与next交由查询处理
  //let result = oracleDB.getUserInfoByToken(token, res, next);
}

module.exports = {
  getUserByToken,
}
