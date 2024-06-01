import axios from "./config";
import Api from "./api";

const auth = {
  signUp(data) {
    return axios.post("/server/api/auth/sign-up", data);
  },
  login(data) {
    return axios.post("/server/api/auth/sign-in", data);
  },
  logout() {
    delete Api.defaults.headers.common.Authorization;
  },
  refresh(data) {
    // FIXME
    // return axios.post(`/server/api/refresh`, data);
  },
};

export default auth;
