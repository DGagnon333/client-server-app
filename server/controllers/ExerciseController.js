// controllers/ExerciseController.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Route to get all exercises
router.get('/', (req, res) => {
  const query = 'SELECT * FROM exercises';

  db.all(query, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Server error' });
      return;
    }

    res.json({ exercises: rows });
  });
});

module.exports = router;
