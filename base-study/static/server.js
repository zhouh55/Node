const http = require('http');
const readStaticFile = require('./readStaticFile');
http
    .createServer(( req, res ) => {
        const urlString = req.url;
        readStaticFile(urlString)
            .then((result) => {
                const { data, mimiType } = result;
                res.setHeader('content-type', mimiType);
                res.write(data);
            })
            .catch(error => {
                res.write(error);
            })
            .finally(() => {
                res.end();
            })

        
    })
    .listen(8080, () => { console.log('open 8080 port') });