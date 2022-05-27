<template>
  <div id="dashboard" class="p-3">
    <div class="d-flex justify-content-center align-items-center">
      <div class="content-card row m-0 p-0">
        <!-- <div class="d-flex justify-content-evenly"> -->
        <div
          class="col-lg-3 col-md-6 col-sm-6 p-0 d-flex justify-content-center"
        >
          <div style="width: 250px" class="card shadow m-4 rounded-0">
            <img
              style="width: 100px; height: 100px"
              src="../assets/Category_img/icons/icons8-reading-100.png"
              alt=""
              class="m-auto"
            />
            <hr class="m-0 p-0" />
            <p class="bg-light fs-6 p-2 m-0 fw-bold">
              <span>Get access to over 3,000 books</span>
            </p>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-6 col-sm-6 p-0 d-flex justify-content-center"
        >
          <div style="width: 250px" class="card shadow m-4 rounded-0">
            <img
              style="width: 100px; height: 100px"
              src="../assets/Category_img/icons/icons8-desk-lamp-100.png"
              alt=""
              class="m-auto"
            />
            <hr class="m-0 p-0" />
            <p class="bg-light fs-6 p-2 m-0 fw-bold">
              <span>Read anywhere: on your smartphone, tablet or computer</span>
            </p>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-6 col-sm-6 p-0 d-flex justify-content-center"
        >
          <div style="width: 250px" class="card shadow m-4 rounded-0">
            <img
              style="width: 100px; height: 100px"
              src="../assets/Category_img/icons/icons8-desk-lamp-100.png"
              alt=""
              class="m-auto"
            />
            <hr class="m-0 p-0" />
            <p class="bg-light fs-6 p-2 m-0 fw-bold">
              <span>Read anywhere: on your smartphone, tablet or computer</span>
            </p>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-6 col-sm-6 p-0 d-flex justify-content-center"
        >
          <div style="width: 250px" class="card shadow m-4 rounded-0">
            <img
              style="width: 100px; height: 100px"
              src="../assets/Category_img/icons/icons8-desk-lamp-100.png"
              alt=""
              class="m-auto"
            />
            <hr class="m-0 p-0" />
            <p class="bg-light fs-6 p-2 m-0 fw-bold">
              <span>Read anywhere: on your smartphone, tablet or computer</span>
            </p>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
    <h1>Browse topic</h1>
    <h4>All books would be here with pagination function as well.</h4>
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p v-if="email" class="text-success fw-bolder">
      your email is: {{ email }}
    </p>
  </div>
</template>
<script>
export default {
  computed: {
    email() {
      return !this.$store.getters.user ? false : this.$store.getters.user.email;
    },
  },
  created() {
    this.$store.dispatch("fetchUser");
  },
};
</script>
<style lang="scss" scoped>
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #00001f;
  background-color: 0 !important;
  font-weight: 600;
  border-bottom: 3px solid #00001f !important;
}

.nav-tabs .nav-link {
  margin-bottom: -1px;
  background: 0 0;
  border: 1px solid transparent;
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}
</style>
