import mongoose = require('mongoose');

mongoose.connect('mongodb+srv://developer:9AFm3w3qI6VqExSz@dev.gaeez.mongodb.net/uplanner?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected');
}).catch((err) => {
    console.log('Failed to connect');
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
