<template>
  <div v-if="posts.length > 0">
    <h3>Пользователи</h3>
    <post-item class="post"
               :post="post"
               v-for="post in posts"
               :key="post.id"
                @remove="$emit('remove', post)"/>
  </div>
  <h2 style="color: red" v-else>Список пользователей пуст</h2>
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
