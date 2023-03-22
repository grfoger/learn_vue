<template>
  <form @submit.prevent>
    <h4>Создать пост</h4>
    <input v-model="post.title"
           class="input"
           type="text"
           placeholder="Название">
    <input v-model="post.body"
           class="input"
           type="text"
           placeholder="Описание">
    <button class="btn" @click="createPost">Создать</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post)
      this.post = {
        title: '',
        body: '',
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input {
  width: 80%;
  border: 1px solid forestgreen;
  padding: 10px 15px;
  margin-top: 15px;
}
.btn {
  margin-top: 15px;
  align-self: center;
  padding: 8px 20px;
  background: none;
  border: 1px solid forestgreen;
}
</style>
