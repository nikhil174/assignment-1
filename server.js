const express = require('express');
const app = express();
const primeRoutes = require('./routes/prime');

app.use(express.json());

app.use('/', primeRoutes);

app.listen(5000, () => {
  console.log('Server is active on port 5000');
});
