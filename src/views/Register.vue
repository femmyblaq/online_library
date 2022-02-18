<template>
  <div
    id="register"
    class="p-4 vh-100 d-flex justify-content-center align-items-center"
  >
    <div class="card p-2 shadow" style="width: 40rem">
      <div class="row">
        <div class="col-lg-12">
          <div class="card-body">
            <div
              class="card-title mb-5 d-flex align-items-center justify-content-center"
            >
              <h3 class="ps-3 fw-bolder">
                Online <i class="fas fa-landmark fa-3"></i><br />
                <span style="font-size: 2rem">LIBRARY</span>
              </h3>
            </div>
            <form @submit.prevent="onSubmit">
              <div class="row">
                <div
                  class="col-md-6 form-group"
                  :class="{ invalid: $v.firstName.$error }"
                >
                  <label for="name">First Name *</label>
                  <input
                    type="name"
                    @blur="$v.firstName.$touch()"
                    class="form-control rounded-1"
                    placeholder="Name"
                    v-model="firstName"
                  />
                  <small class="text-danger" v-if="!$v.firstName.required">
                    First name is required.
                  </small>
                  <small class="text-danger" v-if="!$v.firstName.minLenght">
                    Name must be atleast 3 characters.
                  </small>
                </div>
                <div
                  class="col-md-6 form-group"
                  :class="{ invalif: $v.lastName.$error }"
                >
                  <label>Last Name *</label>
                  <input
                    type="name"
                    @blur="$v.lastName.$touch()"
                    class="form-control rounded-1"
                    placeholder="Last Name"
                    v-model="lastName"
                  />
                  <small class="text-danger" v-if="!$v.lastName.required"
                    >Last name is required.</small
                  >
                  <small class="text-danger" v-if="!$v.lastName.minLenght"
                    >Name must be atleast 3 characters.</small
                  >
                </div>
                <div class="col-md-6 form-group mt-2">
                  <label>UserName *</label>
                  <input
                    type="name"
                    class="form-control rounded-1"
                    placeholder="Enter Username"
                    v-model="userName"
                  />
                </div>
                <div
                  class="col-md-6 form-group mt-2"
                  :class="{ invalid: $v.phoneNumber.$error }"
                >
                  <label for="phoneNumber">phone Number *</label>
                  <input
                    type="number"
                    @blur="$v.phoneNumber.$touch()"
                    class="form-control rounded-1"
                    placeholder="Phone Number"
                    v-model="phoneNumber"
                  />
                  <small class="text-danger" v-if="!$v.phoneNumber.required"
                    >Phone Number is required</small
                  >
                  <small class="text-danger" v-if="!$v.phoneNumber.minLength"
                    >Phone Number must have at least
                    {{ $v.phoneNumber.$params.minLength.min }}
                    characters.</small
                  >
                  <small class="text-danger" v-if="!$v.phoneNumber.maxLength"
                    >Phone Number must not exceed
                    {{ $v.phoneNumber.$params.maxLength.max }}
                    characters.</small
                  >
                </div>

                <div
                  class="col-md-6 form-group mt-2"
                  :class="{ invalid: $v.email.$error }"
                >
                  <label>Email *</label>
                  <input
                    type="email"
                    @blur="$v.email.$touch()"
                    class="form-control rounded-1"
                    placeholder="Enter Your Email"
                    v-model="email"
                  />
                  <p
                    v-if="!$v.email.email"
                    style="font-size: 12px"
                    class="text-center text-danger pt-1 m-0 fw-bold"
                  >
                    Provide a valid email address
                  </p>
                  <p
                    v-if="!$v.email.required"
                    style="font-size: 12px"
                    class="text-center text-danger pt-1 m-0 fw-bold"
                  >
                    This field must not be empty
                  </p>
                </div>
                <div class="col-md-6 form-group mt-2">
                  <label>Gender</label>
                  <select
                    name="gender"
                    id=""
                    class="form-control rounded-1"
                    placeholder="Gender"
                    value="male"
                    v-model="gender"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div
                  class="col-md-6 form-group mt-2"
                  :class="{ invalid: $v.password.$error }"
                >
                  <label>Password *</label>
                  <input
                    type="password"
                    class="form-control rounded-1"
                    @blur="$v.password.$touch()"
                    placeholder="Enter Password"
                    v-model="password"
                  />
                </div>
                <div
                  class="col-md-6 form-group mt-2"
                  :class="{ invalid: $v.password.$error }"
                >
                  <label>Comfirm Password *</label>
                  <input
                    type="password"
                    class="form-control rounded-1"
                    @blur="$v.confirmPassword.$touch()"
                    placeholder="Confirm Password"
                    v-model="confirmPassword"
                  />
                </div>
              </div>
              <button
                type="submit"
                :disabled="$v.invalid"
                class="btn btn-primary w-100 mt-4"
              >
                Register
              </button>
            </form>
            <div class="d-flex text-center justify-content-center pt-2">
              <p>Check to see</p>
              <router-link to="/dashboard" class="text-primary ms-2"
                >Dashboard</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      userName: "",
      phoneNumber: "",
      email: "femmyblaq@gmail.com",
      gender: "Female",
      password: "12345",
      confirmPassword: "12345",
    };
  },
  validations: {
    firstName: {
      required,
      minLenght: minLength(3),
    },
    lastName: {
      required,
      minLenght: minLength(3),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    confirmPassword: {
      sameAs: sameAs("password"),
    },
    phoneNumber: {
      required,
      minLength: minLength(11),
      maxLength: maxLength(11),
    },
  },
  methods: {
    async onSubmit() {
      try {
        const formData = {
          first_name: this.firstName,
          last_name: this.lastName,
          username: this.userName,
          phone_no: this.phoneNumber,
          email: this.email,
          gender: this.gender,
          password: this.password,
          comfirmPassword: this.confirmPassword,
        };
        console.log(formData);
        const response = await this.$store.dispatch("register", formData);
        console.log("register page response ", response);
        // Notification for successful log in
        this.$notify({
          group: "foo",
          title: "Sucessful",
          type: "sucess",
          text: response.status,
        });
      } catch (error) {
        console.log(error);
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
#register .form-group.invalid input {
  border: 1px solid #ff0000 !important;
  background-color: #fda1a4;
}
#register .form-group.invalid input:focus {
  border-bottom: 2px solid #ff0000 !important;
}
#register .form-group.invalid label {
  color: #ff0000;
}
#register .form-control {
  border: none !important;
  border-radius: 0;
  border-bottom: 2px solid #f3f3f7 !important;
  background-color: rgb(250, 244, 244) !important;
}
#register .form-control:focus {
  box-shadow: none;
  border-bottom: 2px solid #00001f !important;
  background-color: rgb(243, 237, 237) !important;
}
#register .form-control:focus,
.form-control:focus,
label {
  color: #00001f;
}
label {
  font-family: $font-family;
  font-size: 0.8rem;
  // color: #b3b3d3;
}
input {
  font-family: $font-family;
  font-size: 0.8rem;
}
.btn {
  font-family: $font-family;
}
@media (min-width: 315px) and (max-width: 468px) {
  #register {
    display: flex;
    align-items: center !important;
  }
  .card {
    width: 100% !important;
  }
  #register .card .row .card-title {
    margin-bottom: 10px !important;
  }
  #register .card .row .card-title h3 {
    font-size: 1.9rem !important;
  }
  #register .card .row .card-title span {
    line-height: 0.8;
  }
}

@media (min-width: 280px) and (max-width: 653px) {
  #register {
    height: 100vh;
  }
  #register .card-group {
    width: 100% !important;
    display: flex;
    align-items: center !important;
    justify-content: center !important;
    margin: auto 10px !important;
  }
  #register .card-group .card {
    width: 100% !important;
  }
  #register #card-two {
    display: none !important;
  }
  #register .card .card-title {
    margin-bottom: 20px !important;
  }
  #register .card .card-title h3 {
    font-size: 1.4rem !important;
  }
  #register .card .card-title span {
    line-height: 0.8;
    font-size: 1.5rem !important;
  }
}
@media (min-width: 768px) and (max-width: 1180px) {
  #register {
    height: 100vh !important;
    display: flex !important;
    align-items: center !important;
  }
  #register .card-group {
    width: 100% !important;
    margin: 0 40px;
  }
  #register .card .card-title h3 {
    font-size: 1.6rem !important;
  }
  #register .card .card-title span {
    font-size: 1.7rem !important;
  }
}
</style>
