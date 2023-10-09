const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ "exercices": ["pushups", "setups", "dbcurls"] });
});

module.exports = router;