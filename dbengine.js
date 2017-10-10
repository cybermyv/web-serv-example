//-- должен быть класс для работы с базой данных.

//import sqlite3 from 'sqlite3';
const sqlite3 = require('sqlite3').verbose();
var queryCounter = 0;

let db = new sqlite3.Database('./db/adb.db3', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to database! ');
});

exports.getAllAromas = function(callback) {
    queryCounter = queryCounter + 1;
    console.log(queryCounter, ' Start query');

    let tQ = 'select * from aroma order by id';
    db.all(tQ, callback);
};

exports.createAroma = function(namerus, nameeng, manufacturer, callback) {
    let tQ = ' insert into aroma (namerus, nameeng, manufacturer) values(?, ?, ?)';
    db.run(tQ, [namerus, nameeng, manufacturer], err => {
        if (!err) callback(null);
    });

};

exports.deleteAroma = function(id, callback) {
    let tQ = 'delete from aroma where id = ?';
    db.run(tQ, [id], err => {
        if (!err) callback(null);
    });
};

exports.updateAroma = function(namerus, nameeng, manufacturer, id, callback) {
    let tQ = 'update aroma set namerus = ?, nameeng=?, manufacturer = ? where id = ?';
    db.run(tQ, [namerus, nameeng, manufacturer, id],
        err => {
            if (!err) callback(null);
        });
};

exports.readAromaById = function(id, callback) {
    let tQ = 'select * from aroma where id = ?';
    db.each(tQ, [id], (err, row) => {
        if (!err) {
            //   console.log(row);
            callback(null, row)
        };
    })
};

exports.getMnufacturer = function(callback) {
    console.log('1');

    let tQ = 'select * from manufacturer';

    //db.all(tQ, callback);
    db.all(tQ, (err, rows) => {
        console.log(rows);
        if (!err) callback(null, rows);
    })
};