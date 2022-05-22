import axios from "axios";

export const login = (data) => {
  return axios({
    method: "post",
    url: "http://localhost:3000/login",
    data: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};
export const register = (data) => {
  return axios({
    method: "post",
    url: "http://localhost:3000/register",
    data: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};
export const getToken = () => {
  return localStorage.getItem("token");
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
};
export const removeToken = () => {
  localStorage.removeItem("token");
};
