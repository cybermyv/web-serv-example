import express from 'express';
import bodyParser from 'body-parser';
import dbEngine from "./dbengine";

const app = express();

const path = __dirname + '/app';

// const url = bodyParser;
app.use(express.static(path));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// var parseUrlParams = function(req, res, next) {
//     req.urlP = url.parse(req.url, true);
//     next();
// };


app.get('/', async(req, res) =>
    //    res.send('Hello World!')
    res.redirect('/api/v01/aroma')
);


app.get('/api/v01/aroma', async(req, res) => {
    if (req.query.man) {
        // console.log('!--');
        dbEngine.getMnufacturer((err, rec) => {

            if (err) throw err;

            return res.json(rec);
        });
    } else {
        dbEngine.getAllAromas((err, rec) => {
            //  console.log(rec);
            if (!err) return res.json(rec);
        });
    }

});

app.post('/api/v01/aroma', async(req, res) => {
    dbEngine.createAroma(req.body.namerus, req.body.nameeng, err => {
        if (err) throw err;
        res.send('Insert aroma successfully');
    });
});

app.get('/api/v01/aroma/:id', async(req, res) => {
    return dbEngine.readAromaById(req.params.id,
        (err, rec) => {
            if (!err) {
                // res.send('UPDATE aroma successfully');
                return res.json(rec)
            };
        });
});


app.delete('/api/v01/aroma/:id', async(req, res) => {
    dbEngine.deleteAroma(req.params.id,
        err => {
            if (err) throw err;
            res.send('Delete aroma successfully');

        });
});


app.put('/api/v01/aroma/:id', async(req, res) => {
    dbEngine.updateAroma(req.body.namerus, req.body.nameeng, req.body.manufacturer, req.body.id, err => {
        if (err) throw err;
        res.send('Update aroma successfully');
    });
});

// app.get('/api/v01/aroma', async(req, res) => {
//     dbEngine.getMnufacturer((err, rec) => {
//         console.log(rec);
//         if (!err) return res.json(rec);
//     });
// });
const server = app.listen(3000, () => {
    const { address, port } = server.address();
    console.log(`Listening at http://localhost:${port}`);
});