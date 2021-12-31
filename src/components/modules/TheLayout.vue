<template>
  <div class="dashboard">
    <appSideBar></appSideBar>
    <appHeader></appHeader>
    <appMainView></appMainView>
  </div>
</template>

<script>
import appSideBar from "./TheSideBar.vue";
import appHeader from "./TheHeader.vue";
import appMainView from "./TheMainView.vue";
export default {
  components: {
    appSideBar,
    appHeader,
    appMainView,
  },
};
</script>
