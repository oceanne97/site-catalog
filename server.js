const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const items = require('./routes/api/items');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// DB config
const dbURI = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect(dbURI, {
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Connect to Mongo v.2
// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect()
//     .then(() => console.log('MongoDB connected...'))
//     .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// Use routes
app.use('/api/items', items)
