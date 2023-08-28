const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.static('public'));

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

app.post('/home/:info', (req, res) => {
    const { branch } = req.params;
    console.log(branch);
    res.render('home');
})


app.get('/search', (req, res) => {
    console.log(req.query);
    res.send('this is a query')
})

app.post('/home', (req, res) => {
    console.log(req.query);
})

app.listen(port, () => {
    console.log(`listening to port ${port}...`);
})