<template>
  <div class="auth-wrapper d-flex">
    <div class="col-md-10 m-auto">
      <div class="bg-white shadow-sm">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style scoped>
.auth-wrapper {
  min-height: 90vh;
}
</style>
