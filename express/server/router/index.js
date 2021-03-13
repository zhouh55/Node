const express = require('express');

// 路由中间件
const router = express.Router();

router.get('/index', (req, res, next) => {
    const query = req.query;
    res.send(query);
})

router.post('/index', (req, res, next) => {
    const query = req.body;
    res.send(query);
})

// 和 Vue 路由是一样的
router.all('*', (req, res) => {
    res.send('404 page')
})
module.exports = router;