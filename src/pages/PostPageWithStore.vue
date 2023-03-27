<template>
  <div>

    <h1>Пользователи</h1>
    <my-input
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Поиск"
    />
    <div class="app__btns">
      <my-button @click="showDialog">
        Добавить
      </my-button>
      <!-- <my-select v-model="selectedSort"
                  :options="sortOptions"
       /> -->
     </div>
     <my-dialog v-model:show="dialogVisible">
       <post-form @create="createPost"/>
     </my-dialog>
     <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostLoading"/>
     <div v-else>Идёт загрузка...</div>
     <div v-intersection="loadMorePosts" class="observer"></div>
     <my-page v-model="page" :pages="totalPages" :current="page" @click="fetchPosts"></my-page>
   </div>
 </template>

 <script>
 import PostForm from "@/components/PostForm";
 import PostList from "@/components/PostList";
 import MyDialog from "@/components/UI/MyDialog";
 import axios from "axios";
 import MyInput from "@/components/UI/MyInput";
 import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
 export default {
   components: {
     MyInput,
     MyDialog,
     PostList, PostForm
   },
   data() {
     return {
       dialogVisible: false,
     }
   },
   methods: {
     ...mapMutations({
        setPage: 'post/setPage',
       setSearchQuery: 'post/setSearchQuery'
     }),
     ...mapActions({
        loadMorePosts: 'post/loadMorePosts',
       fetchPosts: 'post/fetchPosts'
     }),

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

   },
   mounted() {
     this.fetchPosts()
   },
   computed: {
     ...mapGetters({
        sortedPosts: 'post/sortedPosts',
        sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
     }),
     ...mapState({
       posts: state => state.post.posts,
       isPostLoading: state => state.post.isPostLoading,
       selectedSort: state => state.post.selectedSort,
       searchQuery: state => state.post.searchQuery,
       page: state => state.post.page,
       limit: state => state.post.limit,
       totalPages: state => state.post.totalPages,
       sortOptions: state => state.post.sortOptions
     }),
   },
 }
 </script>

 <style>
 .app__btns {
   margin: 15px 0;
   display: flex;
   justify-content: space-between;
 }
 .observer {
   height: 30px;
   background: green;
 }

 </style>
