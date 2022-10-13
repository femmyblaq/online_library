<template>
  <div>
    <div
      class="main-view p-4"
      :class="{ slideMain: toggleSideBar, footerMenu: footerSlide }"
    >
      <router-view> </router-view>
      <!-- <div
        class="footer bg-info d-flex justify-content-between align-items-center position-absolute bottom-0"
      >
        <p>LibraryTuT &copy;</p>
        <p>Designed by <span style="#E75480">DevHY</span></p>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    toggleSideBar() {
      return this.$store.getters.toggleSide;
    },
    footerSlide() {
      return this.$store.getters.slideFoota;
    },
  },
};
</script>
<style>
.main-view {
  height: 94%;
  left: 22%;
  /* margin-left: 22%; */
  border: 1px solid black;
  width: 78%;
  position: absolute;
  transition: 0.5s ease all;
}
.slideMain {
  width: 100% !important;
  left: 0 !important;
}
.footerMenu {
  width: 96% !important;
  left: 4% !important;
}
.footer {
  height: 50px;
  width: 100%;
}

@media (min-width: 280px) and (max-width: 480px) {
  .main-view {
    padding: 10px 0 !important;
  }
}
</style>
