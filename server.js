const express = require('express');
const connectDB = require('./config/db');

// connect database
connectDB();

const app = express();

//init middleware(bodyparser)
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
	res.json({ msg: 'welcome to the contact keeper API' })
);

//define our routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server start on port ${PORT}`));
