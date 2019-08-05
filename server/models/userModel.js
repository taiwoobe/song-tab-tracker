const mongoose = require('mongoose');

// Setup schema
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    pasword: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

// Export User model
let User = mongoose.model('user', userSchema);
module.exports = User;
