const express = require('express');
const router = express.Router();

//get- to fetch, post- to post something to server, put- to update, delete- to delete

//@route  GET api/contacts
//@desc   Get all users contacts
//@access Private
router.get('/', (req, res) => {
	res.send('get all contacts');
});

//@route  POST api/contacts
//@desc   add new contact
//@access Private
router.post('/', (req, res) => {
	res.send('add contact');
});

//@route  PUT api/contacts/:id
//@desc   Update contact
//@access Public
router.put('/:id', (req, res) => {
	res.send('update contact');
});

//@route  delete api/contacts/:id
//@desc   delete contact
//@access Public
router.delete('/:id', (req, res) => {
	res.send('delete contact');
});

module.exports = router;
