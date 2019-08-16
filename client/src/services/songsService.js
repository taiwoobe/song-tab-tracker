import { HTTP } from "../config/api.js";

export default {
    getAllSongs(search) {
        return HTTP.get('songs', { params: {
            search: search
        }});
    },
    createNewSong(song) {
        return HTTP.post('songs', song);
    },
    updateSong(song) {
        return HTTP.put(`songs/${song._id}`, song);
    },
    showSong(song_id) {
        return HTTP.get(`songs/${song_id}`);
    }
}