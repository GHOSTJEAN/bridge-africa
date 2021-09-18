<template>
<div id="app">
  <router-view name="header"></router-view>
  <main>
      <router-view />
    </main>
</div>
</template>

<style lang="scss">

.router-link-exact-active{
  color:black !important;
}
</style>
