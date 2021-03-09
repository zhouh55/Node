const http = require('http');
const { URL } = require('url');
const { createProxyMiddleware } = require('http-proxy-middleware');
http.createServer( ( req, res ) => {
    const proxy = createProxyMiddleware('/api', {
        target: 'https://m.xiaomiyoupin.com/mtop/navi/venue/page?page_id=4728&pdl=jianyu&sign=846b35b9e94a50a84a0d07b9ab2cc36a',
        changeOrigin: true,
        pathRewrite: { '/api': '' }
    })
    proxy(req, res);
} )
.listen(8080, () => { console.log( 'open 8080' ) } );