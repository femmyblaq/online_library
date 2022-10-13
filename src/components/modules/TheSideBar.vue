<template>
  <div>
    <div
      id="sidebar"
      class="position-fixed shadow"
      :class="{ slideFooter: footerSlide, slideSide: toggleSideBar }"
    >
      <div
        style="background-color: #010130"
        class="brand d-flex justify-content-around text-center p-3"
      >
        <img
          src="../../assets/Category_img/icons/LibraryTuT_white.png"
          class=""
          v-if="!footerSlide"
          v-show="!toggleSideBar"
        />
        <i
          v-else
          class="icons fa-solid fa-oil-well m-auto text-danger fa-2x"
        ></i>
        <h1
          class="text-secondary fw-bold d-lg-none my-auto"
          @click="menuToggle"
          v-show="!footerSlide"
        >
          &times;
        </h1>
      </div>
      <div class="sidebar-content d-flex justify-content-center">
        <ul class="list-unstyled navbar-nav w-100">
          <router-link tag="li" to="dashboard" active-class="active"
            ><a
              v-show="!toggleSideBar"
              class="nav-link text-decoration-none fs-6 py-2"
              ><span class="mx-3"><i class="fas fa-home"></i> </span>
              <span v-if="!footerSlide">Home</span></a
            >
          </router-link>
          <router-link tag="li" active-class="active" to="/category"
            ><a
              v-show="!toggleSideBar"
              class="nav-link text-decoration-none fs-6"
              ><span class="mx-3"
                ><i class="fa fa-list-alt" aria-hidden="true"></i
              ></span>
              <span v-if="!footerSlide">Categories</span>
            </a>
          </router-link>
          <router-link tag="li" to="save" active-class="active">
            <a
              v-show="!toggleSideBar"
              class="nav-link text-decoration-none fs-6"
              ><span class="mx-3"><i class="far fa-bookmark"></i></span>
              <span v-if="!footerSlide"> Saved for Later</span></a
            >
          </router-link>
          <router-link tag="li" to="/account" activeClass="active">
            <a
              v-show="!toggleSideBar"
              class="nav-link text-decoration-none fs-6"
              ><span class="mx-3"><i class="fa-regular fa-user"></i></span>
              <span v-if="!footerSlide"> Account</span></a
            >
          </router-link>
        </ul>
      </div>
      <div class="">
        <div
          @click="closeSide"
          class="sidebar-footer d-flex justify-content-end position-absolute bottom-0 fload-end"
          v-show="footerSlide"
        >
          <!-- <div class="d-flex justify-content-end align-items-center"> -->
          <i class="fa-solid fa-angle-right my-auto mx-4 fs-4 fw-bolder"></i>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // footerSlide: null,
    };
  },
  methods: {
    closeSide() {
      this.$store.dispatch("slideFooter");
      console.log("i got clicked");
    },
    menuToggle() {
      return this.$store.dispatch("toggleMenu");
    },
  },
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
<style lang="scss">
.slideSide {
  margin-left: -22% !important;
  transition: 0.5s ease all;
}
.slideFooter {
  width: 4% !important;
  transition: 0.5s ease all;
}
#sidebar {
  width: 22%;
  overflow: hidden;
  height: 100vh;
  z-index: 1;
  transition: 0.5s ease all;
  background-color: #00001f;
}
#sidebar .brand {
  min-height: 50px;
  width: 100%;
}
#sidebar .brand img {
  width: 70%;
}
#sidebar .nav-link {
  color: #ccc;
}
.icons {
  min-width: 40px;
  min-height: 40px;
}

#sidebar .sidebar-content ul li {
  width: 100%;
  color: #f0f0f0;
  cursor: pointer;
}
#sidebar .sidebar-content ul li a,
#sidebar .brand img {
  transition: 0.2s;
}
#sidebar .sidebar-content ul li.active {
  font-weight: 500;
  background-color: rgb(13, 1, 68);
}
#sidebar .sidebar-content ul li.active a {
  color: #fff;
}

#sidebar .sidebar-content ul li:hover {
  background-color: #010130;
  color: #fff !important;
}
#sidebar .sidebar-content ul li:hover a {
  color: #fff !important;
}
#sidebar .sidebar-footer {
  width: 100%;
  height: 50px;
  background-color: #010130;
  cursor: pointer;
  transition: all 1s;
}
#sidebar .sidebar-footer:hover {
  background-color: #010130;
  color: #fff !important;
}
#sidebar .sidebar-footer:hover i {
  color: #ccc;
}
#sidebar .sidebar-footer i {
  color: #929191;
  transition: color 1s;
}
/* @media (min-width: 340px) and (max-width: 720px) {
  .slideFooter {
    width: 40px !important;
  }
} */
</style>
