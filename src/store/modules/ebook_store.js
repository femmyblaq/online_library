import datas from "../../data/books_data";
const state = {
  ebooks: [],
  nextRoll: null,
};
const mutations = {
  SET_EBOOKS(state) {
    for (let i = 0; i < datas.length; i++) {
      state.ebooks = datas[i].ebooks;
      // let ebooks = datas[i].ebooks;
      // for (let k = 0; k < ebooks.length; k++) {
      //   state.ebooks = ebooks.ebooks[k];
      // }
    }
    // for (let data in datas) {
    //   state.ebooks = data;
    // }
    // state.ebooks = datas;
    console.log("state ebook", state.ebooks);
  },
};
const actions = {
  setEbooks({ commit }) {
    commit("SET_EBOOKS", datas.ebooks);
  },
  nextRoll({ commit }) {
    commit("NEXT");
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
