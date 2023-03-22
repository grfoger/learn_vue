<template>
  <div>
    <h3>Пользователи</h3>
    <post-item class="post" :post="post" v-for="post in posts"/>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      require: true,
    }
  }
}
</script>

<style scoped>

</style>
