<template>
  <div id="app">
    <app-header
      v-if="!['Login', 'Register', 'Dashboard', 'help'].includes($route.name)"
    ></app-header>
    <router-view />
    <app-footer
      v-if="!['Login', 'Register', 'Dashboard', 'help'].includes($route.name)"
    ></app-footer>
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
};
</script>
