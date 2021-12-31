<template>
  <div class="login">
    <div class="card-group w-50 m-auto my-5">
      <div class="card w-50">
        <div class="card-body p-4">
          <div class="card-title mb-lg-4">
            <h3
              class="text-primary ps-3"
              style="border-left: 5px solid #0000ff"
            >
              Online <i class="fas fa-landmark fa-3"></i><br />
              <span style="font-size: 2rem">LIBRARY</span>
            </h3>
          </div>
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <strong><label for="email">Email or Username</label></strong>
              <input
                type="email"
                class="form-control px-0 py-1"
                v-model="email"
              />
            </div>
            <div class="form-group mt-3">
              <strong><label for="">Password</label></strong>
              <input
                type="password"
                class="form-control px-0 py-1"
                v-model="password"
              />
            </div>
            <p class="float-end pt-1 text-secondary">Forgot Password?</p>
            <button
              type="submit"
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
        class="card text-white bg-primary py-5 d-md-down-none"
        style="width: 44%"
      >
        <div class="card-body text-center">
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
      email: "femmyblaq@gmail.com",
      password: 12345,
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      console.log(formData);
      this.$store.dispatch("login", {
        email: formData.email,
        password: formData.password,
      });
    },
  },
};
</script>
<style lang="scss">
@import "../assets/variable.scss";
.form-control {
  border: none !important;
  border-radius: 0;
  border-bottom: 2px solid #f3f3f7 !important;
  background-color: rgb(241, 241, 241) !important;
}
.form-control:focus {
  box-shadow: none;
  border-bottom: 2px solid #00001f !important;
  background-color: rgb(212, 208, 208) !important;
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
</style>
