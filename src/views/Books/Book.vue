<template>
  <div
    id="book"
    class="col-lg-3 col-md-4 col-sm-6 my-3 d-flex justify-content-center"
  >
    <div class="card shadow-sm rounded-0" style="width: 15rem">
      <div
        class="img-background d-flex justify-content-center position-relative h-50"
      >
        <img :src="book.img" />
      </div>
      <div class="card-body pt-4 pb-0">
        <div class="card-text">
          <p class="m-0" style="font-size: 0.8rem">
            {{ book.type }}
          </p>
          <strong
            ><h5 class="m-0">
              {{ book.bookTitle }}
            </h5></strong
          >
          <div class="d-flex justify-content-between">
            <div>
              <ul class="list-unstyled d-flex d-inline mb-0 mt-3">
                <li><i class="far fa-star fa-1x"></i></li>
                <li><i class="far fa-star fa-1x"></i></li>
                <li><i class="far fa-star fa-1x"></i></li>
                <li><i class="far fa-star fa-1x"></i></li>
                <li><i class="far fa-star fa-1x"></i></li>
              </ul>
              <small class="small-0 m-0">0/5</small>
            </div>
            <i class="far fa-bookmark mt-3"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["book"],
};
</script>
<style lang="scss">
#book img {
  max-width: 180px;
  max-height: 230px;
  margin: auto;
}
#book .img-background {
  background-color: #faeed3;
}
</style>
