import axios from "config";
import moment from "moment";
import { refresh, refreshErrorHandle } from "./refresh.ts";
import auth from "./accountAPI.js";

const Api = axios.create({
  timeout: 10000,
  params: {},
});

Api.interceptors.request.use(refresh, refreshErrorHandle); // 요청 보내기 전 토큰 유효성 검사
Api.interceptors.response.use(
  // 응답이 401에러인경우 refresh 후 다시 요청 수행해보기
  (res) => res,
  async (err) => {
    const {
      config,
      response: { status },
    } = err;

    /**  refresh 요청자체의 에러나 401 에러가 아닌경우는 refresh를 해야할 필요가 없으므로 에러를 그대로 reject */
    if (
      // FIXME
      String(config.url).includes("refresh url") ||
      status !== 401 ||
      config.sent
    ) {
      return Promise.reject(err);
    }

    /** refresh 요청이 끝나고 재요청을 보냈는데도 에러가 발생한 경우 재귀적으로 loop가 발생할 수 있기 때문에 이를 방지하기 위해 config.sent를 true로 설정 */
    config.sent = true;

    // refresh 요청
    const { data } = await auth.refresh(localStorage.getItem("refreshToken"));

    const token = data.access;
    localStorage.setItem("accessToken", token);
    localStorage.setItem(
      "access_expiration",
      moment().add(30, "minute").format("yyyy-MM-DD HH:mm:ss")
    );

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return axios(config);
  }
);

export default Api;
