<template>
  <div id="what-people-say" class="p-5">
    <h1 class="text-white text-center">
      What other student have said about us
    </h1>
    <div class="d-inline-flex m-0 mt-3 p-0 card-track bg-success" ref="card">
      <Comment v-for="what in whatStudentSaid" :what="what" :key="what.id" />
    </div>
    <div class="nav m-0">
      <div class="left bg-light">
        <i class="fa-solid fa-angle-left"></i>
      </div>
      <div class="indicators d-inline-flex mx-auto">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="right">
        <i class="fa-solid fa-angle-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
import Comment from "./Comment.vue";
export default {
  data() {
    return {
      whatStudentSaid: [
        {
          message:
            "Online Library has been the best learning platform that have known, they also have a tutorial for better understanding of some complex courses and it is very efficient for learning purpose. Thank you Online Library.",
          firstName: "Usman",
          lastName: "Salami",
          profile: "Student",
          color: "red",
        },
        {
          message:
            "Online Library has been the best learning platform that have known, they also have a tutorial for better understanding of some complex courses and it is very efficient for learning purpose. Thank you Online Library.",
          firstName: "Habeeb",
          lastName: "Yusuph",
          profile: "Student",
          color: "blue",
        },
        {
          message:
            "Online Library has been the best learning platform that have known, they also have a tutorial for better understanding of some complex courses and it is very efficient for learning purpose. Thank you Online Library.",
          firstName: "Omonigbo",
          lastName: "Nelson",
          profile: "Student",
          color: "green",
        },
        {
          message:
            "Online Library has been the best learning platform that have known, they also have a tutorial for better understanding of some complex courses and it is very efficient for learning purpose. Thank you Online Library.",
          firstName: "Basirat",
          lastName: "Sulaimon",
          profile: "Student",
          color: "orange",
        },
        {
          message:
            "Online Library has been the best learning platform that have known, they also have a tutorial for better understanding of some complex courses and it is very efficient for learning purpose. Thank you Online Library.",
          firstName: "Yusuph",
          lastName: "Husman",
          profile: "Student",
          color: "orange",
        },
        {
          message:
            "Online Library has been the best learning platform that have known, they also have a tutorial for better understanding of some complex courses and it is very efficient for learning purpose. Thank you Online Library.",
          firstName: "Tinuoye",
          lastName: "Ronke",
          profile: "Student",
          color: "orange",
        },
      ],
    };
  },
  methods: {
    next() {
      return this.$store.dispatch("nextRoll");
    },
  },
  computed: {
    transX() {
      return this.$store.state.nextRoll;
    },
  },
  components: {
    Comment,
  },
};
</script>
<style lang="scss" scoped>
#what-people-say {
  min-height: 80vh;
  width: 100%;
  background-color: rgb(1, 1, 39);
  // overflow: hidden;
  .card-track {
    overflow: hidden;
    width: 100%;
    transition: all 200ms;
  }
  .nav .left,
  .right {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    // position: absolute;
    // top: 50%;
    // transform: translateY(-50%);
    // z-index: 1;
    cursor: pointer;
    margin: auto;
    display: flex;
    place-items: center;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.9);
  }
  .indicators div {
    width: 4px;
    height: 4px;
    background-color: #fff;
    margin: 2px;
    border-radius: 10px;
    z-index: 1111;
  }
  .left {
    left: 10px;
  }
  .right {
    right: 10px;
  }
}
@media (min-width: 280px) and (max-width: 480px) {
  #what-people-say {
    padding: 20px !important;
  }
}
</style>
