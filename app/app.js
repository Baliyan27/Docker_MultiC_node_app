const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to MongoDB using service name 'mongo' (from Compose)
mongoose.connect('mongodb://mongo:27017/testdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.get('/', (req, res) => {
    res.send('Hello from Node.js and MongoDB!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
