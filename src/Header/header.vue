<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark px-lg-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Online <i class="fas fa-landmark fa-3"></i><br />
          <span style="font-size: 1rem">LIBRARY</span></a
        >
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
            <router-link tag="li" to="/" class="nav-item nav-link active"
              >Home
            </router-link>
            <router-link tag="li" to="/about" class="nav-item nav-link">
              About
            </router-link>
            <router-link tag="li" to="/about" class="nav-item nav-link">
              Ebook
            </router-link>
            <router-link tag="li" to="/about" class="nav-item nav-link">
              AudioBooks
            </router-link>
            <router-link tag="li" to="/blog" class="nav-item nav-link">
              Blog
            </router-link>
            <router-link tag="li" to="/contact" class="nav-item nav-link">
              Contact Us
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

<style lang="scss">
@import "../assets/variable.scss";
.navbar {
  background-color: $background-color;
  font-family: $font-family;
}
</style>
