require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const Post = require('./resources/posts/model');
const app = express();
const router = require('./routes');
const jwt = require('jsonwebtoken');
// variable
const port = process.env.PORT || 3000;
const db = process.env.DB_URL

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});


// Routes
app.use('/', router);
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Not Found' });

});
mongoose.connect(db)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Error:', err.message);
    });
