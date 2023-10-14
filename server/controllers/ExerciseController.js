const db = require('../db/db-access');

// Get all exercises
const getAllExercises = (req, res) => {
  const query = 'SELECT * FROM exercises';
  
  db.all(query, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Server error' });
      return;
    }

    res.status(200).json({ exercises: rows });
  });
};

// Create a new exercise
const createExercise = (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ error: 'Exercise name is required' });
    return;
  }

  const query = 'INSERT INTO exercises (name) VALUES (?)';

  db.run(query, [name], function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Server error' });
      return;
    }

    console.log('Creating exercise: ' + JSON.stringify(req.body))
    res.status(201).json({
      message: 'Exercise created successfully',
    });
  });
};

module.exports = {
  getAllExercises,
  createExercise,
};
