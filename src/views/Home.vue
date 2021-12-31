<template>
  <div id="home" class="container-fluid p-0 m-0">
    <div class="overlay-container">
      <div class="overlay"></div>

      <div
        id="carouselExampleSlidesOnly"
        class="carousel"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../../public/img/girl-lib.jpg"
              class="d-block vh-75 vw-100"
              alt="Can't load image"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../public/img/lib-img22.jpg"
              class="d-block vh-75 vw-100"
              alt="Can't load image"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../public/img/lib-imgII .jpg"
              class="d-block vh-75 vw-100"
              alt="Can't load image"
            />
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center align-items-center w-100">
        <div class="text text-center m-auto w-75">
          <div class="text-white">
            <h1 class="fw-light fs-50">Online Library</h1>
            <p class="fw-light">Study at the comfort of your home.</p>
          </div>
          <div class="input-group mb-3 w-100">
            <input
              type="text"
              class="form-control rounded-0"
              placeholder="Search for your category of book..."
              aria-label="Search for your category of book..."
              aria-describedby="basic-addon2"
            />
            <button class="input-group-text btn btn-primary" id="basic-addon2">
              <i class="fas fa-search fa-3"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="book-choice container-fluid">
      <div class="row justify-content-center p-0 my-5 text-center">
        <h2 class="text-center mb-4">Your way of learning is our priority</h2>
        <div class="col-lg-2">
          <i class="fas fa-book-open fa-5x"></i>
          <p>Books</p>
        </div>
        <div class="col-lg-2">
          <i class="fas fa-headphones-alt fa-5x"></i>
          <p>AudioBooks</p>
        </div>
        <div class="col-lg-2">
          <i class="far fa-newspaper fa-7x" style="user-select: auto"></i>
          <p>Magazines</p>
        </div>
      </div>
    </div>
    <div class="quote bg-light p-5 text-center m-auto">
      <h3 class="lead w-50 m-auto">
        <i class="fas fa-quote-left fa-5 text-secondary"></i> Online Library
        System providing students the facility to learn, gather resources,
        promote group learning and improve knowledge and skills.
      </h3>
    </div>
    <div class="row p-0">
      <div class="col-lg-8 m-auto"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/variable.scss";
#home .overlay-container {
  position: $position;
  width: $width;
}
#home .overlay-container {
  .overlay {
    opacity: 50%;
    position: absolute;
    background-color: $color;
    z-index: $z-index;
    width: $width;
    height: $height;
  }
}
#home .text {
  position: absolute;
  z-index: $z-index;
  top: 30%;
}

#book-choice h2 {
  font-family: $font-family;
}

// Screen sizes Responsiveness
@media (min-width: 315px) and (max-width: 480px) {
  #home .overlay-container {
  }
  #home .text {
    position: absolute;
    z-index: $z-index;
    top: 30%;
  }
  .carousel-item img {
    height: 70vh;
  }
}
</style>
