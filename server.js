// Imports
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
require('./config/passport')(passport);
const PORT = process.env.PORT || 8000;
const rowdy = require('rowdy-logger').begin(app);

// API
const users = require('./api/users');
const rounds = require('./api/rounds');


// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Initialize Passport and use config file
app.use(passport.initialize()); 
// app.use(passport.authenticate('jwt', { session: false })) // This is the line pete gave us for req.user access
require('./config/passport')(passport);

// Home route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Smile, you are being watched by the Backend Engineering Team' });
});

// Routes
app.use('/api/users', users);
app.use('/api/rounds', rounds);


app.listen(PORT, () => {
    console.log(`Server is listening 🎧 on port: ${PORT}`);
    rowdy.print()
});