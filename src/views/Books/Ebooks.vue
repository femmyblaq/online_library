<template>
  <div id="ebook">
    <div class="container-fluid p-0 mx-0 d-flex align-items-center">
      <h1 class="text-white"><span>E</span>BOOK</h1>
    </div>

    <div class="main-book-space">
      <div class="row p-5 m-0">
        <div class="col-lg-6 d-flex justify-content-center">
          <img src="../../assets/Ebooks-imgs/Google.jpeg" alt="" />
        </div>
        <div class="col-lg-6">
          <h2 class="fw-bold">Score up to 7+ band on your first IELTS exam</h2>
          <ul class="list-unstyled mt-3">
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              quae doloremque, ut exercitationem quas nulla?
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              quae doloremque, ut exercitationem quas nulla?
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              quae doloremque, ut exercitationem quas nulla?
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              quae doloremque, ut exercitationem quas nulla?
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              quae doloremque, ut exercitationem quas nulla?
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              quae doloremque, ut exercitationem quas nulla?
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              quae doloremque, ut exercitationem quas nulla?
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              quae doloremque, ut exercitationem quas nulla?
            </li>
          </ul>

          <button class="btn btn-success rounded-3 btn-block btn-lg w-100">
            Buy Price here <span></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    return this.$store.dispatch("setEbooks");
  },
  computed: {
    ebooks() {
      return this.$store.getters.ebooks;
    },
  },
};
</script>
<style lang="scss">
#ebook .container-fluid {
  height: 50vh;
  background-color: #000000;
}
#ebook .container-fluid span {
  background-color: darkgoldenrod;
  padding: 20px;
}
#ebook .container-fluid h1 {
  margin: auto 20px;
  font-size: 5rem;
  font-family: "Ubuntu", "Roboto";
}
.main-book-space ul li {
  line-height: 2;
}
</style>
