import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios-auth";
import globalAxios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: null,
    idToken: null,
    user: null,
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    register({ commit, dispatch }, authData) {
      axios
        .post("/accounts:signUp?key=AIzaSyBhxGdYRACnq1OFNNwVMcpUAGcgQmAlV1g", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((res) => {
          console.log(res);
          commit("authUser", {
            idToken: res.data.idToken,
            userId: res.data.localId,
          });
          dispatch("storeUser", authData);
        })
        .catch((err) => console.log(err));
    },
    login({ commit }, authData) {
      axios
        .post(
          "/accounts:signInWithPassword?key=AIzaSyBhxGdYRACnq1OFNNwVMcpUAGcgQmAlV1g",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          }
        )
        .then((res) => {
          console.log(res);
          commit("authUser", {
            idToken: res.data.idToken,
            userId: res.data.localId,
          });
        })
        .catch((err) => console.log(err));
    },
    storeUser({ commit, state }, userData) {
      if (!state.idToken) {
        return;
      }
      globalAxios
        .post("/userData.json" + "?auth=" + state.idToken, userData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
    fetchUser({ commit, state }) {
      if (!state.idToken) {
        return;
      }
      globalAxios
        .get("/userData.json" + "?auth=" + state.idToken)
        .then((res) => {
          console.log(res);
          const data = res.data;
          const users = [];
          for (let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          console.log(users);
          commit("storeUser", users[0]);
        })
        .catch((err) => console.log(err));
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  modules: {},
});
