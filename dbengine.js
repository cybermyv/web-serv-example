//import sqlite3 from 'sqlite3';
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/adb.db3', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to database');
});

export function readAromas(callback) {
    var tQ = 'select * from employee order by id';
    db.all(tQ, callback);
};


db.close();

export default db;