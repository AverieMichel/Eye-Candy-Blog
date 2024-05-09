import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.post('/about', (req, res) => {
    res.render('about.ejs');
});

app.post('/commentary', (req, res) => {
    res.render('commentary.ejs');
});

app.post('/hair', (req, res) => {
    res.render('hair.ejs');
});

app.post('/lifestyle', (req, res) => {
    res.render('lifestyle.ejs');
});

app.post('/skin', (req, res) => {
    res.render('skin.ejs');
});

app.post('/staff', (req, res) => {
    res.render('staff.ejs');
});

app.post('/', (req, res) => {
    res.render('home.ejs');
});

app.post('/submit', (req, res) => {
    let inputValue = req.body.commentary;
    res.render('commentary.ejs', {comment: inputValue})
});


// const input = document.getElementById('my-comment');
// const inputValue = input.value;

// console.log(inputValue);



app.listen(port, () => {
    console.log(`listening on port ${port}`);
});