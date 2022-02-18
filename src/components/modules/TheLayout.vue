<template>
  <div class="dashboard">
    <div v-if="toggleMobileNav">
      <transition name="slides">
        <appSideBar></appSideBar>
      </transition>
    </div>
    <appHeader></appHeader>
    <main>
      <div
        :class="{ width: !toggleMobileNav }"
        class="content-in-main position-absolute end-0"
        style="top: 60px; border: 1px solid #000; height: 92vh; width: 78%"
      >
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import appSideBar from "./TheSideBar.vue";
import appHeader from "./TheHeader.vue";
export default {
  components: {
    appSideBar,
    appHeader,
  },
  computed: {
    toggleMobileNav() {
      return this.$store.getters.mobileNav;
    },
  },
  created() {
    const checkScreen = this.$store.dispatch("checkScreenSize");
    console.log("checkscreen event >> ", checkScreen);
    window.addEventListener("resize", checkScreen);
  },
  methods: {},
};
</script>

<style lang="scss">
.slides-enter-active,
.slides-enter-leave {
  transition: 0.8s ease all;
}
.slides-enter-from,
.slides-enter-to {
  transform: translateX(-22%);
}
.dashboard .width {
  width: 100% !important;
}
@media (min-width: 315px) and (max-width: 768px) {
  main .content-in-main {
    width: 100% !important;
  }
}
</style>
