import store from "../store";
import router from "@/router";
export const invalidToken = (error) => {
  if (error.response.status) {
    store.commit("removeToken");
    router.push({ name: "login" });
  }
};
