import axios from "./config";
import Api from "./api";

const auth = {
  signUp(data) {
    return axios.post("/server/api/auth/sign-up/", data);
  },
  login(data) {
    return axios.post("/server/api/auth/sign-in", data);
  },
  logout() {
    // FIXME
    return Api.post("/server/api/logout/");
  },
  refresh(data) {
    // FIXME
    return axios.post(`/server/api/refresh/`, data);
  },
  question() {
    return axios.get("/server/api/question-list/" );
  },
};

export default auth;
