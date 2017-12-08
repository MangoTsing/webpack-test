var path = require("path");
module.exports = {
    entry:{
    app:["./main.js"]
    },
    output:{
    path:path.resolve(__dirname,"build"),
    publicPath:"/assets/",
    filename:"bundle.js"
}
}
//# {extry file}出填写入口文件的路径，本文中就是上述main.js的路径，
//# {destination for bundled file}处填写打包文件的存放路径
//# 填写路径的时候不用添加{}
//webpack {entry file} {destination for bundled file}
