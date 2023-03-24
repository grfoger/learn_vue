<template>
  <div class="app">
    <h1>Пользователи</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Поиск"
    />
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
    <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostLoading"/>
    <div v-else>Идёт загрузка...</div>
    <my-page v-model="page" :pages="totalPages" :current="page" @click="fetchPosts"></my-page>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog";
import axios from "axios";
import MyInput from "@/components/UI/MyInput";
  export default {
    components: {
      MyInput,
      MyDialog,
      PostList, PostForm
    },
    data() {
      return {
        posts: [],
        dialogVisible: false,
        isPostLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPages: 0,
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
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
              params: {
                _page: this.page,
                _limit: this.limit,
              }
            });
            this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
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
      },
      sortedAndSearchedPosts() {
        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
     },
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
