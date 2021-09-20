<template>
  <div class="card shadow">
    <div class="card-body">
      <div
        class="alert alert-success alert-dismissible fade show"
        role="alert"
        v-show="success"
      >
        {{ msg }}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <form @submit="submit">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="usb key"
            v-model="name"
          />
          <label for="floatingInput">Product name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInputDescription"
            placeholder="usb key"
            v-model="desc"
          />
          <label for="floatingInputDescription">Product description</label>
        </div>

        <div class="mb-3">
          <label for="formFile" class="form-label">Product image</label>
          <input class="form-control" type="file" id="formFile" />
        </div>

        <button class="btn btn-primary">
          save
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
            v-show="load"
          ></span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "../db";
export default {
  name: "create-product",

  data() {
    return {
      name: "",
      desc: "",
      msg: "saved successffuly",
      success: false,
      load: false,
    };
  },

  methods: {
    submit(e) {
      this.load = true;
      db.ref("users/products")
        .push({
          name: this.name,
          desc: this.desc,
          img: "https://firebasestorage.googleapis.com/v0/b/bridge-africa-1dc4e.appspot.com/o/product-img%2Fnotavailable.jpeg?alt=media&token=330c587e-627c-45f3-a0ab-c8cf11857b48",
        })
        .then(() =>{
          this.success = true;
          this.msg = this.name + " " + this.msg;
          this.load = false;
        })
        .catch((error) => {
          alert(error.message);
        });
      e.preventDefault();
    },
  },
};
</script>