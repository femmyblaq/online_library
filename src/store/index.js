import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios-auth";
import globalAxios from "axios";
import book_store from "./modules/book_store";
import ebook_store from "./modules/ebook_store";
import router from "../router/index";

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
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;
    },
  },
  actions: {
    logoutTimeOut({ commit }, expirationTime) {
      setTimeout(() => {
        commit("clearAuthData");
      }, expirationTime * 1000);
    },
    async register({ commit, dispatch }, authData) {
      try {
        const res = await axios.post(
          "/accounts:signUp?key=AIzaSyB1aNPUkHwmt6pUIqc8uY-jzJjcNunE11M",
          {
            password: authData.password,
            email: authData.email,
            returnSecureToken: true,
          }
        );
        console.log("register user", res);
        commit("authUser", {
          token: res.data.idToken,
          userId: res.data.localId,
        });
        const now = new Date();
        const expirationDate = new Date(
          now.getTime() + res.data.expiresIn * 1000
        );
        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("userId", res.data.localId);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch("storeUser", authData);
        dispatch("setLogoutTimer", res.data.expiresIn);
        router.replace("/dashboard");
        console.log(res);
        return res;
      } catch (error) {
        console.log("store error message", error);
        throw new Error(error.message);
      }
    },
    // login({ commit, dispatch }, authData) {
    //   axios
    //     .post(
    //       "/accounts:signInWithPassword?key=AIzaSyBhxGdYRACnq1OFNNwVMcpUAGcgQmAlV1g",
    //       {
    //         email: authData.email,
    //         password: authData.password,
    //         returnSecureToken: true,
    //       }
    //     )
    //     .then((res) => {
    //       console.log("login res", res);
    //       commit("authUser", {
    //         token: res.data.idToken,
    //         userId: res.data.localId,
    //       });
    //       const now = new Date();
    //       const expirationDate = new Date(
    //         now.getTime() + res.data.expiresIn * 1000
    //       );
    //       localStorage.setItem("token", res.data.idToken);
    //       localStorage.setItem("expirationDate", expirationDate);
    //       localStorage.setItem("userId", res.data.localId);
    //       router.replace("/dashboard");
    //       dispatch("logoutTimeOut", res.data.expiresIn);
    //       return res;
    //     })
    //     .catch((err) => {
    //       console.log("store error async", err);
    //       const error = JSON.stringify(err);
    //       return error;
    //     });
    // },

    async login({ commit, dispatch }, authData) {
      try {
        const res = await axios.post(
          "/accounts:signInWithPassword?key=AIzaSyBhxGdYRACnq1OFNNwVMcpUAGcgQmAlV1g",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          }
        );
        commit("authUser", {
          token: res.data.idToken,
          userId: res.data.localId,
        });
        const now = new Date();
        const expirationDate = new Date(
          now.getTime() + res.data.expiresIn * 1000
        );
        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", res.data.localId);
        router.replace("/dashboard");
        dispatch("logoutTimeOut", res.data.expiresIn);
        console.log("login res", res);
        return res;
      } catch (error) {
        console.log("store error async", error);
        throw new Error(error.message);
      }
    },
    tryAutoLogin({ commit }) {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const now = new Date();
      const expirationDate = localStorage.getItem("expirationDate");
      if (now >= expirationDate) {
        return;
      }
      const userId = localStorage.getItem("userId");
      commit("authUser", {
        token: token,
        userId: userId,
      });
    },
    logout({ commit }) {
      commit("clearAuthData");
      localStorage.removeItem("token");
      localStorage.removeItem("expirationDate");
      localStorage.removeItem("userId");
      router.replace("/login");
    },

    storeUsers({ commit, state }, userData) {
      if (!state.idToken) {
        return;
      }
      globalAxios
        .post("/userData.json" + "?auth=" + state.idToken, userData)
        .then((res) => console.log("storeUser", res))
        .catch((err) => console.log(err));
    },
    fetchUser({ commit, state }) {
      if (!state.idToken) {
        return;
      }
      globalAxios
        .get("/userData.json" + "?auth=" + state.idToken)
        .then((res) => {
          console.log("fetch user", res);
          const data = res.data;
          const users = [];
          for (let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          console.log("users data", users);
          commit("storeUser", users[0]);
        });
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  modules: {
    book_store,
    ebook_store,
  },
});
