<template>
  <div class="row g-4">
    <div
      class="col-6 col-sm-6 col-md-3"
      v-for="product in products"
      :key="product['.key'] "
    >
      <productItem v-bind="product" @delete-product="deleteProduct(product)" />
    </div>
    <div
      class="modal fade"
      id="exampleModalToggle"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
      tabindex="-1"
    >
    </div>
  </div>
</template>
<script>
import productItem from "./product-item.vue";
import { db } from "../db";

export default {
  name: "list-product",

  firebase: {
    products: db.ref("users/products"),
  },
  components: {
    productItem,
  },

  data() {
    return {
      products: [],
      delete: false,
    };
  },

  methods: {
    close() {
      this.delete = true;
    },

    deleteProduct(product) {
      if (confirm(`Are you sure to delete the product ${product.name} ?`)) {console.log('ok');
        db.ref("users/products/" +product['.key']).remove();
      }
    },
  },

  mounted() {
    //console.log(product.name)
  },
};
</script>