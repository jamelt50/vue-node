import axios from "axios";
import { getToken } from "./AuthServices";
const token = getToken();
export const getMessages = () => {
  return axios({ method: "get", url: "http://localhost:3000/messages" });
};
export const addComment = (data) => {
  return axios({
    method: "post",
    url: "http://localhost:3000/Comments/add/" + data.message_id,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
    data: JSON.stringify({ content: data.content }),
  });
};
