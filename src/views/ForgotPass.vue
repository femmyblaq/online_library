<template>
  <div id="login">
    <div class="d-flex justify-content-center align-items-center mt-auto">
      <div class="card-group shadow w-50">
        <div class="card w-50 m-0">
          <div class="card-body p-4">
            <div
              class="card-title mb-4 d-flex justify-content-center align-item-center"
            >
              <h3 class="text-primary ps-3 lh-1 fw-bolder">
                Online <i class="fas fa-landmark fa-3"></i><br />
                <span style="font-size: 1.5rem">LIBRARY</span>
              </h3>
            </div>
            <form @submit.prevent="onSubmit">
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control rounded-1"
                  v-model="email"
                />
              </div>
              <p class="float-end pt-1 text-secondary">Forgot Password?</p>
              <button
                type="submit"
                :disabled="$v.invalid"
                class="btn btn-primary btn-block w-100 rounded-0 mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
@import "../assets/variable.scss";
.form-group.invalid input {
  border: 1px solid #ff0000 !important;
  background-color: #fda1a4;
}
.form-group.invalid input:focus {
  border-bottom: 2px solid #ff0000 !important;
}
.form-group.invalid label {
  color: #ff0000;
}
.form-control {
  border: none !important;
  border-radius: 0;
  border-bottom: 2px solid #f3f3f7 !important;
  background-color: rgb(250, 244, 244) !important;
}
.form-control:focus {
  box-shadow: none;
  border-bottom: 2px solid #00001f !important;
  background-color: rgb(243, 237, 237) !important;
}
.form-control:focus,
label {
  color: #00001f;
}
label {
  font-family: $font-family;
  font-size: $font-size;
  // color: #b3b3d3;
}
input {
  font-family: $font-family;
  font-size: $font-size;
}
p {
  font-family: $font-family;
  font-size: $font-size;
}
.btn {
  font-family: $font-family;
}
.text-primary {
  color: $primary-color !important;
}
@media (min-width: 280px) and (max-width: 653px) {
  #login {
    height: 100vh;
  }
  #login .card-group {
    width: 100% !important;
    display: flex;
    align-items: center !important;
    justify-content: center !important;
    margin: auto 10px !important;
  }
  #login .card-group .card {
    width: 100% !important;
  }
  #login #card-two {
    display: none !important;
  }
  #login .card .card-title {
    margin-bottom: 20px !important;
  }
  #login .card .card-title h3 {
    font-size: 1.4rem !important;
  }
  #login .card .card-title span {
    line-height: 0.8;
    font-size: 1.5rem !important;
  }
}
@media (min-width: 315px) and (max-width: 578px) {
  #login {
    height: 100vh;
  }
  #login .card-group {
    width: 100% !important;
    display: flex;
    align-items: center !important;
    justify-content: center !important;
    margin: auto 10px !important;
  }
  #login .card-group .card {
    width: 100% !important;
  }
  #login #card-two {
    display: none !important;
  }
  #login .card .card-title {
    margin-bottom: 20px !important;
  }
  #login .card .card-title h3 {
    font-size: 1.9rem !important;
  }
  #login .card .card-title span {
    line-height: 0.8;
  }
}
@media (min-width: 768px) and (max-width: 1180px) {
  #login {
    height: 100vh !important;
    display: flex !important;
    align-items: center !important;
  }
  #login .card-group {
    width: 100% !important;
    margin: 0 40px;
  }
  #login .card .card-title h3 {
    font-size: 1.6rem !important;
  }
  #login .card .card-title span {
    font-size: 1.7rem !important;
  }
}
</style>
