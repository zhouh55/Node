const express = require('express');
const app = express();
const path = require('path');

// const bodyParser = require('body-parser');
const router = require('./router/index')

app.use(express.urlencoded());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);  
// bodyParser.urlencoded({ extended: true })

app.listen(8080, () => {
    console.log('open 8080 port');
})