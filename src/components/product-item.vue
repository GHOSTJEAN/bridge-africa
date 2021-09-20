<template>
  <div class="card">
    <router-link to="/product-detail">
      <img
        v-bind:src="img"
        class="card-img-top img-thumbnail"
        alt="product description"
        height="200px"
      />
    </router-link>
    <div class="card-body">
      <h5 class="card-title">{{name}}</h5>
      <p class="card-text">{{desc}}</p>
     <div class="d-flex flex-column">
     <button class="btn btn-warning me-md-2">modify</button>
      <button class="btn btn-danger mt-2" @click="deleteProduct(name)">delete</button>
     </div>
    </div>
  </div>
</template>
<style scoped>
img{
    object-fit: contain;
}
</style>
<script>
export default {
  name: "product-item",

  props: {
        name:String,
        desc:String,
        img:String
  },

  methods:{
      deleteProduct(name){
         this.$emit('delete-product', { product: name })
      }
  }
};
</script>