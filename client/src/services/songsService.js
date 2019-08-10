import { HTTP } from "../config/api.js";

export default {
    getAllSongs() {
        return HTTP.get('songs');
    },
    createNewSong(song) {
        return HTTP.post('songs', song);
    }
}