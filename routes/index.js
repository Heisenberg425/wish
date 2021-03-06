// 引入Express对象
var express = require ('express');
// 引入路由对象
var router = express.Router ();
// 引入我们自定义的controller
const IndexController = require('../controllers/index');
router.get('/',function(req,res,next){
    console.log('book2');
    // res.redirect('http://www.baidu.com');
    // res.end('hello');
    res.render('index');
  });
// 定义登录路由，POST请求
router.post ('/login', IndexController.login);
// 导出路由，供app.js文件调用
module.exports = router;