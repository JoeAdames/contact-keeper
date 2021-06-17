const express = require('express');
const router = express.Router();

//get- to fetch, post- to post something to server, put- to update, delete- to delete

//@route  GET api/auth
//@desc   GET logged in users
//@access Private
router.get('/', (req, res) => {
	res.send('get logged in user');
});

//@route  POST api/auth
//@desc   auth user and get token
//@access public
router.post('/', (req, res) => {
	res.send('log in user');
});

module.exports = router;
