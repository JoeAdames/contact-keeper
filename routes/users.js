const express = require('express');
const router = express.Router();

//get- to fetch, post- to post something to server, put- to update, delete- to delete

//@route POST api/users
//@desc  Register users
// @access Public
router.post('/', (req, res) => {
	res.send('Registers a user');
});

module.exports = router;
