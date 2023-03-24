<template>
  <div class="app">
    <h1>Пользователи</h1>
    <my-button @click="showDialog">
      Добавить
    </my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog>
    <post-list :posts="posts" @remove="removePost"/>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog";
  export default {
    components: {
      MyDialog,
      PostList, PostForm
    },
    data() {
      return {
        posts: [
          {id:1, title: "JS", body: "Description"},
          {id:2, title: "JS2", body: "Description2"},
          {id:3, title: "JS3", body: "Description3"},
        ],
        dialogVisible: false,
      }
    },
    methods: {
        createPost(post) {
          this.posts.push(post);
          this.dialogVisible = false;
        },
      removePost(post) {
          this.posts = this.posts.filter(p => p.id !== post.id)
      },
      showDialog() {
          this.dialogVisible = true;
      }
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
