import express from 'express';
import bodyParser from 'body-parser';
import dbEngine from "./dbengine";

const app = express();

const path = __dirname + '/app';
app.use(express.static(path));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', async(req, res) =>
    //    res.send('Hello World!')
    res.redirect('/api/v01/aroma')
);

app.get('/api/v01/aroma', async(req, res) => {
    dbEngine.getAllAromas((err, rec) => {
        if (!err) return res.json(rec);
    });
});

app.post('/api/v01/aroma', async(req, res) => {
    dbEngine.createAroma(req.body.namerus, req.body.nameeng, err => {
        if (err) throw err;
        res.send('Insert aroma successfully');
    });
});

const server = app.listen(3000, () => {
    const { address, port } = server.address();
    console.log(`Listening at http://localhost:${port}`);
});