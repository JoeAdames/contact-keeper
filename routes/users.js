const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

//to validate and check data
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

console.log(User);

//get- to fetch, post- to post something to server, put- to update, delete- to delete

//@route POST api/users
//@desc  Register users
// @access Public
router.post(
	'/',
	[
		check('name', 'Please add a name').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check(
			'password',
			'Please enter a password with 6 or more characters'
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		//this code is broken?
		// const errors = validationResult(req);
		// if (!errors.isEmpty()) {
		// 	return res.status(400).json({
		// 		errors: errors.array(),
		// 	});
		// }
		console.log(req);
		console.log(req.body);
		const { name, email, password } = req.body;
		try {
			let user = await User.findOne({ email });
			if (user) {
				return res.status(400).json({ msg: 'User already exists' });
			}

			user = new User({
				name,
				email,
				password,
			});
			console.log(user);

			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);
			await user.save();

			res.send('User saved');
		} catch (err) {
			// console.error(err);
			// console.error(err.message);
			// res.status(500).send('server error');
		}
	}
);

module.exports = router;
