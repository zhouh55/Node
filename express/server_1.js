const express = require('express');
const app = express();

// 回调函数 等于 中间件
app.use('/', (req, res, next) => {
    console.log(1);
    next();
})

app.use('/api', (req, res) => {
    res.send('api')
})

app.listen(8080, () => {
    console.log('open 8080 port');
})