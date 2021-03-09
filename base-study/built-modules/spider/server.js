// 爬虫
const http = require('http');
const https = require('https');
const cheerio = require('cheerio');
const filterData = data => {
    // console.log(data);
    const $ = cheerio(data);
    console.log($);
}
http.createServer( ( req, res ) => {
    let data = [];
    https.get('https://www.meizu.com', result => {
        result.on('data', chunk => {
            data.push(chunk);
        });

        result.on('end', () => {
            filterData(data.join(''));
            res.end(data.join(''))
        })
    
    })
} ).listen(8080, () => {
    console.log('open localhost:8080');
})