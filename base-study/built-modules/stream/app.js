const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

const readStream = fs.createReadStream('./log1.txt');
const writeStream = fs.createWriteStream('./log.gzip');

readStream
    .pipe(gzip)
    .pipe(writeStream)

// writeStream.write(readStream)