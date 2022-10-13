// const state = {
//   clickedMenu: false,
//   mobileView: false,
//   windowWidth: null,
//   footerSlide: false,
// };
// const mutations = {
// TOGGLE_MENU(state) {
//   state.clickedMenu = !state.clickedMenu;
//   state.mobileView = false;
//   if (state.footerSlide == true) {
//     state.footerSlide = false;
//   }
//   console.log("slide side", state.clickedMenu);
//   console.log("slide footer", state.footerSlide);
// },
// MOBILE_CHECKSCREEN(state) {
//   state.windowWidth = window.innerWidth;
//   if (state.windowWidth >= 750) {
//     state.mobileView = true;
//     state.clickedMenu = false;
//   } else {
//     state.mobileView = false;
//     state.clickedMenu = true;
//   }
// },
// SLIDE_FOOTER(state) {
//   state.footerSlide = !state.footerSlide;
//   console.log("slide side", state.clickedMenu);
//   console.log("slide footer", state.footerSlide);
// },
// };
// const actions = {
//   toggleMenu: ({ commit }) => {
//     commit("TOGGLE_MENU");
//   },
//   mobileView: ({ commit }) => {
//     commit("MOBILE_CHECKSCREEN");
//   },
//   slideFooter: ({ commit }) => {
//     commit("SLIDE_FOOTER");
//   },
// };
// const getters = {
//   toggleSide: (state) => {
//     return state.clickedMenu;
//   },
//   slideFooter: (state) => {
//     return state.clickedMenu;
//   },
// };

// export default {
//   state,
//   mutations,
//   actions,
//   getters,
// };
