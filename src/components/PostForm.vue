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
    <my-button class="btn" @click="createPost" style="margin-top: 15px">Создать</my-button>
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
  border: 3px double forestgreen;
  padding: 10px 15px;
  margin-top: 15px;
}

</style>
