const mongoose = require('mongoose');

// Setup schema
const songsSchema = new mongoose.Schema({
    title: String,
    artist: {
        name: String,
        countryOfOrigin: String,
        rating: Number
    },
    genre: String,
    album: String,
    coverArt: String,
    youtubeId: String,
    lyrics: String,
    tab: String
}, {
    timestamps: true
});

// Export Song model
let Song = mongoose.model('song', songsSchema);
module.exports = Song;
