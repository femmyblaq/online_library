<template>
  <div id="app">
    <app-header
      v-if="
        ![
          'Login',
          'Register',
          'Dashboard',
          'ComputerScience',
          'Book',
          'TheLayout',
          'Categories',
          'help',
        ].includes($route.name)
      "
    ></app-header>
    <router-view />
    <app-footer
      v-if="
        ![
          'Login',
          'Register',
          'Dashboard',
          'ComputerScience',
          'Book',
          'Ebook',
          'Audiobook',
          'TheLayout',
          'Categories',
          'help',
        ].includes($route.name)
      "
    ></app-footer>
    <notifications group="foo" />
  </div>
</template>

<style lang="scss"></style>
<script>
import appHeader from "./components/Header/header.vue";
import appFooter from "./components/Footer/Footer.vue";
export default {
  components: {
    appHeader,
    appFooter,
  },
  created() {
    this.$store.dispatch("tryAutoLogin");
    this.$store.dispatch("initBooks");
  },
};
</script>
