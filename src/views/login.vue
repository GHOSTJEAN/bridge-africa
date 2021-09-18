<template>
  <div class="container position-absolute top-50 start-50 translate-middle">
    <div class="row justify-content-center">
      <form class="card" style="width: 30rem">
        <div class="card-body">
          <div class="mb-3">
            <label for="exampleInputText" class="form-label"
              >Username</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleInputText"
            />
           
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
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
          <router-link to='/home' class="btn btn-primary">Login</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import "../assets/scss/login.module.scss";
export default {
  name: "login",
  components: {},
};
</script>
  