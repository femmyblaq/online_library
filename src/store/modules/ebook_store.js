import datas from "../../data/books_data";
const state = {
  ebooks: [],
};
const mutations = {
  SET_EBOOKS(state) {
    for (let i = 0; i < datas.length; i++) {
      state.ebooks = datas[i].ebooks;
      // for (let j = 0; j < state.ebooks.length; j++) {
      //   state.ebooks = ebooks[i].ebooks[j];
      //   console.log("state ebook 01", state.ebooks);
      // }
    }
    // state.ebooks = ebooks;
    console.log("state ebook 02", state.ebooks);
  },
};
const actions = {
  setEbooks({ commit }) {
    commit("SET_EBOOKS", datas);
  },
};
const getters = {
  ebook(state) {
    return state.ebooks;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
