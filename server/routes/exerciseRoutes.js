const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exerciseController');

// Define exercise-related routes using controllers
router.get('/', exerciseController.getAllExercises);
router.post('/', exerciseController.createExercise);

module.exports = router;
