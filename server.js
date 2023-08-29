const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const cors = require('cors');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.static('scripts'));

app.get('/', (req, res) => {
    res.send('this is a website');
})

app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/home/:name&:age', (req, res) => {
    let id = req.body;
    console.log(id);
    res.render('exampleOne', { id })
})

app.get('/search', (req, res) => {
    console.log(req.query);
    res.send('this is a query')
})

app.post('/dataBank', (req, res) => {
    console.log(req.params);
    res.send('got the request')
})

app.listen(port, () => {
    console.log(`listening to port ${port}...`);
})