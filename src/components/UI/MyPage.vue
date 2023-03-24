<template>
<div class="page__wrapper" :value="modelValue">
  <div v-for="page in pages"
       :key="page"
       class="page"
       :class="{
         'current-page': page === current
       }"
       @click="changePage(page)"
  >{{page}}</div>
</div>
</template>

<script>
export default {
  name: "my-page",
  props: {
    pages: {
      type: Array,
    },
    current: {
      type: Number
    },
    modelValue: {
      type:Number
    }

  },
  methods: {
    changePage(page) {
      this.$emit('update:modelValue', page)
    }
  }
}
</script>

<style scoped>
.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 4px solid forestgreen;
}
</style>
