import Vue from "vue";
import Vuex from "vuex";
import {
  getToken,
  login,
  register,
  removeToken,
  setToken,
} from "../services/AuthServices";
import {
  getMessages,
  addMessage,
  deleteMessage,
  updateMessage,
  getMyMessages,
} from "../services/MessageServices";

import jwtDecode from "jwt-decode";
import { invalidToken } from "../services/ErrorHandler";
import { addComment } from "../services/CommentServices";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedMessage: false,
    messages: [],
    token: "",
  },
  mutations: {
    setMessages(state, messages) {
      state.messages = messages;
    },
    pushMessage(state, message) {
      state.messages.push(message);
    },
    spliceMessage(state, message) {
      console.log("delete");
      state.messages.splice(
        state.messages.findIndex((m) => (message._id = m._id)),
        1
      );
    },
    selectMessage(state, message) {
      state.selectedMessage = message;
    },
    addComment(state, data) {
      const index = state.messages.findIndex((m) => m._id === data._id);
      state.messages[index].comments.push(data.comment);
    },
    setToken(state, token) {
      state.currentUser = jwtDecode(token);
      setToken(token);
    },
    getToken(state) {
      if (getToken()) {
        state.currentUser = jwtDecode(getToken());
      }
    },
    removeToken(state) {
      state.currentUser = null;
      removeToken();
    },
  },
  actions: {
    async getMessages({ commit, state }) {
      try {
        const messages = await getMessages();
        commit("setMessages", messages.data);
      } catch (error) {
        invalidToken(error);
      }
    },
    async getMyMessages({ commit, state }) {
      try {
        const messages = await getMyMessages(state.currentUser);
        commit("setMessages", messages.data);
      } catch (error) {
        invalidToken(error);
      }
    },
    async addMessage({ commit, state }, message) {
      try {
        const result = await addMessage(message);
        commit("pushMessage", result.data);
      } catch (error) {
        invalidToken(error);
      }
    },
    async updateMessage({ commit, state }, message) {
      const result = await updateMessage(message);

      try {
        const result = await updateMessage(message);
        commit("pushMessage", result.data);
      } catch (error) {
        invalidToken(error);
      }
    },
    async deleteMessage({ commit, state }, message) {
      try {
        const result = await deleteMessage(message);
        commit("spliceMessage", message);
      } catch (error) {
        invalidToken(error);
      }
    },
    async addComment({ commit }, data) {
      const result = await addComment(data);
      commit("addComment", { comment: result.data, _id: data.message_id });
    },
    async login({ commit }, data) {
      const result = await login(data);
      commit("setToken", result.data);
    },
    async register({ commit }, data) {
      const result = await register(data);

      commit("setToken", result.data);
    },
    init({ commit }) {
      commit("getToken");
    },
  },
  modules: {},
});
