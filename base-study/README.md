# npm
- cross-env -D 开发环境包 兼容不容平台
- npx 是 npm 自带的一个命令和 yarn 相似。会优先找依赖中的可执行文件，然后在去全局中找，最后才会去安装文件。可以手动设置 --no-install 强制使用本地模块。--ignore-existing 强制使用远程模块 
## node常用包
- log4js 可以将 console.log 打印的内容生成对应文件

# commonJs
- exports 是 module.exports 的引用

# 在浏览器端调试 nodeJS
## 启动脚本前添加 --inspect --inspect-brk。 在浏览器端输入 chrome://inspect/#devices 进行访问。在 devtool 界面有 node 图标可进行调试

# node 进程管理工具
- nodemon --- 本地
- supervisor
- forever
- pm2 --- 服务器

