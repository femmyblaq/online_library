<template>
  <div id="about">
    <div class="overlay-container">
      <div class="overlay"></div>
      <img
        src="../../public/img/lib-imgVI.jpg"
        class="vw-100"
        style="height: 15rem"
        alt=""
      />
      <div class="text">
        <h5 class="text-white">Home <i class="fa fas-arrow"></i> About</h5>
        <h3 class="text-white">Learning Made Easy!</h3>
      </div>
    </div>

    <div class="row w-100 first-row">
      <!-- <div class="col-lg-6 col-md-6">
        <img src="../../public/img/lib-imgIV.jpg" class="w-100" alt="" />
      </div>  -->
      <div class="col-lg-10 col-md-6 m-auto">
        <h2 class="text-primary text-center mb-3">
          ABOUT Online Library System
        </h2>
        <img
          src="../../public/img/lib-imgIV.jpg"
          class="w-50 h-50 me-4 mb-4 pe-2"
          alt=""
        />
        <p class="text-dark">
          Online Library management system is a software that uses to maintain
          the record of the library. It contains work like the number of
          available books in the library, the number of books are issued or
          returning or renewing a book or late fine charge record, etc. Library
          Management Systems is software that helps to maintain a database that
          is useful to enter new books & record books borrowed by the members,
          with the respective submission dates. Moreover, it also reduces the
          manual record burden of the librarian. Library management system
          allows the librarian to maintain library resources in a more operative
          manner that will help to save their time. It is also convenient for
          the librarian to manage the process of books allotting and making
          payment. Library management system is also useful for students as well
          as a librarian to keep the constant track of the availability of all
          books in a store. Importance of library management system: A library
          management system is the most proficient and easy to use system for
          managing all the processes involved in a Library in the most effective
          ways. This system will reduce all the manual work and the whole
          process can be managed just through single clicks and edits. There
          will be no headache and doubtfulness of storing the data securely and
          searching the records of any individual afterward. Any book seeker can
          rent a book just by signing in with their details, and return it with
          the date of returning. The staff can also facilitate themselves with
          some extra authorizations and privileges. Only, one person is required
          to take care of the whole system, without any chances of mistakes.
        </p>
      </div>
      <div class="col-lg-12 col-md-6">
        <img
          src="../../public/img/library-management-system.jpg"
          class="w-50"
          alt=""
        />
      </div>
      <div class="col-lg-6 col-md-6">
        <h2 class="text-primary">OBJECTIVES</h2>
        <p>
          Advantage of the library management system: 1. It reduces the manual
          paperwork through it and gives proper information of books has been
          recorded automatically. 2. Librarian can update the information of
          books and manage availability and arriver record of the books. 3. It
          saves human efforts and time. 4. With the help of library management
          software, the customer can easily search and find the books.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/variable.scss";
#overlay-container {
  position: relative;
  width: 100%;
}
#about .overlay-container {
  .overlay {
    opacity: 50%;
    position: absolute;
    background-color: $background-color;
    z-index: $z-index;
    width: 100%;
    height: 15rem;
  }
}
#about .text {
  position: absolute;
  top: 15%;
  left: 35%;
  z-index: $z-index;
}
// #about .overlay-container:hover .text {
//   display: block;
// }
#about h5 {
  font-weight: 200;
  font-size: 1.5rem;
  text-align: center;
}
#about h3 {
  font-weight: 200;
  font-size: 2.5rem;
  text-align: center;
}
#about img {
  float: left;
}

@media (min-width: 315px) and (max-width: 480px) {
  #about .overlay-container {
    .overlay {
      height: 20rem;
    }
  }
  #about .overlay-container img {
    height: 20rem !important;
  }
  #about .text {
    top: 25%;
    left: 25%;
  }
  #about .first-row {
    padding: 20px !important;
  }
  // #about .overlay-container:hover .text {
  //   display: block;
  // }
  #about h5 {
    font-weight: 200;
    font-size: 0.8rem;
  }
  #about h3 {
    font-weight: 200;
    font-size: 1.5rem;
  }
  #about img {
    float: left;
    margin: 0 !important;
  }
}
</style>
