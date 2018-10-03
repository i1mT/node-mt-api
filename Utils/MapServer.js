//将读取接口配置，配置路由

let server_list = require("../server_conf") //接口列表
let cls_list = {} //存放各个类 在后面按需取
let serverInstance = {}

/**
 * 开始Map
 * @param {Object} server   restify实例
 */
function start(server) {
  serverInstance = server
  //开始读取接口配置，并分发置配置方法
  console.log("Start deploy API...")
  for (var cls_name in server_list) {
    mapClsRouter(cls_name)
  }
  console.log("Deploy completed!")
}

/**
 * 传入server config中的类 将类中定义的接口配置好
 * @param {String} cla_name      类名
 */
function mapClsRouter(cls_name) {
  let cls = server_list[cls_name]

  for(var func_name in cls) {
    setAPI(cls_name, func_name)
  }
}

/**
 * 读取定义好的一个API结构，设置这一条API
 * @param {*} cls_name      类名
 * @param {*} func_name     方法名
 */
function setAPI(cls_name, func_name) {
  if(!cls_list[cls_name]) {
    cls_list[cls_name] = require("../API/" + cls_name)
  }
  let api_conf = server_list[cls_name][func_name]
  /**
   * api_conf Example:
   * getUserByToken: {
      params: ["token"],
      methods: ["post", "get"]
    },
   */

  let params  = api_conf.params
  let methods = api_conf.methods

  
  let base_url = "/" + cls_name +"/" + func_name
  let params_url = base_url //初始化带参url
  //使用params组装get的地址
  for(var p in params) {
    params_url += "/:" + params[p]
  }

  serverInstance.head(params_url, cls_list[cls_name][func_name]);
  //选择设置POST和GET
  for(var m in methods) {
    let met = methods[m].toUpperCase();
    if(met == "POST") {
      serverInstance.post(base_url, cls_list[cls_name][func_name]);
    }
    if(met == "GET") {
      
      serverInstance.get(params_url, cls_list[cls_name][func_name]);
    }
  }
}

module.exports = {
  start,
}
