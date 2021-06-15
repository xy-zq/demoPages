let glob = require('glob');
const path = require('path');


//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
    let entries = {}, tmp, htmls = {};

    // 读取src/pages/**/底下所有的html文件
    glob.sync(globPath+'html').forEach(function(entry) {
        tmp = entry.split('/').splice(-3);
        htmls[tmp[1]] = entry
    })

    // 读取src/pages/**/底下所有的js文件
    glob.sync(globPath+'js').forEach(function(entry) {
        tmp = entry.split('/').splice(-3);
        entries[tmp[1]] = {
            entry,
            template: htmls[tmp[1]] ? htmls[tmp[1]] : 'index.html', //  当前目录没有有html则以共用的public/index.html作为模板
            filename:'./html/'+tmp[1] + '.html'   //  以文件夹名称.html作为访问地址
        };
    });
    return entries;
}
let htmls = getEntry('./src/pages/**/*.');

module.exports = {
    pages:htmls,
    publicPath: process.env.NODE_ENV === 'production'? '../': '/',
    // publicPath: '../',           //  解决打包之后静态文件路径404的问题
    outputDir: 'output',        //  打包后的文件夹名称，默认dist
    productionSourceMap:false,
    devServer: {
        index: '/index.html'    //  默认启动页面
    }
}