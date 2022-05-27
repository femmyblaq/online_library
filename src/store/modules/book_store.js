import books from "../../data/books_data";

const state = {
  books: [],
  mobile: null,
  mobileNav: null,
  windowWidth: null,
};

const mutations = {
  SET_BOOKS(state, books) {
    for (let i = 0; i < books.lenght; i++) {
      for (let j = 0; j < books[i].computerScience.length; j++) {
        state.books = books[i].computerScience[j];
        console.log(books[i].computerScience[j]);
      }
    }
  },
  CHECK_SCREEN(state) {
    state.windowWidth = window.innerWidth;
    if (state.windowWidth >= 750) {
      state.mobile = false;
      state.mobileNav = true;
    } else {
      state.mobile = true;
      state.mobileNav = false;
    }

    console.log(
      "Mutation windowWidth",
      state.windowWidth,
      state.mobile,
      state.mobileNav
    );
  },
  TOGGLE_NAV(state) {
    state.mobileNav = !state.mobileNav;
  },
  TOGGLE_MOBO(state) {
    window.document.addEventListener("click", () => {
      if (state.mobile) {
        state.mobileNav = false;
      }
      console.log(state.mobileNav, state.mobile);
    });
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
  toggleMobile: ({ commit }) => {
    commit("TOGGLE_MOBO");
  },
};

const getters = {
  books: (state) => {
    return state.books;
  },
  mobileNav: (state) => {
    return state.mobileNav;
  },
  mobile: (state) => {
    return state.mobile;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
