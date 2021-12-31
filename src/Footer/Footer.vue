<template>
  <div id="footer" class="">
    <div class="footer-top w-100 h-75 m-0 py-4 container-fluid row p-0 m-0">
      <div class="col-lg-3 col-md-4 col-sm-6 p-lg-5">
        <h3 class="text-white ps-3" style="border-left: 5px solid #0000ff">
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
      <div class="col-lg-3 col-md-4 col-sm-6 p-lg-5 text-white links">
        <h5 class="fw-bold position-relative">USEFUL LINKS</h5>
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
      <div class="col-lg-3 col-md-4 col-sm-6 p-lg-5 text-white">
        <h5 class="fw-bold position-relative">CONTACT US</h5>
        <p>
          No 9, Chief fatai aremu street, <br />
          Ajegunle Apapa, <br />Lagos, Nigeria.
        </p>
        <p><span class="fw-bold">Email:</span> info@onlineLibrary.com</p>
        <p><i class="fas fa-phone me-2"></i> +2349016290149</p>
        <p><i class="fab fa-whatsapp me-2"></i> +2349016290149</p>
        <ul class="list-unstyled d-flex d-inline-row">
          <li class=""><i class="fab fa-facebook fa-2x pe-3 pt-lg-3"></i></li>
          <li class=""><i class="fab fa-instagram fa-2x p-3"></i></li>
          <li class=""><i class="fab fa-linkedin-in fa-2x p-3"></i></li>
          <li class=""><i class="fab fa-google fa-2x p-3"></i></li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 p-lg-5 text-white">
        <h5 class="fw-bold position-relative">OUR NEWSLETTER</h5>
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
      <div class="row text-center">
        <div class="col-lg-6 m-auto">
          <p class="mb-0 text-white">
            Copy right 2022 <span class="fw-bold">online Library.</span> All
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
$background-color: #00001f;
#footer {
  background-color: $background-color !important;
}
#footer .footer-top .links h5::before {
  content: "";
  height: 2px;
  background: #ccc;
  position: absolute;
  left: 0;
  right: 0;
}
#footer .footer-top .links h5::after {
  height: 64px;
  background: #0000ff;
  position: absolute;
}
#footer .row .links ul li {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

@media (min-width: 315px) and (max-width: 480px) {
  .footer {
    padding: 15px;
  }
}
</style>
