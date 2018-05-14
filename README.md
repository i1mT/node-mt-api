# MTAPI
A RESTful API framwork based on restify.

# Why MTAPI
MTAPI privides a convenient way to build a pure API server.

You can just modify `server_conf.js` to define your custom API, and then to code solveing function, the framwork will automatic deploy solveing function to API request.

# How to use ?

### 1. Clone this repo:
```
git clone git@github.com:tfh93121/node-mt-api.git

or 

https://github.com/tfh93121/node-mt-api.git
```
### 2. Edit `server_conf.js`, for example:
```
module.exports = {
  Test: { //class
    hello: { //func
      params: ["name", "msg"],
      methods: ["post", "get"],
    },
  },
}
```
### 3. In API floder, create a file named `Test.js`, attention the file name must be equal to classname in `server_conf.js` just defined.

### 4. Edit `Test.js`, create a function named `hello`, it's equals to function name just defined in `server_conf.js`.

just like:
```
//Test class
/**
 * Hello world
 */
function hello(req, res, next) {
  //the params like req res next must be defined.
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
```
### 5. Use `node app.js` to start server. 
The result will be like:
```
Start deploy API...
Deploy completed!
MTAPI server listening at http://[::]:8080
```

### 6. Open a browser tab typing `localhost:8080/Test/iimt/hey`, you will see:
![Hello World](http://oqapmzmc9.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20180514140154.png)

### 7. Now, you can just to define API, and edit function to solve request.
# BTW
## If it's elpful to you, star it!
## Welcome issue and PR.

# Enjoy it.
