const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const connectDB = require('./config/db.js');
const dotenv = require('dotenv');

const app = express();

// Load config.env
dotenv.config({path: './config/config.env'});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Morgan middleware
app.use(morgan('dev'))

// Database Connection
connectDB()

// app.post('/api/createPost', (req, res) => {
//     console.log(req.body);
// })

// Routes
app.use('/', require('./routes/indexRoute'));
app.use('/api', require('./routes/apiRoute'));

// Start Server
app.listen(process.env.PORT || 3000, err => {
    if (err) console.error(error);
    console.log(`Server is running on port ${process.env.PORT || 3000}`)
})