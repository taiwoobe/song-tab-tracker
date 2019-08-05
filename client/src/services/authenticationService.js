import { HTTP } from "../config/api.js";

export default {
    register(credentials) {
        return HTTP.post('register', credentials);
    }
}