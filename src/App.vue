<template>
  <div class="app">
    <h1>Пользователи</h1>
    <div class="app__btns">
      <my-button @click="showDialog">
        Добавить
      </my-button>
      <my-select v-model="selectedSort"
                 :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog>
    <post-list :posts="posts" @remove="removePost" v-if="!isPostLoading"/>
    <div v-else>Идёт загрузка...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog";
import axios from "axios";
  export default {
    components: {
      MyDialog,
      PostList, PostForm
    },
    data() {
      return {
        posts: [],
        dialogVisible: false,
        isPostLoading: false,
        selectedSort: '',
        sortOptions: [
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По содержанию'}
        ]
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
      },
      async fetchPosts() {
        try {
          this.isPostLoading = true;
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
            this.posts = response.data;
        } catch (e) {
          alert("Error")
        } finally {
          this.isPostLoading = false;
        }
      }
    },
    mounted() {
      this.fetchPosts()
    },
    computed: {
      sortedPosts() {
        return [...this.posts].sort((a,b) => {
          return a[this.selectedSort]?.localeCompare(b[this.selectedSort])
        })
      }
     },
    watch: {
      selectedSort(newValue) {
        this.posts.sort((a,b) => {
          return a[newValue]?.localeCompare(b[newValue])
        })
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
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

</style>
