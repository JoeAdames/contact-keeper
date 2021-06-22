const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

//to validate and check data
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

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
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
			});
		}
		res.send('passed');
		// const { name, email, password } = req.body;
		// try {
		// 	let user = await User.findOne({ email });
		// 	if (user) {
		// 		return res.status(400).json({ msg: 'User already exists' });
		// 	}

		// 	user = new User({
		// 		name,
		// 		email,
		// 		password,
		// 	});

		// 	const salt = await bcrypt.genSalt(10);

		// 	user.password = await bcrypt.hash(password, salt);
		// 	await user.save();

		// 	res.send('user saved');
		// } catch (error) {
		// 	console.error(err.message);
		// 	res.statues(500).send('server error');
		// }
	}
);

module.exports = router;
