<!-- <template>
  <div id="what-people-say" class="p-5 position-relative">
    <h1 class="text-white text-center">What</h1>
    <div class="row m-0 mt-3 p-0 card-track" ref="card">
      <Comment v-for="what in whatStudentSaid" :what="what" :key="what.id" />
    </div>
    <div class="nav">
      <button class="left start-0 ms-2" @click="slideLeft">
        <i class="fa-solid fa-angle-left my-auto mx-4 fs-4 fw-bolder"></i>
      </button>
      <button class="right end-0 me-2" @click="slideRight">
        <i class="fa-solid fa-angle-right my-auto mx-4 fs-4 fw-bolder"></i>
      </button>
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
      ],
      index: 0,
    };
  },
  mounted() {
    const cardTrack = this.$refs.card;
    console.log("client width", cardTrack.clientWidth);
  },
  methods: {
    slideLeft() {},
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
  .nav button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
}
</style> -->
