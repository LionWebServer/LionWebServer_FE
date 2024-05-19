import auth from "./accountAPI";
import moment from "moment";
import isExpired from "../utils/isExpired";

const goToLogin = () => {
  alert("로그인이 필요합니다.");
  window.location.replace("/login");
};

const refresh = async (config) => {
  const expireAt = localStorage.getItem("access_expiration");
  let token = localStorage.getItem("access_token");

  if (!expireAt) {
    console.log(`accessToken doesn't exist`);
    return config;
  }
  if (!isExpired("access_expiration")) {
    return config;
  }

  // 토큰 갱신 서버통신
  const { data } = await auth.refresh(localStorage.getItem("refreshToken"));

  token = data.access;
  localStorage.setItem("accessToken", data.access);
  localStorage.setItem(
    "access_expiration",
    moment().add(30, "minute").format("yyyy-MM-DD HH:mm:ss")
  );
  if (config.headers) {
    config.headers.Authorization = `Bearer ${String(token)}`;
  }
  return config;
};

const refreshErrorHandle = (err) => {
  console.log("refreshErrorHandle", err);
  if (err !== null) {
    auth.logout().catch((err) => {
      console.error(err);
    });
    goToLogin();
  }
};

export { refresh, refreshErrorHandle };
