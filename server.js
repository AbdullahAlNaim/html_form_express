const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();//not being used just to have

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

// for parsing multipart/form-data
//im not using this. its just from the site mentioning
app.use(upload.array());

app.use(express.static('public'));
app.use(express.static('scripts'));
app.use(express.static('styles'));

app.get('/', (req, res) => {
    res.send('this is a website but nothing here');
})

app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/home/:name&:age', (req, res) => {
    let id = req.body;
    console.log(id);
    res.render('exampleOne', { id })
})


app.post('/home', (req, res) => {
    console.log(req.body);
    res.send('got the form')
})

app.listen(port, () => {
    console.log(`listening to port ${port}...`);
})