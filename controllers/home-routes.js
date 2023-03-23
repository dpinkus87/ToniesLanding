const router = require('express').Router();


// Render Home Page

router.get('/', async (req, res) => {
    res.render('home', {
      loggedIn: req.session.loggedIn,
    });
  });

// Get a user for profile



// Get all Tonies


// Get Tonie by ID


// Get all Tonies in Que_Item by ID


// Add Tonie to Que


// Delete Tonie from Que


// Login Route


// Signup Route


module.exports = router;