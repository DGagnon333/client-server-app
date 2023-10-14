const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const PORT = process.env.PORT;

// Rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Max requests per window
});
app.use(limiter);

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Dev CORS
/*
app.use(cors({
  origin: ['http://example1.com', 'http://example2.com'],
  credentials: false,
}));
*/
// Temporary CORS
app.use(cors({
  origin: '*',
  credentials: false,
}));

// Import Routes
const userRoutes = require('./routes/userRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/exercises', exerciseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
