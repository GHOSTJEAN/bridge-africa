<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
    <div class="container-fluid">
      <router-link to="/home" class="navbar-brand">Bridge Africa </router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/product" class="nav-link">Products</router-link>
          </li>
        </ul>
        <router-link to="/" class="nav-link">Logout</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "header",
};
</script>