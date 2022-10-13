<template>
  <div id="categories">
    <div class="container-fluid m-0">
      <appCategory />
    </div>
  </div>
</template>
<script>
import appCategory from "../views/BookCategory.vue";
export default {
  components: {
    appCategory,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto&family=Ubuntu:wght@400;500;700&display=swap");
#categories .container-fluid {
  p {
    font-size: 1.2rem;
    font-weight: 600;
    font-family: "Ubuntu", "Roboto";
    color: #000;
  }
  small {
    font-size: 0.9rem;
  }
}
@media (min-width: 280px) and (max-width: 480px) {
  #categories {
    padding: 0 !important;
  }
}
</style>
