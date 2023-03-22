<template>
  <div class="app">
    <post-form @create="createPost"/>
    <post-list :posts="posts"/>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
  export default {
    components: {
      PostList, PostForm
    },
    data() {
      return {
        posts: [
          {id:1, title: "JS", body: "Description"},
          {id:2, title: "JS2", body: "Description2"},
          {id:3, title: "JS3", body: "Description3"},
        ],
      }
    },
    methods: {
        createPost(post) {
          this.posts.push(post);
        },
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}

</style>
