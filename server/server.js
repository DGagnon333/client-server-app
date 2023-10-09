const express = require('express');
const cors = require('cors');
const app = express();
const rateLimit = require('express-rate-limit');
require('dotenv').config();

app.use(cors());

const PORT = process.env.PORT;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Max requests per window
});

app.use(limiter);

//for developpment
app.use(cors({ origin: "*" }));

//for production
//app.use(cors({ origin: <client-url> }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});