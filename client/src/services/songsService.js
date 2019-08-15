import { HTTP } from "../config/api.js";

export default {
    getAllSongs() {
        return HTTP.get('songs');
    },
    createNewSong(song) {
        return HTTP.post('songs', song);
    },
    showSong(song_id) {
        return HTTP.get(`songs/${song_id}`);
    }
}