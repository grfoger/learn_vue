<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  padding: 8px 20px;
  background: none;
  border: 1px solid forestgreen;
}
</style>
