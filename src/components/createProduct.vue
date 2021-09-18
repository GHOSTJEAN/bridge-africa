<template>
    <div class="card shadow">
       <div class="card-body">
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="usb key">
  <label for="floatingInput">Product name</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInputDescription" placeholder="usb key">
  <label for="floatingInputDescription">Product description</label>
</div>

<div class="mb-3">
  <label for="formFile" class="form-label">Product image</label>
  <input class="form-control" type="file" id="formFile">
</div>

<button class="btn btn-primary"> submit</button>
       </div>
    </div>
</template>

<script>
export default {
    name:'create-product',
}
</script>