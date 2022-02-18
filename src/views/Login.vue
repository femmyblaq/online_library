<template>
  <div id="login">
    <div class="d-flex justify-content-center align-items-center">
      <div class="card-group shadow w-50">
        <div class="card w-50 m-0">
          <div class="card-body p-4">
            <div class="card-title mb-4 d-flex justify-content-center">
              <img
                class="w-75"
                src="../components/Category_img/icons/LibraryLogo.png"
                alt=""
              />
            </div>
            <form @submit.prevent="onSubmit">
              <div class="form-group" :class="{ invalid: $v.email.$error }">
                <label for="email">Email</label>
                <input
                  type="email"
                  @blur="$v.email.$touch()"
                  class="form-control rounded-1"
                  v-model="email"
                />
                <p
                  v-if="!$v.email.email"
                  style="font-size: 10px"
                  class="text-danger text-center m-0 pt-1 fw-bold"
                >
                  Please provide a valid email address
                </p>
                <p
                  v-if="!$v.email.required"
                  style="font-size: 10px"
                  class="text-danger text-center m-0 pt-1 fw-bold"
                >
                  This field must not be empty
                </p>
              </div>
              <div
                class="form-group mt-3"
                :class="{ invalid: $v.password.$error }"
              >
                <label for="">Password</label>
                <input
                  type="password"
                  @blur="$v.password.$touch()"
                  class="form-control rounded-1"
                  v-model="password"
                />
                <small v-if="!$v.password.$error" class="text-danger"
                  >This field must not be empty</small
                >
              </div>
              <p class="float-end pt-1 text-secondary">Forgot Password?</p>
              <button
                type="submit"
                :disabled="$v.invalid"
                class="btn btn-primary btn-block w-100 rounded-0 mt-2"
              >
                Log In
              </button>
            </form>
            <p class="text-secondary text-center p-3">
              New to online Library?
              <router-link tag="a" to="/register"> Create Account</router-link>
            </p>
          </div>
        </div>
        <div
          id="card-two"
          class="card text-white bg-primary py-5 d-md-down-none"
          style="width: 44%"
        >
          <div
            class="card-body d-flex align-item-center justify-content-center text-center"
          >
            <div>
              <h2>Sign up</h2>
              <p>
                Don't have an account? to register click on the
                <b>Register Now!</b> button below
              </p>
              <router-link :to="{ name: 'Register' }">
                <button class="btn btn-lg btn-outline-light mt-3" type="button">
                  Register Now!
                </button></router-link
              >
              <div class="d-flex text-center justify-content-center p-4">
                <p>Check to see</p>
                <router-link to="/dashboard" class="text-white ms-2"
                  >Dashboard</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: "femmyblaq4445@gmail.com",
      password: "444444",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },
  methods: {
    async onSubmit() {
      try {
        const formData = {
          email: this.email,
          password: this.password,
        };
        console.log(formData);

        const request = await this.$store.dispatch("login", formData);
        console.log("login page async await", request);
        // Notification for successful log in
        this.$notify({
          group: "foo",
          title: "Sucessful",
          type: "sucess",
          text: request.message,
        });
      } catch (error) {
        // const error = JSON.stringify(err);
        this.$notify({
          group: "foo",
          title: "Error",
          type: "error",
          text: error.message,
        });
      }
    },
  },
};
</script>
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
.btn-primary,
.bg-primary {
  background-color: #00001f !important;
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
