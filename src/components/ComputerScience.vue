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
        <p>{{ $route.params }}</p>
        <h3 class="fs-1 fw-bold" style="margin-top: 8rem">
          <img
            style="width: 80px; height: 80px"
            src="../assets/Category_img/computer-science-colour.svg"
            alt=""
          />
          Computer Science
        </h3>
      </div>
    </div>
    <div class="tabs my-5 mx-4">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <div
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            ref="filter"
            @click="toggleFilter"
          >
            <span>Level 1</span>
            <ul v-show="filterMenu" class="list-unstyled position-absolute">
              <li
                id="level-two"
                data-bs-toggle="tab"
                data-bs-target="#level"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Level 2
              </li>
              <li>Level 3</li>
              <li>Level 4</li>
            </ul>
          </div>
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
            Related books
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
            skills
          </button>
        </li>
      </ul>
      <div class="tab-content mt-4" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div v-if="level" id="levelOne">
            <h1>Level one</h1>
            <app-book></app-book>
          </div>
          <h1>Level two</h1>

          <app-book></app-book>
          <h1>Level Three</h1>
          <app-book></app-book>
          <div v-if="selectedLevel == 'level Four'" id="levelThree">
            <h1>Level Three</h1>
            <app-book></app-book>
          </div>
        </div>
        <div
          class="tab-pane fade show"
          id="level"
          role="tabpane1"
          aria-labelledby="level-two"
        >
          <h1>Level Three</h1>
          <app-book></app-book>
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <h1>Level one</h1>
          <app-book></app-book>
        </div>
        <div
          class="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        ></div>
      </div>
    </div>
    <!-- Select Tab  -->
    <div class="w-25 pb-5">
      <select name="level" id="level" class="" v-model="levels">
        <option :value="level.id" v-for="level in levels" :key="level">
          {{ level.text }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
import appBook from "../views/Books/Books.vue";
export default {
  data() {
    return {
      filterMenu: false,
      levels: [
        { id: 1, text: "Level 1" },
        { id: 2, text: "Level 2" },
        { id: 3, text: "Level 3" },
        { id: 4, text: "Level 4" },
      ],
    };
  },
  methods: {
    toggleFilter() {
      this.filterMenu = !this.filterMenu;
    },
  },
  components: {
    appBook,
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
  .nav-link {
    ul {
      transition: display 1s;
    }
  }
}
</style>
