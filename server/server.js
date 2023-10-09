const express = require('express');
const cors = require('cors');
const app = express();
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const fs = require('fs');

app.use(cors());

const PORT = process.env.PORT || 5000;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Max requests per window
});

app.use(limiter);

// Middleware to load route files dynamically
const routeDir = `${__dirname}/routes`;
fs.readdirSync(routeDir).forEach((file) => {
  if (file.endsWith('.js')) {
    const route = require(`${routeDir}/${file}`);
    const routePath = file.replace('.js', ''); // Use the filename as the route path
    app.use(`/api/${routePath}`, route);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});