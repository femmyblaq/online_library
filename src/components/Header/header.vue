<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg navbar-dark px-lg-5 py-lg-3">
      <div class="container-fluid">
        <router-link to="{ name: Home }" class="navbar-brand">
          <img
            style="width: 150px"
            src="../../assets/Category_img/icons/LibraryTuT_white.png"
            alt=""
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <router-link tag="li" to="/" active-class="active"
              ><a class="nav-item nav-link">Home</a>
            </router-link>
            <router-link tag="li" to="/about" active-class="active">
              <a class="nav-item nav-link">About</a>
            </router-link>
            <router-link tag="li" to="/ebook" active-class="active">
              <a class="nav-item nav-link">Ebook</a>
            </router-link>
            <router-link tag="li" to="/audiobook" active-class="active">
              <a class="nav-item nav-link">AudioBooks</a>
            </router-link>
            <router-link tag="li" to="/blog" active-class="active">
              <a class="nav-item nav-link">Blog</a>
            </router-link>
            <router-link tag="li" to="/contact" active-class="active">
              <a class="nav-item nav-link">Contact Us</a>
            </router-link>
            <router-link
              tag="button"
              to="/login"
              class="btn btn-sm btn-outline-light"
              >Log In</router-link
            >
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../../assets/variable.scss";
.navbar {
  background-color: $background-color;
  font-family: $font-family;
}
.navbar .collapse ul li {
  font-family: $font-family;
  cursor: pointer;
}
@media (min-width: 315px) and (max-width: 768px) {
  .navbar {
    padding: 8px !important;
  }
  #header .container-fluid .navbar-brand {
    font-size: 1rem !important;
  }
  #header .container-fluid .navbar-brand span {
    font-size: 1rem !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .navbar {
    padding: 12px !important;
  }
  #header .container-fluid .navbar-brand {
    font-size: 1.3rem !important;
  }
  #header .container-fluid .navbar-brand span {
    font-size: 1.3rem !important;
  }
}
@media (min-width: 280px) and (max-width: 653px) {
  .navbar {
    padding: 8px !important;
  }
  #header .container-fluid .navbar-brand {
    font-size: 0.8rem !important;
  }
  #header .container-fluid .navbar-brand span {
    font-size: 0.8rem !important;
  }
}
</style>
