import express from 'express';
import bodyParser from 'body-parser';
//import './dbengine';


const app = express();

const path = __dirname + '/app';

app.use(express.static(path));


app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', async(req, res) => {
    //res.send('hello world');
    //res.sendFile('app/index.html', { root: __dirname });
    res.sendFile('index.html');
});

app.get('/list', async(req, res) => {
    res.send('Переходв в /list');
})


app.listen(8080, err => {
    if (err) throw err;
    console.log('Сервер стартовал по адресу: http://localhost:8080');
});