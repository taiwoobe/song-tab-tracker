const mongoose = require('mongoose');

// Setup schema
const songsSchema = new mongoose.Schema({
    title: String,
    artist: String,
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
