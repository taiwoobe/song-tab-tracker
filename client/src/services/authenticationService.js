import { HTTP } from "../config/api.js";

export default {
    register(user) {
        return HTTP.post('register', user);
    }
}