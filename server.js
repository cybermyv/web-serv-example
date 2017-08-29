import express from 'express';
import bodyParser from 'body-parser';
import dbEngine from "./dbengine";

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', async(req, res) =>
    //    res.send('Hello World!')
    res.redirect('/api/v01/list')
);

app.get('/api/v01/list', async(req, res) => {
    dbEngine.getAllAromas((err, rec) => {
        if (!err) return res.json(rec);
    });
});


const server = app.listen(3000, () => {
    const { address, port } = server.address();
    console.log(`Listening at http://localhost:${port}`);
});