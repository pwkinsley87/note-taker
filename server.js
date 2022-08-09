const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;
const router = require('express').Router();

// Parse JSON and URLs
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// // define paths for api and html routes
// app.use("routes/", apiRoutes);
// app.use("routes/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

module.export = router;