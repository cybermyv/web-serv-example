//-- должен быть класс для работы с базой данных.

//import sqlite3 from 'sqlite3';
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/adb.db3', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to database! ');
});
exports.getAllAromas = function(callback) {

    console.log('Start query');
    let tQ = 'select * from aroma order by id';
    db.all(tQ, callback);
};