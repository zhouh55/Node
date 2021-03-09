const logger = require('../../../utils/log');
const querystring = require('querystring');
const http = require('http');
const https = require('https');
http.createServer((req, res) => {
    // debugger;
    // logger.debug(req);

    // 采用 axios 可调用不同类型的方法，其实 这也就属于 中间件了
    https.get('https://www.xiaomiyoupin.com/mtop/mf/resource/data/list', result => {
        logger.debug(result.data);
        let data = [];
        result.on('data', chunk => {
            // logger.debug(chunk);
            // chunk 是一些二进制 Buffer
            data.push(chunk);
        })

        result.on('end', () => {
            res.writeHead( 200, {
                'content-type': 'application/json;chartset=utf-8'
            } )
            logger.debug(data.join('').toString());
            res.write(data.join('').toString());
            res.write(data.join('').toString());
            res.end(data.join('').toString());
        })
    })
}).listen(8080, () => {
    console.log('open server port 8080');
})