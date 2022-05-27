<template>
  <div id="staffs">
    <div class="row py-5 m-0">
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card position-relative">
          <img
            class="w-25 m-auto"
            src="../assets/Category_img/icons/icons8-reading-100.png"
            alt=""
          />
          <div class="links position-absolute text-center bg-dark">
            <a class="text-decodration-none text-white p-2" href=""
              ><i class="fab fa-facebook"></i></a
            ><a class="text-decodration-none text-white p-2" href=""
              ><i class="fab fa-twitter"></i
            ></a>
            <a class="text-decodration-none text-white p-2" href=""
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
          <div class="card-body text-center">
            <h5>Yusuph Habeeb</h5>
            <p>Staff</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card">
          <img
            class="w-25 m-auto"
            src="../assets/Category_img/icons/icons8-reading-100.png"
            alt=""
          />
          <div class="links position-absolute text-center bg-dark">
            <a class="text-decodration-none text-white p-2" href=""
              ><i class="fab fa-facebook"></i></a
            ><a class="text-decodration-none text-white p-2" href=""
              ><i class="fab fa-twitter"></i
            ></a>
            <a class="text-decodration-none text-white p-2" href=""
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
          <div class="card-body text-center">
            <h5>Yusuph Habeeb</h5>
            <p>Staff</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card">
          <img
            class="w-25 m-auto"
            src="../assets/Category_img/icons/icons8-reading-100.png"
            alt=""
          />
          <div class="links position-absolute text-center bg-dark">
            <a class="text-decodration-none text-white p-2" href=""
              ><i class="fab fa-facebook"></i></a
            ><a class="text-decodration-none text-white p-2" href=""
              ><i class="fab fa-twitter"></i
            ></a>
            <a class="text-decodration-none text-white p-2" href=""
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
          <div class="card-body text-center">
            <h5>Yusuph Habeeb</h5>
            <p>Staff</p>
          </div>
        </div>
      </div>
      <div class="links position-absolute text-center bg-dark">
        <a class="text-decodration-none text-white p-2" href=""
          ><i class="fab fa-facebook"></i></a
        ><a class="text-decodration-none text-white p-2" href=""
          ><i class="fab fa-twitter"></i
        ></a>
        <a class="text-decodration-none text-white p-2" href=""
          ><i class="fab fa-instagram"></i
        ></a>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="card p-0">
          <img
            class="w-25 m-auto"
            src="../assets/Category_img/icons/icons8-reading-100.png"
            alt=""
          />
          <div class="links position-absolute text-center bg-dark">
            <a class="text-decodration-none text-white p-2" href=""
              ><i class="fab fa-facebook"></i></a
            ><a class="text-decodration-none text-white p-2" href=""
              ><i class="fab fa-twitter"></i
            ></a>
            <a class="text-decodration-none text-white p-2" href=""
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
          <div class="card-body text-center">
            <h5>Yusuph Habeeb</h5>
            <p>Staff</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#staffs {
  .card {
    cursor: pointer;
    padding: 0 !important;
    &:hover .links {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
  .links {
    writing-mode: vertical-lr;
    text-orientation: upright;
    width: 30px;
    opacity: 0;
    padding: 10px 0 10px 5px;
    top: 17%;
    display: none;
    right: 0;
    a {
      cursor: pointer;
    }
  }
}
</style>
