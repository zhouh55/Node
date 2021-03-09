const http = require('http');
const { URL } = require('url');
http.createServer( ( req, res ) => {
    const urlObj = new URL(`http://localhost:8080${req.url}`);
    if(urlObj.pathname === '/api/log') {
        res.writeHead( 200, {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        } )
        res.write('{a: test cors}');
        // res.write('111');
        res.end();
    }
    else {
        res.end('no get');
    }

} )
.listen(8080, () => { console.log( 'open 8080' ) } );