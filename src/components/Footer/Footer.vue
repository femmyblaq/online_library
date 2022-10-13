<template>
  <div id="footer" class="">
    <div class="footer-top w-100 h-75 m-0 py-4 container-fluid row p-0 m-0">
      <div class="col-lg-3 col-md-6 col-sm-6 p-lg-4 logo">
        <img
          style="width: 150px"
          src="../../assets/Category_img/icons/LibraryTuT_white.png"
          alt=""
        />
        <p class="text-white">
          Online Library Management System is Library Automation Software that
          helps the students in better their learning by providing quick access
          to information. providing students the facility to learn, gather
          resources, promote group learning and improve knowledge and skills.
        </p>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 p-lg-4 text-white links">
        <h5 class="pb-2">USEFUL LINKS</h5>
        <ul class="list-unstyled">
          <li class="mb-2">
            <a href="" class="text-decoration-none">Home</a>
          </li>
          <li class="mb-2">
            <a href="" class="text-decoration-none">Ebook</a>
          </li>
          <li class="mb-2">
            <a href="" class="text-decoration-none">AudioBooks</a>
          </li>
          <li class="mb-2">
            <a href="" class="text-decoration-none">About Us</a>
          </li>
          <li class="mb-2">
            <a href="" class="text-decoration-none">Contact Us</a>
          </li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 p-lg-4 text-white contact">
        <h5 class="pb-2">LEARN</h5>
        <div class="row m-0">
          <div class="col-6 ps-0">
            <ul class="list-unstyled m-0">
              <router-link tag="li" to="/">
                <a href="">Architecture</a>
              </router-link>
              <router-link tag="li" to="/">
                <a href="">Mathematics</a>
              </router-link>
              <router-link tag="li" to="/">
                <a href="">Economics</a>
              </router-link>
              <router-link tag="li" to="/">
                <a href="">Computer Science</a>
              </router-link>
              <router-link tag="li" to="/">
                <a href="">Medicine</a>
              </router-link>
              <router-link tag="li" to="/">
                <a href="">Chemistry</a>
              </router-link>
              <router-link tag="li" to="/">
                <a href="">Phisics</a>
              </router-link>
              <router-link tag="li" to="/">
                <a href="">Business</a>
              </router-link>
            </ul>
          </div>
          <div class="col-6">
            <ul class="list-unstyled m-0">
              <router-link tag="li" to="/">
                <a href="">Architecture</a>
              </router-link>
              <router-link tag="li" to="/">
                <a href="">Mathematics</a>
              </router-link>
              <router-link tag="li" to="/">
                <a href="">Economics</a>
              </router-link>
              <router-link tag="li" to="/">
                <a href="">Computer Science</a>
              </router-link>
              <router-link tag="li" to="/">
                <a href="">Medicine</a>
              </router-link>
              <router-link tag="li" to="/">
                <a href="">Chemistry</a>
              </router-link>
              <router-link tag="li" to="/">
                <a href="">Phisics</a>
              </router-link>
              <router-link tag="li" to="/">
                <a href="">Business</a>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 p-lg-4 text-white newsletter">
        <h5 class="pb-2">OUR NEWSLETTER</h5>
        <p class="text-white py-lg-3">
          Stay informed with what we have been unto.
        </p>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text bg-primary" id="basic-addon2"
            ><i class="fas fa-location-arrow text-white"></i
          ></span>
        </div>
      </div>
    </div>
    <hr class="bg-light px-5" />
    <div class="container-fluid footer-bottom p-0 m-0">
      <div class="row m-0">
        <div class="col-lg-6 m-auto">
          <p class="mb-0 text-white">
            Copy right 2022 <span class="fw-bold">Online Library.</span> All
            Right Reserved
          </p>
          <p class="text-white">Designed by <span>Dev HY</span></p>
        </div>
        <div class="col-lg-6 d-flex justify-content-end">
          <ul class="list-unstyled text-end d-inline-flex m-0">
            <li class=""><i class="fab fa-facebook"></i></li>
            <li class=""><i class="fab fa-instagram px-2"></i></li>
            <li class=""><i class="fab fa-linkedin-in pe-2"></i></li>
            <li class=""><i class="fab fa-google"></i></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../../assets/variable.scss";
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto&display=swap");
$background-color: #00001f;
#footer {
  background-color: $background-color !important;
}
#footer .footer-top h5 {
  color: #fddd2a;
  font-size: 1rem;
}
#footer p,
#footer li,
#footer a {
  font-size: 0.9rem;
  color: #bfbffa !important;
}
#footer .footer-bottom div p {
}

@media (min-width: 315px) and (max-width: 480px) {
  #footer {
    padding: 15px;
  }
  #footer .footer-top .links,
  .contact,
  .newsletter {
    padding: 25px 15px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  #footer .footer-top .links,
  .contact,
  .newsletter {
    padding: 39px 15px;
  }
  #footer .footer-top .links {
    padding-top: 0;
  }
}
@media (min-width: 1024px) and (max-width: 1336px) {
  #footer .footer-top .logo,
  .links,
  .contact,
  .newsletter {
    padding: 39px 15px !important;
  }
  #footer {
    padding: 0 30px !important;
  }
}
@media (min-width: 280px) and (max-width: 653px) {
  #footer .footer-top .logo,
  .links,
  .contact,
  .newsletter {
    padding: 39px 15px !important;
  }
  #footer .footer-top {
    padding-top: 5px 20px !important;
  }
}
</style>
