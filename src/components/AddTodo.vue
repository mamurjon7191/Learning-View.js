<template>
  <form v-on:submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: " ",
    };
  },
  methods: {
    onSubmit() {
      console.log("form submitted", this.title);
      if (this.title) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          compleated: false,
        };

        this.$emit("add-todo", newTodo);
      }
    },
  },
};
</script>

<style scoped>
input {
  width: 400px;
}
</style>
