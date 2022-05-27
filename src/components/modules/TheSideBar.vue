/*****
<template>
  <div>
    <!-- <div v-if="mobileNavs"> -->
    <div id="sidebar">
      <div class="sidebar-content vh-100 bg-primary shadow">
        <div class="w-75 p-3 m-auto brand d-flex">
          <img
            src="../../assets/Category_img/icons/LibraryLogoWhite.png"
            alt=""
          />
        </div>

        <ul class="list-unstyled mt-2">
          <router-link
            tag="li"
            class="p-2"
            to="/dashboard"
            active-class="active"
            ><a class="links mb-2 text-decoration-none fs-6 text-white"
              ><span class="me-2"><i class="fas fa-home"></i></span> Home</a
            ></router-link
          >
          <router-link tag="li" class="p-2" to="/category" active-class="active"
            ><a class="links mb-2 text-decoration-none fs-6 text-white"
              ><span class="me-2"
                ><i class="fa fa-list-alt" aria-hidden="true"></i
              ></span>
              Categories</a
            ></router-link
          >
          <router-link
            tag="li"
            class="p-2"
            to="/dashboard"
            active-class="active"
            ><a class="links mb-2 text-decoration-none fs-6 text-white"
              ><span class="me-2"><i class="far fa-bookmark"></i></span> Saved
              for Later</a
            ></router-link
          >
          <router-link
            tag="li"
            class="p-2"
            to="/dashboard"
            active-class="active"
            ><a class="links mb-2 text-decoration-none fs-6 text-white"
              >Account</a
            ></router-link
          >
        </ul>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  // computed: {
  //   closeSideBar() {
  //     return this.$store.dispatch("toggleNav");
  //   },
  //},
};
</script>
<style lang="scss">
#header .dropdown .dropdown-toggle::after {
  content: none;
}
#sidebar .sidebar-content {
  width: 22%;
  position: fixed;
}
#sidebar .bg-primary {
  background-color: #00001f !important;
}
#sidebar .show {
  display: none;
}
#sidebar .list-unstyled li {
  border-left: 2px solid #ac7d0c;
}
#sidebar .list-unstyled .active {
  background-color: #101557;
}
#sidebar .list-unstyled li:hover {
  background-color: #ac7d0c;
}
// Animating the sideBar

@media (min-width: 280px) and (max-width: 620px) {
  #header .header-content {
    width: 100% !important;
    position: relative !important;
  }
  #sidebar .sidebar-content h5 {
    font-size: 1.4rem;
  }
  #sidebar .sidebar-content {
    width: 100% !important;
    max-width: 180px !important;
    height: 100vh !important;
    padding: 0 !important;
    background-color: #00001f !important;
    position: fixed !important;
    top: 0;
    left: 0;
    z-index: 1;
  }
  #sidebar .sidebar-content .brand {
    margin: 0 !important;
    padding: 5px;
    width: 100% !important;
  }
  #sidebar .sidebar-content .list-unstyled .links {
    padding: 10px !important;
    margin-bottom: 15px;
  }
}
@media (min-width: 310px) and (max-width: 660px) {
  #header .header-content {
    width: 100% !important;
    position: relative !important;
  }
  #sidebar .sidebar-content {
    width: 100% !important;
    max-width: 250px !important;
    height: 100vh !important;
    padding: 10px !important;
    background-color: #00001f !important;
    position: fixed !important;
    top: 0;
    left: 0;
    z-index: 1;
  }
  #sidebar .sidebar-content .brand {
    margin: 0 !important;
    width: 100% !important;
  }
  #sidebar .sidebar-content .list-unstyled .links {
    padding: 10px !important;
    margin-bottom: 15px;
  }
}
@media (min-width: 400px) and (max-width: 980px) {
  #header .header-content {
    width: 100% !important;
    position: relative !important;
  }
  #sidebar .sidebar-content {
    width: 100% !important;
    max-width: 250px !important;
    height: 100vh !important;
    padding: 10px !important;
    background-color: #00001f !important;
    position: fixed !important;
    top: 0;
    left: 0;
    z-index: 1;
  }
  #sidebar .sidebar-content .brand {
    margin: 0 !important;
    width: 100% !important;
  }
  #sidebar .sidebar-content .list-unstyled .links {
    padding: 10px !important;
    margin-bottom: 15px;
  }
}
</style>
