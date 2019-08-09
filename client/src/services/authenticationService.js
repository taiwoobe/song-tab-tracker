import { HTTP } from "../config/api.js";

export default {
    register(user) {
        return HTTP.post('register', user);
    },
    login(user) {
        return HTTP.post('login', user);
    }
}