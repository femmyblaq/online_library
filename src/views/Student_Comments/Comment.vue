<template>
  <div class="">
    <!-- <carousel :items-to-show="1.5">
      <slide v-for="slide in 10" :key="slide">
        {{ slide }} -->

    <div class="custom-card">
      <p>{{ what.message }}</p>
      <div class="d-inline-flex">
        <span
          class="d-flex justify-content-center align-items-center me-3 text-white fw-bolder text-capitalize"
          :style="{ backgroundColor: what.color }"
          >{{ what.lastName.substring(0, 1).toUpperCase() }}</span
        >
        <div class="profile">
          <h6 class="mb-0">
            {{ what.lastName }}
            {{ what.firstName }}
          </h6>
          <p>{{ what.profile }}</p>
        </div>
      </div>
    </div>
    <!-- </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel> -->
  </div>
</template>
<script>
// import "vue3-carousel/dist/carousel.css";
// import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  props: ["what"],
  // components: {
  //   Carousel,
  //   Slide,
  //   Pagination,
  //   Navigation,
  // },
};
</script>
<style lang="scss">
.custom-card {
  width: 250px;
  max-height: 400px;
  padding: 10px;
  margin: 20px 15px;
  z-index: 1;
  background: #fff;
  border-top-right-radius: 9px;
  border-bottom-left-radius: 9px;
  border-top-left-radius: 9px;
  cursor: pointer;
  span {
    width: 40px;
    height: 40px;
    background-color: #000;
    border-radius: 50%;
    // text-transform: capitalize;
  }
}
</style>
