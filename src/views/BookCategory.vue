<template>
  <div id="book_category" class="row p-0 m-0">
    <div class="col-lg-3 col-md-4 col-sm-6">
      <router-link
        to="category/:computer_science"
        class="text-decoration-none text-dark"
      >
        <div class="card shadow m-3 bg-light">
          <div class="card-body text-center">
            <img
              src="../assets/Category_img/icons/icons8-physics-50.png"
              alt=""
              style="width: 40px; height: 40px"
            />
            <h4>Physics</h4>
          </div>
        </div>
      </router-link>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
      <router-link
        to="category/:mathematics"
        class="text-decoration-none text-dark"
      >
        <div class="card shadow m-3 bg-light">
          <div class="card-body text-center">
            <img
              src="../assets/Category_img/architecture-colour.svg"
              alt=""
              style="width: 40px; height: 40px"
            />
            <h4>Civil Engineer</h4>
          </div>
        </div>
      </router-link>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card shadow m-3 bg-light">
        <div class="card-body text-center">
          <img
            src="../assets/Category_img/icons/icons8-biotech-50.png"
            alt=""
            style="width: 40px; height: 40px"
          />
          <h4>Biological Science</h4>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card shadow m-3 bg-light">
        <div class="card-body text-center">
          <img
            src="../assets/Category_img/mathematics-colour.svg"
            alt=""
            style="width: 40px; height: 40px"
          />
          <h4>Mathematics</h4>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card shadow m-3 bg-light">
        <div class="card-body text-center">
          <img
            src="../assets/Category_img/icons/icons8-economics-64.png"
            alt=""
            style="width: 40px; height: 40px"
          />
          <h4>Economics</h4>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card shadow m-3 bg-light">
        <div class="card-body text-center">
          <img
            src="../assets/Category_img/design-colour.svg"
            alt=""
            style="width: 40px; height: 40px"
          />
          <h4>Designers</h4>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card shadow m-3 bg-light">
        <div class="card-body text-center">
          <img
            src="../assets/Category_img/art-colour.svg"
            alt=""
            style="width: 40px; height: 40px"
          />
          <h4>Art</h4>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card shadow m-3 bg-light">
        <div class="card-body text-center">
          <img
            src="../assets/Category_img/history-colour.svg"
            alt=""
            style="width: 40px; height: 40px"
          />
          <h4>History</h4>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card shadow m-3 bg-light">
        <div class="card-body text-center">
          <img
            src="../assets/Category_img/business-colour.svg"
            alt=""
            style="width: 40px; height: 40px"
          />
          <h4>Bussiness Admin</h4>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card shadow m-3 bg-light">
        <div class="card-body text-center">
          <img
            src="../assets/Category_img/social-sciences-colour.svg"
            alt=""
            style="width: 40px; height: 40px"
          />
          <h4>Social Science</h4>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card shadow m-3 bg-light">
        <div class="card-body text-center">
          <img
            src="../assets/Category_img/icons/icons8-chef-64.png"
            alt=""
            style="width: 40px; height: 40px"
          />
          <h4>Food Technology</h4>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card shadow m-3 bg-light">
        <div class="card-body text-center">
          <img
            src="../assets/Category_img/icons/icons8-chemistry-49.png"
            alt=""
            style="width: 40px; height: 40px"
          />
          <h4>Industrial Chemistry</h4>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card shadow m-3 bg-light">
        <div class="card-body text-center">
          <img
            src="../assets/Category_img/icons/icons8-geology-64.png"
            alt=""
            style="width: 40px; height: 40px"
          />
          <h4>Geology</h4>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card shadow m-3 bg-light">
        <div class="card-body text-center">
          <img
            src="../assets/Category_img/icons/icons8-gps-antenna-50.png"
            alt=""
            style="width: 40px; height: 40px"
          />
          <h4>Mass Communication</h4>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card shadow m-3 bg-light">
        <div class="card-body text-center">
          <img
            src="../assets/Category_img/icons/icons8-mechanic-64.png"
            alt=""
            style="width: 40px; height: 40px"
          />
          <h4>Machanical Engineering</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#book_category .card {
  &:hover {
    border: 2px solid #f5167e;
    cursor: pointer;
  }
}
@media (min-width: 315px) and (max-width: 480px) {
  .card-body {
    display: inline-flex !important;
  }
  .card-body h4 {
    margin: auto 0 auto 10px !important;
    font-size: 16px;
  }
  .card-body img {
    width: 20px !important;
    height: 20px !important;
  }
}
@media (min-width: 520px) and (max-width: 780px) {
  .row .col-sm-6 {
    width: 50%;
  }
  .books {
    padding: 15px !important;
  }
}
</style>
