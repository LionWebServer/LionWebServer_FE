import { useEffect } from "react";
import auth from "../../api/accountAPI";

export default function Logout() {
  useEffect(() => {
    localStorage.removeItem("access_expiration");
    localStorage.removeItem("userEmail");
    auth.logout();
    window.location.href = "/";
  }, []);

  return null;
}
