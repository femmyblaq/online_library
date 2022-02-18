<template>
  <div id="app">
    <app-header
      v-if="
        ![
          'Login',
          'Register',
          'Dashboard',
          'Book',
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
          'Book',
          'Ebook',
          'Audiobook',
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
import appHeader from "./Header/header.vue";
import appFooter from "./Footer/Footer.vue";
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
