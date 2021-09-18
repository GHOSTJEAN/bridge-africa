<template>
  <div class="container mt-5 mb-5">
    <div class="row">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-list-product-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-list-product"
            type="button"
            role="tab"
            aria-controls="pills-list-product"
            aria-selected="true"
          >
            List product
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-create-product-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-create-product"
            type="button"
            role="tab"
            aria-controls="pills-create-product"
            aria-selected="false"
          >
            Create product
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-list-product"
          role="tabpanel"
          aria-labelledby="pills-list-product-tab"
        >
          <ListProduct />
        </div>
        <div
          class="tab-pane fade"
          id="pills-create-product"
          role="tabpanel"
          aria-labelledby="pills-create-product-tab"
        >


         <CreateProduct/>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ListProduct from "@/components/listProduct.vue";
import CreateProduct from '../components/createProduct.vue';

export default {
  name: "Product",
  components: {
    ListProduct,
    CreateProduct,
  },
};
</script>
