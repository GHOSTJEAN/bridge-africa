<template>
  <div class="container position-absolute top-50 start-50 translate-middle">
    <div class="row justify-content-center">
      <form class="card" style="width: 30rem" @submit="login" novalidate>
        <div class="card-body">
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
            v-show="loginError"
          >
          {{msg}}
          </div>

          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              name="username"
              v-model="username"
              v-bind:class="{
                'is-valid': usernameValid && usernameValid !== null,
                'is-invalid': !usernameValid && usernameValid !== null,
              }"
              required
            />
            <div class="invalid-feedback">
              Enter a username. (minimum length 4)
            </div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              v-bind:class="{
                'is-valid': passwordValid && passwordValid !== null,
                'is-invalid': !passwordValid && passwordValid !== null,
              }"
              required
            />
            <div class="invalid-feedback">
              Enter a password. (minimum length 4)
            </div>
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Check me out</label
            >
          </div>

          <button class="btn btn-primary" type="submit" :disabled="formValid">
            Login
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
              v-show="load"
            ></span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "../db";
export default {
  name: "login",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      load: false,
      loginError: false,
      msg:'',
    };
  },

  methods: {
    login(e) {
      this.load = true;

      db.ref("users/"+ this.username).once("value", (snapshot) => {
        const user = snapshot.val();
        if (user !== null && user.password === this.password) {
          this.load = false;
          this.$router.push({ name: "Home" });
        } else {
          this.load = false;
          this.loginError = true;
          this.msg = 'user not authorized';
        }
      });

      e.preventDefault();
    },
  },

  computed: {
    usernameValid() {
      return this.username.length >= 4
        ? true
        : this.username.length === 0
        ? null
        : false;
    },

    passwordValid() {
      return this.password.length >= 4
        ? true
        : this.password.length === 0
        ? null
        : false;
    },

    formValid() {
      return !(this.usernameValid && this.passwordValid);
    },
  },

  mounted() {},
};
</script>
  