// Dependencies
const mongoose = require('mongoose');

// Database Configuration 
mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

// Database Connection Error / Success 
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + 'is mongod not running?'));
db.on('connected', () => console.log ('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));