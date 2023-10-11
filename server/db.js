// db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./exercise.db');

db.serialize(() => {
  db.run(
    'CREATE TABLE IF NOT EXISTS exercises (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)'
  );
});

module.exports = db;
