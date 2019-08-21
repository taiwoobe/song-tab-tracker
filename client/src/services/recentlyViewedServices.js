import { HTTP } from "../config/api.js";

export default {
    getRecentlyViewedSongs(params) {
        return HTTP.get('recentlyViewed', {
            recent: params
        });
    },
    addNewHistory(recentSong) {
        return HTTP.post('recentlyViewed', recentSong);
    },
}