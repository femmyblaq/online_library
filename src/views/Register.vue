<template>
  <div class="login p-5">
    <div
      class="card p-4 shadow d-flex justify-content-center align-items-center m-auto"
      style="width: 40rem"
    >
      <div class="row">
        <div class="col-12">
          <div class="card-body">
            <div class="card-title mb-lg-5">
              <h3
                class="text-primary ps-3"
                style="border-left: 5px solid #0000ff"
              >
                Online <i class="fas fa-landmark fa-3"></i><br />
                <span style="font-size: 2rem">LIBRARY</span>
              </h3>
            </div>
            <form @submit.prevent="onSubmit">
              <div class="row">
                <div class="col-md-6 form-group">
                  <strong><label for="name">First Name *</label></strong>
                  <input
                    type="name"
                    class="form-control"
                    placeholder="Name"
                    v-model="firstName"
                  />
                </div>
                <div class="col-md-6 form-group">
                  <strong><label for="email">Last Name *</label></strong>
                  <input
                    type="name"
                    class="form-control"
                    placeholder="Last Name"
                    v-model="lastName"
                  />
                </div>
                <div class="col-md-6 form-group mt-2">
                  <strong><label for="email">UserName *</label></strong>
                  <input
                    type="name"
                    class="form-control"
                    placeholder="Enter Your Email"
                    v-model="userName"
                  />
                </div>
                <div class="col-md-6 form-group mt-2">
                  <strong><label for="email">phone Number *</label></strong>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Enter Your Number"
                    v-model="phoneNumber"
                  />
                </div>
                <div class="col-md-6 form-group mt-2">
                  <strong><label for="email">Email *</label></strong>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter Your Email"
                    v-model="email"
                  />
                </div>
                <div class="col-md-6 form-group mt-2">
                  <strong><label for="email">Gender</label></strong>
                  <select name="" id="" class="form-control" v-model="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div class="col-md-6 form-group mt-2">
                  <strong><label>Password *</label></strong>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter Password"
                    v-model="password"
                  />
                </div>
                <div class="col-md-6 form-group mt-2">
                  <strong><label>Comfirm Password *</label></strong>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password"
                    v-model="confirmPassword"
                  />
                </div>
              </div>
              <button type="submit" class="btn btn-primary w-100 mt-4">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      userName: "",
      phoneNumber: null,
      email: "femmyblaq@gmail.com",
      gender: "Female",
      password: "12345",
      confirmPassword: "12345",
    };
  },
  methods: {
    onSubmit() {
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
      this.$store.dispatch("register", formData);
    },
  },
};
</script>
<style lang="scss">
@import "../assets/variable.scss";
.form-control {
  border: none !important;
  border-radius: 0;
  border-bottom: 2px solid #ccc !important;
  background-color: #ffffff;
}
.form-control:focus {
  box-shadow: none;
  border-bottom: 2px solid #00001f !important;
}
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
</style>
