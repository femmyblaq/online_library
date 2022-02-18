import books from "../../data/books_data";

const state = {
  books: [],
  mobile: null,
  mobileNav: null,
  windowWidth: null,
};

const mutations = {
  SET_BOOKS(state, books) {
    state.books = books;
  },
  CHECK_SCREEN(state) {
    state.windowWidth = window.innerWidth;
    if (state.windowWidth <= 750) {
      // state.mobile = true;
      state.mobileNav = false;
    }
    // state.mobile = false;
    state.mobileNav = true;

    console.log(
      "Mutation windowWidth",
      state.windowWidth,
      state.mobile,
      state.mobileNav
    );
    return;
  },
  TOGGLE_NAV(state) {
    state.mobileNav = !state.mobileNav;
  },
};

const actions = {
  initBooks: ({ commit }) => {
    commit("SET_BOOKS", books);
  },
  checkScreenSize: ({ commit }) => {
    commit("CHECK_SCREEN");
  },
  toggleNav: ({ commit }) => {
    commit("TOGGLE_NAV");
  },
};

const getters = {
  books: (state) => {
    return state.books;
  },
  mobileNav: (state) => {
    return state.mobileNav;
  },
  // mobile: (state) => {
  //   return state.mobile;
  // },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
