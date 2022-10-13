<template>
  <div id="computer-science" class="container-fluid m-0 p-0">
    <div class="d-flex align-items-end justify-content-between shadow-sm">
      <img
        style="width: 350px; height: 250px"
        class="position-absolute shadow-small end-0"
        src="../assets/Category_img/mainBackgroud.png"
        alt=""
      />

      <div class="position-relative ms-4 pt-5">
        <!-- <p>{{ $route.params }}</p> -->
        <h3 class="fs-1 fw-bold" style="margin-top: 8rem">
          <img
            style="width: 80px; height: 80px"
            src="../assets/Category_img/computer-science-colour.svg"
            alt=""
          />
          {{ computerScience[0].category }}
        </h3>
      </div>
    </div>
    <div class="tabs my-5 mx-4">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Books <span></span>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Related books <span></span>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Videos <span></span>
          </button>
        </li>
      </ul>
      <div class="tab-content mt-4" id="myTabContent">
        <div
          class="tab-pane fade"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          Books
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          Profile tab
        </div>
        <div
          class="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          Dont know
        </div>
      </div>
    </div>
    <!-- Select Tab  -->
    <!-- <div class="w-25 pb-5 form-group">
      <select name="level" id="level" class="form-control" v-model="levels">
        <option :value="level.id" v-for="level in levels" :key="level.id">
          {{ level.text }}
        </option>
      </select>
    </div> -->
  </div>
</template>
<script>
// import appBook from "../views/Books/Books.vue";
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("initBooks");
    console.log(this.computerScience);
  },
  computed: {
    computerScience() {
      return this.$store.getters.books.filter(
        (el) => el.category === "Computer Science"
      );
      // cs.filter(el => el.category === "Computer Science");
      // return
    },
  },
  mounted() {
    this.computer_science = this.$route.params.this.computerScience;
    console.log("Mounted Route", this.computer_science);
  },
  methods: {
    toggleFilter() {
      this.filterMenu = !this.filterMenu;
    },
  },
  components: {
    // appBook,
  },
};
</script>
<style lang="scss">
#computer-science img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 400px;
}
.tabs {
  .nav-tabs {
    border-bottom: none;
  }
  .nav-link {
    margin: 0 20px;
    border-radius: 5px;
    background-color: #ddd;
    color: #000;
    ul {
      transition: display 1s;
    }
  }
  .nav-link.active {
    background-color: rgb(252, 63, 167);
    color: #fff;
  }
}
</style>
