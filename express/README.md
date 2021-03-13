# express
- use 的回调函数被称为 中间件。该值可以是数组 或 多个参数
- 自带 Router 实例，
- 自带的 req 有被增强 自带 query 字段 获取参数值 --- 仅限 url 形式传参
- body-parser 包可解析请求 body 内容. 在 4.x 的版本中已经放弃了该插件，可以使用 express自带的 express.urlencoded 和 express.json 等，见文档