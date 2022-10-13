<!-- <template>
  <div id="header">
    <div
      style="width: 78%"
      :class="{ width: togglewidth }"
      class="header-content shadow p-2 px-4 m-o d-flex position-absolute top-0 end-0"
    >
      <span @click="toggleMobileNav" class="fs-4"
        ><i class="fas fa-bars"></i
      ></span>
      <div class="input-group w-75 mx-auto">
        <input
          type="text"
          class="form-control rounded-3 bd-1"
          placeholder="Search for your category of book..."
          aria-label="Search for your category of book..."
          aria-describedby="basic-addon2"
        />
        <button
          class="input-group-text btn btn-light text-dark"
          id="basic-addon2"
        >
          <i class="fas fa-search fa-3"></i>
        </button>
      </div>
      <div class="dropdown ms-auto">
        <div
          class="dropdown-toggle px-2 py-1 bg-dark rounded-2"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <p class="text-white fw-bold fs-5 m-0 px-1 text-capitalize">
            {{ userName }}
          </p>
        </div>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li style="padding: 0.25rem 1rem" class="fs-5 fw-bold pb-0">
            {{ fullNames }}
          </li>
          <li style="padding: 0.25rem 1rem" class="pt-0">{{ email }}</li>
          <hr class="m-0" />
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" @click="logout">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    userName() {
      return !this.$store.getters.user
        ? false
        : this.$store.getters.user.last_name.slice(-1);
    },
    fullNames() {
      return (
        this.$store.getters.user.first_name +
        " " +
        this.$store.getters.user.last_name
      );
    },
    email() {
      return !this.$store.getters.user ? false : this.$store.getters.user.email;
    },
    togglewidth() {
      return !this.$store.getters.mobileNav;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    toggleMobileNav() {
      return this.$store.dispatch("toggleNav");
    },
  },
};
</script>
<style lang="scss">
#header .dropdown .dropdown-toggle::after {
  content: none;
}
#header .width {
  width: 100% !important;
}
@media (min-width: 315px) and (max-width: 480px) {
  #header .header-content {
    width: 100% !important;
  }
}
</style> -->

<template>
  <div>
    <div
      id="header-dash"
      :class="{ slideHeader: toggleSideBar, footerSlide: footerSlide }"
      class="shadow-sm bg-light ms-auto position-relative"
    >
      <div class="bar position-absolute top-50 ms-4" @click="menuToggle">
        <span></span>
        <span class="mt-1"></span>
        <span class="mt-1"></span>
      </div>

      <!-- <div class="dropdown position-absolute ms-auto">
        <div
          class="dropdown-toggle px-2 py-1 bg-dark rounded-2"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <p class="text-white fw-bold fs-5 m-0 px-1 text-capitalize">
            {{ userName }}
          </p>
        </div>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li style="padding: 0.25rem 1rem" class="fs-5 fw-bold pb-0">
            {{ fullNames }}
          </li>
          <li style="padding: 0.25rem 1rem" class="pt-0">{{ email }}</li>
          <hr class="m-0" />
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" @click="logout">Logout</a></li>
        </ul>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  methods: {
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
<style>
#header-dash {
  height: 50px;
  width: 78%;
  transition: 0.5s ease all;
  z-index: 1;
}
#header-dash .bar {
  transform: translateY(-50%);
  cursor: pointer;
  width: 50px;
}
.bar span {
  width: 20px;
  height: 3px;
  /* margin: 5px 5px; */
  border-radius: 5px;
  background-color: #757575;
  display: flex;
  flex-direction: column;
}
.slideHeader {
  width: 100% !important;
  left: 0;
}
.footerSlide {
  width: 96% !important;
}
@media (min-width: 820px) and (max-width: 1180px) {
  #header-dash {
    width: 63.5%;
  }
  .slideHeader {
    width: 100% !important;
  }
}
@media (min-width: 768px) and (max-width: 819px) {
  #header-dash {
    width: 60.8%;
  }
  .slideHeader {
    width: 100% !important;
  }
}
</style>
