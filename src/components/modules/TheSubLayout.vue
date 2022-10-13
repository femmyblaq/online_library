<template>
  <div class="dashboard">
    <appSideBar></appSideBar>
    <appHeader></appHeader>
    <main>
      <div
        :class="{ slideMain: toggleSideBar, footerMenu: footerSlide }"
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
.dashboard .width {
  width: 100% !important;
}
@media (min-width: 315px) and (max-width: 768px) {
  main .content-in-main {
    width: 100% !important;
  }
}
</style>
