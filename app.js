const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv/config');
const bodyParser = require('body-parser');
// Import Routes
const postsRoute = require('./routes/posts');

// Middlewares
/**
 * Are just functions that execute when a specific Route is being hit
 */
app.use('/posts', () => {
    console.log('This is a middleware running');
});

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoute);



//ROUTES with express
app.get('/', (req, res) => {
    res.send('We Are On Our Home Localhost');
});


// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('connected to db');
});

//Listen on port 3000
app.listen(3000);