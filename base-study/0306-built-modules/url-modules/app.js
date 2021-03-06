const url = require('url');
const log4js = require('log4js');
log4js.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
  });

const logger = log4js.getLogger("cheese");
logger.level = 'debug';

const urlString = 'https://www.deepl.com/translator?id=1';
// logger.debug(url.parse(urlString)); // 解析成详情
// logger.debug(url.format(urlString));  // 可将 parse 解析完的内容在转还回去
logger.debug(url.resolve('http://www.baidu.com/a', '../')); // 删除 a内容
logger.debug(url.resolve('http://www.baidu.com/a', '/b')); // 将 a 替换成 b

// 获取 url 参数
// const urlParams = new URLSearchParams(url.parse(urlString).search); // parse 被废弃
const urlParams = new URLSearchParams(new URL(urlString).search);
logger.debug(urlParams.get('id'));
logger.debug(new URL(urlString).search); // 新版本可直接进行属性读取

// URLSearchParams 浏览器也有该方法
// 补充 浏览器也可通过 window.location.search 获取当前传递的参数 然后在通过 URLSearchParams 获取对应的值

