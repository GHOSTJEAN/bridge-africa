<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card">
        <router-link to="/product-detail">
          <img
            src="../assets/logo.png"
            class="card-img-top"
            alt="product description"
          />
        </router-link>
        <div class="card-body">
          <h5 class="card-title">Product Name</h5>
          <p class="card-text">product</p>
          <button class="btn btn-warning me-2">modify</button>
          <button class="btn btn-danger">delete</button>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <router-link to="/product-detail">
          <img
            src="../assets/logo.png"
            class="card-img-top"
            alt="product description"
          />
        </router-link>
        <div class="card-body">
          <h5 class="card-title">Product Name</h5>
          <p class="card-text">product</p>
          <button class="btn btn-warning me-2">modify</button>
          <button class="btn btn-danger">delete</button>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <router-link to="/product-detail">
          <img
            src="../assets/logo.png"
            class="card-img-top"
            alt="product description"
          />
        </router-link>
        <div class="card-body">
          <h5 class="card-title">Product Name</h5>
          <p class="card-text">product</p>
          <button class="btn btn-warning me-2">modify</button>
          <button class="btn btn-danger">delete</button>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <router-link to="/product-detail">
          <img
            src="../assets/logo.png"
            class="card-img-top"
            alt="product description"
          />
        </router-link>
        <div class="card-body">
          <h5 class="card-title">Product Name</h5>
          <p class="card-text">product</p>
          <button class="btn btn-warning me-2">modify</button>
          <button class="btn btn-danger">delete</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "list-product",
};
</script>