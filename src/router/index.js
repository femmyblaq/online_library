import Vue from "vue";
import VueRouter from "vue-router";
import Hero from "../views/Home.vue";
import ContactPage from "../views/ContactPage";
import LoginPage from "../views/Login.vue";
import RegisterPage from "../views/Register.vue";
import TheLayout from "../components/modules/TheLayout.vue";
import EbookPage from "../views/Books/Ebooks.vue";
import AudioBookPage from "../views/AudioBooks/AudioBook.vue";
import BookPage from "../views/Book.vue";
import TheSubLayout from "../components/modules/TheSubLayout.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Hero",
    component: Hero,
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/dashboard",
    component: TheLayout,
    // beforeEnter(from, to, next) {
    //   if (!store.state.idToken) {
    //     next();
    //   } else {
    //     next("/login");
    //   }
    // },
    children: [
      {
        path: "/dashboard",
        name: "Home",
        component: () => import("../components/Dashboard.vue"),
        beforeEnter(from, to, next) {
          if (store.state.idToken) {
            next();
          } else {
            next("/login");
          }
        },
      },
      {
        path: "/category",
        name: "Categories",
        component: () => import("../components/Categories.vue"),
      },
    ],
  },
  {
    path: "/sublayout",
    component: TheSubLayout,
    children: [
      {
        path: "/computer_science",
        name: "ComputerScience",
        component: () => import("../components/ComputerScience.vue"),
      },
      {
        path: "/category",
        name: "Mathematics",
        component: () => import("../components/ComputerScience.vue"),
      },
    ],
  },
  {
    path: "/book/:id",
    name: "Book",
    component: BookPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
  {
    path: "/ebook",
    name: "Ebook",
    component: EbookPage,
  },
  {
    path: "/audiobook",
    name: "Audiobook",
    component: AudioBookPage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
