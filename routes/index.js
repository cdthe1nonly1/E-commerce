const router = require('express').Router();
const apiRoutes = require('./api');

// open the index.js file in the api folder
//
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;