# npm
- cross-env -D 开发环境包 兼容不容平台
- npx 是 npm 自带的一个命令和 yarn 相似。会优先找依赖中的可执行文件，然后在去全局中找，最后才会去安装文件。可以手动设置 --no-install 强制使用本地模块。--ignore-existing 强制使用远程模块 （会执行脚本）
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

# node 代理插件
- http-proxy-middleware

# 爬虫
- 可通过http请求完页面内容，可通过 转成 虚拟DOM的形式 在通过获取 DOM 树，( cheerio 包 )

# node 端 ajax
- superagent

# node events模块
- 通过 on 自定义事件。通过 emit 触发事件
- 和 Vue 的 bus 事件原理一样

# node fs模块 --- I/O 异步
- 错误优先原则
- mkdir 创建文件夹
- rename 修改文件夹名字
- rmdir 删除文件夹
- readdir 读取文件夹

- writeFile 写文件
- appendFile 追加内容
- unlink 删除文件
- readFile 读取文件
- readFileSync 读文件（同步）
- stat 获取当前文件、文件夹的相关信息或状态等
- watch 监听文件变化

# node readline 逐行读取
- 命令行 信息采集
- 比如初始化 npm 项目会依次输入信息（创建Vue脚手架应该也类似）

# node 获取静态资源
- path.join() 可拼接完整绝对路径
- mime 插件可通过 .文件名  获取类型

# node buffer
- buffer 被返回给前端的时候会被根据 content-type 进行转换
# node 疑问 
- 为什么 buffer数组 经过 join后会被装换成字符串。
- 在数据传输中不管任意类型数据，最终都会被转换成字符串 或 Buffer的形式 
- pipe 是干啥的？