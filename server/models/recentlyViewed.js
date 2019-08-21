const mongoose = require('mongoose');

// Setup schema
const recentlyViewedSchema = new mongoose.Schema({
    userId: String,
    songId: String
}, {
    timestamps: true
});

// Export RecentlyViewed model
let RecentlyViewed = mongoose.model('recentlyViewed', recentlyViewedSchema);
module.exports = RecentlyViewed;
