import axios from "axios";
import { getToken } from "./AuthServices";
export const getMessages = () => {
  return axios({
    method: "get",
    url: "http://localhost:3000/messages",
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};
export const getMyMessages = (user) => {
  return axios({
    method: "get",
    url: "http://localhost:3000/messages/" + user._id,
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};
export const addMessage = (message) => {
  const data = new FormData();
  data.append("cover", message.cover);
  data.append("content", message.content);
  data.append("title", message.title);
  return axios({
    method: "post",
    url: "http://localhost:3000/messages/add",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getToken()}`,
    },
    data: data,
  });
};
export const updateMessage = (message) => {
  const data = new FormData();
  if (message.cover) {
    data.append("cover", message.cover);
  }
  data.append("content", message.content);
  data.append("title", message.title);
  return axios({
    method: "put",
    url: "http://localhost:3000/messages/update/" + message._id,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getToken()}`,
    },
    data: data,
  });
};

export const deleteMessage = (message) => {
  return axios({
    method: "delete",
    url: "http://localhost:3000/messages/delete/" + message._id,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${getToken()}`,
    },
  });
};
