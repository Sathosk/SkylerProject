const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Morgan middleware
app.use(morgan('dev'))

// Routes
app.use('/', require('./routes/indexRoute'));
app.use('/api', require('./routes/apiRoute'));

// Start Server
app.listen(process.env.PORT || 3000, err => {
    if (err) console.error(error);
    console.log(`Server is running on port ${process.env.PORT || 3000}`)
})