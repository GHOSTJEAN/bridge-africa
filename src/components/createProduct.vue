<template>
  <div class="card shadow">
    <div class="card-body">
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
          <input class="form-control" type="file" id="formFile"  />
        </div>

        <button class="btn btn-primary">submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "../db";
export default {
  name: "create-product",

  data(){
   return{
     name:'',
     desc:'',
     
   }
  },

  methods: {
    submit(e) {
      db.ref("users/products").push({
        name: this.name,
        desc: this.desc,
        img:'https://firebasestorage.googleapis.com/v0/b/bridge-africa-1dc4e.appspot.com/o/product-img%2Fnotavailable.jpeg?alt=media&token=330c587e-627c-45f3-a0ab-c8cf11857b48'
      }).then(onrejected =>{
        console.log(onrejected)
        alert(this.name+" have been saved successfully");
      });
      e.preventDefault();
    },

  },
};
</script>