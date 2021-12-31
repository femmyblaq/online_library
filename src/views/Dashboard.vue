<template>
  <div class="dashboard position absolute">
    <h4 class="text-primary">WELCOME!</h4>
    <p>{{ email }}</p>
  </div>
</template>
<script>
export default {
  data() {},
  computed: {
    email() {
      return console.log(
        !this.$store.getters.user ? false : this.$store.getters.user.email
      );
    },
  },
  created() {
    this.$store.dispatch("fetchUser");
  },
};
</script>
