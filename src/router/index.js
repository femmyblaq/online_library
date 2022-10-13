import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
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
    name: "Home",
    component: Home,
    mata: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    mata: {
      title: "About",
    },
  },
  {
    path: "/dashboard",
    component: TheLayout,
    mata: {
      title: "Dashboard",
    },
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
        name: "Dashboard",
        component: () => import("../components/Dashboard.vue"),
        beforeEnter(from, to, next) {
          if (store.state.idToken) {
            next();
          } else {
            next("/login");
          }
        },
        mata: {
          title: "Dashboard - Home",
        },
      },
      {
        path: "/category",
        name: "Categories",
        component: () => import("../components/Categories.vue"),
        mata: {
          title: "Category",
        },
      },
    ],
  },
  {
    path: "/dashboard",
    component: TheSubLayout,
    children: [
      {
        path: "/category/:computer_science",
        name: "ComputerScience",
        component: () => import("../components/ComputerScience.vue"),
        mata: {
          title: "Computer Science",
        },
      },
      {
        path: "/category/:mathematics",
        name: "Mathematics",
        component: () => import("../components/ComputerScience.vue"),
        mata: {
          title: "mathematics",
        },
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
    meta: {
      title: "Register",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
