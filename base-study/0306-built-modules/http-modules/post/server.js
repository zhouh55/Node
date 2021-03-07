const logger = require('../../../utils/log');
const querystring = require('querystring');
const http = require('http');
const options = {
    protocol: 'http:',
    hostname: 'nodejs.cn',
    port: 443,
    path: '/todos',
    method: 'GET'
}
http.createServer((req, res) => {
    // request 是采用 node 在服务端发送请求 
    const reqResult = http.request( options, result => {} )
    reqResult.write( options )
    reqResult.end()

    res.end('23')
}).listen(8080, () => {
    console.log('open server port 8080');
})