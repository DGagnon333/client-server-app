const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({"exercices": ["pushups", "setups", "dbcurls"]})
})

app.listen(5000, () => console.log('Server running on port 5000'))