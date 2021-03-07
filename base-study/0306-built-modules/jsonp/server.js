const http = require('http');
const { URL } = require('url');
http.createServer( ( req, res ) => {
    // const urlObj = url.parse(req.url);
    const urlObj = new URL(`http://localhost:8080${req.url}`);
    if(urlObj.pathname === '/api/log') {
        console.log(urlObj);
        // console.log(urlObj.searchParams.get('cb')); // 等于下面的值
        res.write(`${new URLSearchParams(urlObj.search).get('cb')}('hello')`);
        // res.write('111');
        res.end();
    }
    else {
        res.end('no get');
    }

} )
.listen(8080, () => { console.log( 'open 8080' ) } );