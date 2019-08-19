const mongoose = require('mongoose');

// Setup schema
const favoritesSchema = new mongoose.Schema({
    userId: String,
    songId: String,
    status: Boolean
}, {
    timestamps: true
});

// Export Favorite model
let Favorite = mongoose.model('favorite', favoritesSchema);
module.exports = Favorite;
