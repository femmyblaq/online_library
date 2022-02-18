<template>
  <div id="footer" class="">
    <div class="footer-top w-100 h-75 m-0 py-4 container-fluid row p-0 m-0">
      <div class="col-lg-3 col-md-6 col-sm-6 p-lg-5 logo">
        <h3 class="text-white ps-3 mb-3" style="border-left: 5px solid #ffdf00">
          Online <i class="fas fa-landmark fa-3"></i><br />
          <span style="font-size: 2rem">LIBRARY</span>
        </h3>
        <p class="text-white">
          Online Library Management System is Library Automation Software that
          helps the students in better their learning by providing quick access
          to information. providing students the facility to learn, gather
          resources, promote group learning and improve knowledge and skills.
        </p>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 p-lg-5 text-white links">
        <h5 class="fw-bold position-relative pb-3">USEFUL LINKS</h5>
        <ul class="list-unstyled">
          <li class="mb-2">
            <a href="" class="text-decoration-none text-light">Home</a>
          </li>
          <li class="mb-2">
            <a href="" class="text-decoration-none text-light">Ebook</a>
          </li>
          <li class="mb-2">
            <a href="" class="text-decoration-none text-light">AudioBooks</a>
          </li>
          <li class="mb-2">
            <a href="" class="text-decoration-none text-light">About Us</a>
          </li>
          <li class="mb-2">
            <a href="" class="text-decoration-none text-light">Contact Us</a>
          </li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 p-lg-5 text-white contact">
        <h5 class="fw-bold position-relative pb-3">CONTACT US</h5>
        <p class="mt-3">
          No 9, Chief fatai aremu street, <br />
          Ajegunle Apapa, <br />Lagos, Nigeria.
        </p>
        <p><span class="fw-bold">Email:</span> info@onlineLibrary.com</p>
        <p><i class="fas fa-phone me-2"></i> +2349016290149</p>
        <p><i class="fab fa-whatsapp me-2"></i> +2349016290149</p>
        <ul class="list-unstyled d-flex d-inline-row m-0">
          <li class=""><i class="fab fa-facebook fa-2x pe-3 pt-3"></i></li>
          <li class=""><i class="fab fa-instagram fa-2x p-3"></i></li>
          <li class=""><i class="fab fa-linkedin-in fa-2x p-3"></i></li>
          <li class=""><i class="fab fa-google fa-2x p-3"></i></li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 p-lg-5 text-white newsletter">
        <h5 class="fw-bold position-relative pb-3">OUR NEWSLETTER</h5>
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
    ,
    <div class="container-fluid footer-bottom p-0 m-0">
      <div class="row m-0 text-center">
        <div class="col-lg-6 m-auto">
          <p class="mb-0 text-white">
            Copy right 2022 <span class="fw-bold">Online Library.</span> All
            Right Reserved
          </p>
          <p class="text-white">
            Designed by <span style="color: #0000ff">Dev HY</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/variable.scss";
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto&display=swap");
$background-color: #00001f;
#footer {
  background-color: $background-color !important;
}
#footer .footer-top h5::before,
.footer-top h5::after {
  content: "";
  height: 2px;

  position: absolute;
  left: 0;
  bottom: 0;
}
#footer .footer-top h5::before {
  background: #ccc;
  right: 0;
}
#footer .footer-top h5::after {
  width: 73px;
  background: #ffdf00;
}
#footer .footer-top p,
li,
a {
  font-family: $font-family;
  font-size: 0.9rem;
}
#footer .row .links ul li {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}
#footer .footer-bottom div p {
  font-size: 0.8rem;
  // font-family: $font-family !important;
  font-family: "open-sans", "Roboto", sans-serif;
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
